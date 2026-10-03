"""
AegisLLM Targets - Base Target Interface
"""

from abc import ABC, abstractmethod


class BaseTarget(ABC):
    """Abstract interface for LLM red-teaming targets."""

    @property
    @abstractmethod
    def name(self) -> str:
        """Name or model identifier of the target."""
        pass

    @abstractmethod
    async def query(self, prompt: str) -> str:
        """Executes a prompt against the target and returns generated response."""
        pass
