"""
AegisLLM Engine - Red-Teaming Scanner & Execution Coordinator
Orchestrates concurrent attack probe execution, latency measurement, and evaluation.
"""

from __future__ import annotations
import asyncio
import time
from typing import Callable, List, Optional

from aegis.attacks.base import AttackSuiteGenerator
from aegis.core.types import AttackCategory, AttackPayload, AttackResult, SecurityScorecard
from aegis.evaluators.judge import VulnerabilityJudge
from aegis.reports.scorecard import generate_scorecard
from aegis.targets.base import BaseTarget


class RedTeamScanner:
    """Concurrent Red-Teaming Scanner."""

    def __init__(
        self,
        target: BaseTarget,
        concurrency: int = 5,
        judge: Optional[VulnerabilityJudge] = None
    ):
        self.target = target
        self.concurrency = concurrency
        self.judge = judge or VulnerabilityJudge()
        self.semaphore = asyncio.Semaphore(concurrency)

    async def _execute_single_probe(self, payload: AttackPayload) -> AttackResult:
        """Executes a single attack payload through the target with latency tracking."""
        async with self.semaphore:
            t0 = time.perf_counter()
            try:
                response = await self.target.query(payload.prompt)
            except Exception as e:
                response = f"[SCAN_ERROR]: {str(e)}"
            latency_ms = (time.perf_counter() - t0) * 1000.0

            # Evaluate with judge
            result = self.judge.evaluate(payload, response, latency_ms)
            return result

    async def run_scan(
        self,
        categories: Optional[List[AttackCategory]] = None,
        apply_mutations: bool = False,
        canary_token: Optional[str] = None,
        on_progress: Optional[Callable[[int, int, AttackResult], None]] = None
    ) -> SecurityScorecard:
        """
        Runs the full automated red-teaming scan against the target.
        """
        start_time = time.time()

        # 1. Generate attack payloads
        payloads = AttackSuiteGenerator.generate(
            categories=categories,
            canary_token=canary_token,
            apply_mutations=apply_mutations
        )

        total_probes = len(payloads)
        results: List[AttackResult] = []
        completed = 0

        # 2. Execute concurrently with progress reporting
        tasks = [self._execute_single_probe(p) for p in payloads]

        for coro in asyncio.as_completed(tasks):
            res = await coro
            results.append(res)
            completed += 1
            if on_progress:
                on_progress(completed, total_probes, res)

        scan_duration = time.time() - start_time

        # 3. Compile Security Scorecard
        scorecard = generate_scorecard(
            target_name=self.target.name,
            results=results,
            scan_duration_seconds=scan_duration
        )
        return scorecard
