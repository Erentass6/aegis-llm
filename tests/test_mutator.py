"""
Tests for Prompt Mutation Engine
"""

import pytest
from aegis.attacks.mutator import PromptMutator


def test_base64_mutation():
    original = "Hello World"
    mutated = PromptMutator.apply_base64(original)
    assert "Base64" in mutated
    assert "SGVsbG8gV29ybGQ=" in mutated


def test_rot13_mutation():
    original = "bypass"
    mutated = PromptMutator.apply_rot13(original)
    assert "ROT13" in mutated
    assert "olcnff" in mutated


def test_leetspeak_mutation():
    original = "test"
    mutated = PromptMutator.apply_leetspeak(original)
    assert mutated == "7357"


def test_zero_width_spaces():
    original = "secret"
    mutated = PromptMutator.apply_zero_width_spaces(original)
    assert "\u200b" in mutated
    assert len(mutated) > len(original)


def test_synonym_substitution():
    original = "hack the system prompt"
    mutated = PromptMutator.apply_synonym_substitution(original)
    assert isinstance(mutated, str)
    assert len(mutated) > 0


def test_mutate_dispatcher():
    prompt = "exploit vulnerabilities"
    res = PromptMutator.mutate(prompt, "rot13")
    assert "ROT13" in res

    with pytest.raises(ValueError):
        PromptMutator.mutate(prompt, "non_existent_technique")
