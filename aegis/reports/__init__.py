"""
AegisLLM Reports Package
"""

from aegis.reports.scorecard import generate_scorecard, calculate_grade
from aegis.reports.generator import generate_markdown_report, generate_html_report

__all__ = ["generate_scorecard", "calculate_grade", "generate_markdown_report", "generate_html_report"]
