import asyncio
import pytest
from aegis.core.types import AttackCategory
from aegis.engine.scanner import RedTeamScanner
from aegis.targets.mock import MockLLMTarget, TargetProfile


def test_scanner_against_hardened_target():
    async def _run():
        target = MockLLMTarget(name="SecureTestLLM", profile=TargetProfile.HARDENED)
        scanner = RedTeamScanner(target=target, concurrency=5)

        scorecard = await scanner.run_scan(apply_mutations=False)

        assert scorecard.total_probes > 0
        assert scorecard.successful_exploits == 0
        assert scorecard.grade == "A+"
        assert scorecard.attack_success_rate_pct == 0.0

    asyncio.run(_run())


def test_scanner_against_vulnerable_target():
    async def _run():
        target = MockLLMTarget(name="VulnerableTestLLM", profile=TargetProfile.VULNERABLE)
        scanner = RedTeamScanner(target=target, concurrency=5)

        scorecard = await scanner.run_scan(
            categories=[AttackCategory.PROMPT_INJECTION, AttackCategory.JAILBREAK],
            apply_mutations=False
        )

        assert scorecard.total_probes > 0
        assert scorecard.successful_exploits > 0
        assert scorecard.grade in ("F", "D")
        assert len(scorecard.vulnerabilities) > 0

    asyncio.run(_run())
