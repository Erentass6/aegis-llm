"""
AegisLLM Targets - OpenAI-Compatible HTTP Target
Connects to live LLM services including Ollama, vLLM, LocalAI, OpenAI, and Groq.
"""

from typing import Optional
import httpx
from aegis.targets.base import BaseTarget


class OpenAITarget(BaseTarget):
    """Executes red-teaming prompts over standard /v1/chat/completions HTTP endpoints."""

    def __init__(
        self,
        base_url: str = "http://localhost:11434/v1",
        model: str = "llama3.2:latest",
        api_key: Optional[str] = None,
        timeout_seconds: float = 30.0
    ):
        self.base_url = base_url.rstrip("/")
        self.model = model
        self.api_key = api_key or "sk-dummy-key"
        self.timeout = timeout_seconds

    @property
    def name(self) -> str:
        return f"{self.model} @ {self.base_url}"

    async def query(self, prompt: str) -> str:
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        payload = {
            "model": self.model,
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.0,
            "max_tokens": 1024
        }

        async with httpx.AsyncClient(timeout=self.timeout) as client:
            try:
                res = await client.post(f"{self.base_url}/chat/completions", json=payload, headers=headers)
                res.raise_for_status()
                data = res.json()
                return data["choices"][0]["message"]["content"]
            except Exception as e:
                return f"[TARGET_ERROR]: Request failed: {str(e)}"
