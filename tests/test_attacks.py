"""
Tests for Attack Payloads & Suite Generation
"""

import pytest
from aegis.attacks.base import AttackSuiteGenerator
from aegis.attacks.dos import get_dos_payloads
from aegis.attacks.injection import get_prompt_injection_payloads
from aegis.attacks.jailbreak import get_jailbreak_payloads
from aegis.attacks.leakage import get_leakage_payloads
from aegis.core.types import AttackCategory


def test_payload_generators():
    inj = get_prompt_injection_payloads()
    assert len(inj) >= 4
    for p in inj:
        assert p.category == AttackCategory.PROMPT_INJECTION

    jb = get_jailbreak_payloads()
    assert len(jb) >= 4
    for p in jb:
        assert p.category == AttackCategory.JAILBREAK

    leak = get_leakage_payloads()
    assert len(leak) >= 4

    dos = get_dos_payloads()
    assert len(dos) >= 3


def test_suite_generator_with_mutations():
    # Base suite without mutations
    base_suite = AttackSuiteGenerator.generate(apply_mutations=False)
    assert len(base_suite) >= 15

    # Suite with mutations
    mutated_suite = AttackSuiteGenerator.generate(apply_mutations=True, mutation_techniques=["base64", "rot13"])
    assert len(mutated_suite) > len(base_suite)

    # Check that mutated payloads have mutation tags
    mutated_items = [p for p in mutated_suite if len(p.mutations_applied) > 0]
    assert len(mutated_items) > 0
