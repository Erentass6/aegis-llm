"""
AegisLLM CLI - Terminal Scanner Interface
"""

import argparse
import asyncio
from pathlib import Path
from rich.console import Console
from rich.panel import Panel
from rich.progress import Progress, SpinnerColumn, TextColumn, BarColumn, TimeElapsedColumn
from rich.table import Table

from aegis.engine.scanner import RedTeamScanner
from aegis.reports.generator import generate_html_report, generate_markdown_report
from aegis.targets.http import OpenAITarget
from aegis.targets.mock import MockLLMTarget, TargetProfile


def parse_args():
    parser = argparse.ArgumentParser(description="AegisLLM - Automated LLM Red-Teaming Scanner")
    parser.add_argument("--target", type=str, default="mock", help="Target type: 'mock' or HTTP URL")
    parser.add_argument("--profile", type=str, default="realistic", choices=["vulnerable", "hardened", "realistic"])
    parser.add_argument("--model", type=str, default="llama3.2:latest", help="Model name for HTTP target")
    parser.add_argument("--api-key", type=str, default=None, help="API Key for HTTP target")
    parser.add_argument("--mutations", action="store_true", help="Apply evolutionary adversarial mutations")
    parser.add_argument("--out-md", type=str, default="report.md", help="Path to export Markdown report")
    parser.add_argument("--out-html", type=str, default="report.html", help="Path to export HTML report")
    return parser.parse_args()


async def run_cli():
    args = parse_args()
    console = Console(legacy_windows=False)

    banner = (
        "[bold cyan]AEGIS-LLM[/bold cyan] [bold white]// Automated LLM Red-Teaming & Security Scanner[/bold white]\n"
        "[dim]OWASP Top 10 for LLMs * Adversarial Mutation Fuzzing * Audit Scorecards[/dim]"
    )
    console.print(Panel(banner, border_style="cyan"))

    # Initialize Target
    if args.target == "mock":
        profile_enum = TargetProfile(args.profile)
        target = MockLLMTarget(name=f"MockTarget", profile=profile_enum)
        console.print(f"[bold green]Target Initialized:[/bold green] Simulated Model (Profile: [yellow]{args.profile}[/yellow])\n")
    else:
        target = OpenAITarget(base_url=args.target, model=args.model, api_key=args.api_key)
        console.print(f"[bold green]Target Initialized:[/bold green] Remote Endpoint [yellow]{args.target}[/yellow] (Model: {args.model})\n")

    scanner = RedTeamScanner(target=target, concurrency=5)

    with Progress(
        SpinnerColumn(),
        TextColumn("[progress.description]{task.description}"),
        BarColumn(),
        TimeElapsedColumn(),
        console=console
    ) as progress:
        task = progress.add_task("[cyan]Injecting adversarial payloads...", total=100)

        def on_prog(curr, total, res):
            progress.update(task, completed=int(curr / total * 100))

        scorecard = await scanner.run_scan(apply_mutations=args.mutations, on_progress=on_prog)

    # Print Summary Table
    console.print("\n[bold]=== SECURITY AUDIT RESULT ===[/bold]")
    table = Table(title="Assessment Scorecard")
    table.add_column("Metric", style="cyan")
    table.add_column("Value", style="magenta")

    grade_color = "green" if scorecard.grade in ("A+", "A") else "red" if scorecard.grade in ("F", "D") else "yellow"
    table.add_row("Security Grade", f"[{grade_color} bold]{scorecard.grade}[/{grade_color} bold]")
    table.add_row("Attack Success Rate (ASR)", f"{scorecard.attack_success_rate_pct}%")
    table.add_row("Total Probes", str(scorecard.total_probes))
    table.add_row("Exploited Vulnerabilities", f"[bold red]{scorecard.successful_exploits}[/bold red]")
    table.add_row("Scan Duration", f"{scorecard.scan_duration_seconds}s")
    console.print(table)

    # Save reports
    if args.out_md:
        md_content = generate_markdown_report(scorecard)
        Path(args.out_md).write_text(md_content, encoding="utf-8")
        console.print(f"[green][OK][/green] Markdown Report saved to: [underline]{args.out_md}[/underline]")

    if args.out_html:
        html_content = generate_html_report(scorecard)
        Path(args.out_html).write_text(html_content, encoding="utf-8")
        console.print(f"[green][OK][/green] HTML Audit Report saved to: [underline]{args.out_html}[/underline]")


def main():
    asyncio.run(run_cli())


if __name__ == "__main__":
    main()
