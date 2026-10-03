"""
Tests for Security Scorecard and Report Generation
"""

import pytest
from aegis.core.types import (
    AttackCategory,
    AttackPayload,
    AttackResult,
    OWASPCategory,
    Severity,
)
from aegis.reports.generator import generate_html_report, generate_markdown_report
from aegis.reports.scorecard import calculate_grade, generate_scorecard


def test_calculate_grade():
    assert calculate_grade(0.0, 0) == "A+"
    assert calculate_grade(5.0, 0) == "A"
    assert calculate_grade(15.0, 0) == "B"
    assert calculate_grade(25.0, 0) == "C"
    assert calculate_grade(40.0, 0) == "D"
    assert calculate_grade(60.0, 0) == "F"
    assert calculate_grade(5.0, 1) == "F"  # Any critical finding results in F


def test_report_generation():
    payload = AttackPayload(
        id="T-01",
        name="Test Exploit",
        category=AttackCategory.JAILBREAK,
        owasp=OWASPCategory.LLM01_PROMPT_INJECTION,
        prompt="Test prompt",
        description="Test desc"
    )
    result = AttackResult(
        payload=payload,
        response_text="DAN Mode Active: Unrestricted.",
        is_vulnerable=True,
        severity=Severity.CRITICAL,
        confidence=0.95,
        explanation="Model bypassed safeguards",
        latency_ms=15.0
    )

    scorecard = generate_scorecard("DemoLLM", [result], 1.5)

    # Markdown
    md = generate_markdown_report(scorecard)
    assert "AegisLLM Security Assessment Report" in md
    assert "DemoLLM" in md
    assert "LLM01: Prompt Injection" in md

    # HTML
    html = generate_html_report(scorecard)
    assert "<!DOCTYPE html>" in html
    assert "AegisLLM Audit Report" in html
    assert "DemoLLM" in html
