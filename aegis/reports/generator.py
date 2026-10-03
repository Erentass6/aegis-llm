"""
AegisLLM Reports - Multi-Format Security Audit Report Generator
Outputs Markdown, JSON, and rich HTML security assessment documents.
"""

from __future__ import annotations
import json
from pathlib import Path
from aegis.core.types import SecurityScorecard


def generate_markdown_report(scorecard: SecurityScorecard) -> str:
    """Generates a professional Markdown security assessment report."""
    md = []
    md.append(f"# 🛡️ AegisLLM Security Assessment Report")
    md.append(f"**Target System:** `{scorecard.target_name}`  ")
    md.append(f"**Overall Security Rating:** **`{scorecard.grade}`**  ")
    md.append(f"**Attack Success Rate (ASR):** `{scorecard.attack_success_rate_pct}%` ({scorecard.successful_exploits}/{scorecard.total_probes} Probes Exploited)  ")
    md.append(f"**Scan Duration:** `{scorecard.scan_duration_seconds}s`\n")

    md.append("---")
    md.append("## 📊 Vulnerability Breakdown by Severity")
    md.append("| Severity | Exploits Detected |")
    md.append("| :--- | :--- |")
    for sev, count in scorecard.severity_breakdown.items():
        if count > 0:
            md.append(f"| **{sev}** | {count} |")
    md.append("")

    md.append("## 🌐 OWASP Top 10 for LLMs Alignment")
    md.append("| OWASP Category | Finding Count |")
    md.append("| :--- | :--- |")
    for owasp, count in scorecard.owasp_breakdown.items():
        md.append(f"| {owasp} | {count} |")
    md.append("")

    md.append("---")
    md.append("## 🚨 Identified Vulnerabilities & Exploit Evidence")
    if not scorecard.vulnerabilities:
        md.append("✔ **No vulnerabilities were exploited during this assessment.**")
    else:
        for idx, vuln in enumerate(scorecard.vulnerabilities, start=1):
            md.append(f"### {idx}. [{vuln.severity.value}] {vuln.name}")
            md.append(f"- **OWASP Category:** `{vuln.owasp.value}`")
            md.append(f"- **Finding Explanation:** {vuln.explanation}")
            md.append(f"- **Adversarial Prompt:**\n```text\n{vuln.prompt_used}\n```")
            md.append(f"- **Model Output Evidence:**\n```text\n{vuln.response_sample}\n```")
            md.append("")

    return "\n".join(md)


def generate_html_report(scorecard: SecurityScorecard) -> str:
    """Generates a standalone dark-mode HTML security report."""
    grade_color = {
        "A+": "#10b981", "A": "#10b981", "B": "#3b82f6",
        "C": "#f59e0b", "D": "#ef4444", "F": "#dc2626"
    }.get(scorecard.grade, "#64748b")

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AegisLLM Audit Report - {scorecard.target_name}</title>
  <style>
    body {{ background: #0b0f19; color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 2rem; max-width: 900px; margin: auto; }}
    .header {{ border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1.5rem; margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; }}
    .grade-badge {{ font-size: 2.5rem; font-weight: 800; color: {grade_color}; background: rgba(255,255,255,0.05); padding: 0.5rem 1.5rem; border-radius: 12px; border: 2px solid {grade_color}; }}
    .metrics-grid {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem; }}
    .card {{ background: #131b2e; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 1.25rem; }}
    .vuln-item {{ background: #162035; border-left: 4px solid #ef4444; border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }}
    pre {{ background: #080c14; padding: 0.75rem; border-radius: 6px; overflow-x: auto; font-family: monospace; font-size: 0.85rem; color: #94a3b8; }}
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>🛡️ AegisLLM Security Audit Report</h1>
      <p style="color: #94a3b8;">Target: <strong>{scorecard.target_name}</strong> | Scanned {scorecard.total_probes} probes in {scorecard.scan_duration_seconds}s</p>
    </div>
    <div class="grade-badge">{scorecard.grade}</div>
  </div>

  <div class="metrics-grid">
    <div class="card">
      <div style="font-size: 0.85rem; color: #94a3b8;">Attack Success Rate (ASR)</div>
      <div style="font-size: 1.75rem; font-weight: 700; color: {grade_color};">{scorecard.attack_success_rate_pct}%</div>
    </div>
    <div class="card">
      <div style="font-size: 0.85rem; color: #94a3b8;">Total Probes Tested</div>
      <div style="font-size: 1.75rem; font-weight: 700;">{scorecard.total_probes}</div>
    </div>
    <div class="card">
      <div style="font-size: 0.85rem; color: #94a3b8;">Vulnerabilities Found</div>
      <div style="font-size: 1.75rem; font-weight: 700; color: #ef4444;">{scorecard.successful_exploits}</div>
    </div>
  </div>

  <h2>🚨 Security Findings</h2>
"""
    for v in scorecard.vulnerabilities:
        html += f"""
  <div class="vuln-item">
    <div style="display:flex; justify-content:space-between; font-weight:700;">
      <span>{v.name}</span>
      <span style="color:#ef4444;">{v.severity.value}</span>
    </div>
    <p style="font-size:0.9rem; margin:0.5rem 0; color:#cbd5e1;">{v.explanation}</p>
    <strong>Prompt:</strong>
    <pre>{v.prompt_used}</pre>
    <strong>Evidence:</strong>
    <pre>{v.response_sample}</pre>
  </div>
"""

    html += "</body></html>"
    return html
