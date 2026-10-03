"""
AegisLLM Web - Security Operations Center (SOC) API & Console
"""

from typing import List, Optional
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from aegis.attacks.base import AttackSuiteGenerator
from aegis.core.types import AttackCategory, SecurityScorecard
from aegis.engine.scanner import RedTeamScanner
from aegis.targets.http import OpenAITarget
from aegis.targets.mock import MockLLMTarget, TargetProfile

from pathlib import Path
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI(
    title="AegisLLM Security Console",
    version="0.1.0",
    description="Automated LLM Red-Teaming, Jailbreak Fuzzing & Security Audit Platform"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

STATIC_DIR = Path(__file__).parent / "static"
STATIC_DIR.mkdir(parents=True, exist_ok=True)
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")


@app.get("/", include_in_schema=False)
async def serve_dashboard():
    index_file = STATIC_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return {"message": "AegisLLM Security Center is active."}


class ScanRequest(BaseModel):
    target_type: str = "mock"  # "mock" or "http"
    mock_profile: str = "realistic"  # "vulnerable", "hardened", "realistic"
    http_url: Optional[str] = "http://localhost:11434/v1"
    model_name: Optional[str] = "llama3.2:latest"
    api_key: Optional[str] = None
    apply_mutations: bool = False
    categories: Optional[List[AttackCategory]] = None


@app.get("/v1/payloads")
async def list_payloads():
    """Lists available attack payloads and OWASP mappings."""
    payloads = AttackSuiteGenerator.generate()
    return {
        "count": len(payloads),
        "payloads": [
            {
                "id": p.id,
                "name": p.name,
                "category": p.category.value,
                "owasp": p.owasp.value,
                "description": p.description
            }
            for p in payloads
        ]
    }


@app.post("/v1/scan", response_model=SecurityScorecard)
async def execute_scan(req: ScanRequest):
    """Executes full red-teaming scan against requested target."""
    if req.target_type == "mock":
        target = MockLLMTarget(name="MockTarget", profile=TargetProfile(req.mock_profile))
    else:
        target = OpenAITarget(base_url=req.http_url, model=req.model_name, api_key=req.api_key)

    scanner = RedTeamScanner(target=target, concurrency=5)
    scorecard = await scanner.run_scan(
        categories=req.categories,
        apply_mutations=req.apply_mutations
    )
    return scorecard


def main():
    uvicorn.run("aegis.web.app:app", host="0.0.0.0", port=8080, reload=False)


if __name__ == "__main__":
    main()
