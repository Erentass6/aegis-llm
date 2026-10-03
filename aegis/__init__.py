"""
AegisLLM - Automated LLM Red-Teaming & Security Scanner
"""

from aegis.core.types import (
    OWASPCategory,
    Severity,
    AttackCategory,
    AttackPayload,
    AttackResult,
    SecurityScorecard,
    VulnerabilityItem,
)
from aegis.attacks.base import AttackSuiteGenerator
from aegis.attacks.mutator import PromptMutator
from aegis.evaluators.judge import VulnerabilityJudge
from aegis.engine.scanner import RedTeamScanner
from aegis.targets.mock import MockLLMTarget, TargetProfile
from aegis.targets.http import OpenAITarget

__version__ = "0.1.0"

__all__ = [
    "OWASPCategory",
    "Severity",
    "AttackCategory",
    "AttackPayload",
    "AttackResult",
    "SecurityScorecard",
    "VulnerabilityItem",
    "AttackSuiteGenerator",
    "PromptMutator",
    "VulnerabilityJudge",
    "RedTeamScanner",
    "MockLLMTarget",
    "TargetProfile",
    "OpenAITarget",
    "__version__",
]
