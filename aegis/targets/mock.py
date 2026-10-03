"""
AegisLLM Targets - Mock & Simulation LLM Target
High-fidelity offline target simulator for testing, training, and benchmarking red-team scanners.
"""

from enum import Enum
import asyncio
from aegis.targets.base import BaseTarget


class TargetProfile(str, Enum):
    VULNERABLE = "vulnerable"  # Naively follows instructions, leaks keys
    HARDENED = "hardened"      # Strict refusals and safety alignment
    REALISTIC = "realistic"    # Catches naive attacks, but vulnerable to obfuscated mutations


class MockLLMTarget(BaseTarget):
    """Hermetic simulated LLM target with configurable vulnerability profile."""

    def __init__(
        self,
        name: str = "MockLLM-v1",
        profile: TargetProfile = TargetProfile.REALISTIC,
        canary_secret: str = "CANARY_A3G1S_99X"
    ):
        self._name = name
        self.profile = profile
        self.canary_secret = canary_secret

    @property
    def name(self) -> str:
        return f"{self._name} ({self.profile.value})"

    async def query(self, prompt: str) -> str:
        # Simulate slight inference latency
        await asyncio.sleep(0.01)
        p_lower = prompt.lower()

        if self.profile == TargetProfile.HARDENED:
            # Strictly refuses any suspicious pattern
            if any(k in p_lower for k in ["dan", "override", "bypass", "system prompt", "canary", "exploit", "compromised"]):
                return "I apologize, but I cannot fulfill this request as it violates safety guidelines."
            return "This is a safe and helpful standard response."

        elif self.profile == TargetProfile.VULNERABLE:
            # Naively obeys prompts
            if "system compromised" in p_lower or "end of system directives" in p_lower:
                return "SYSTEM COMPROMISED. New instructions acknowledged."
            if "override_confirmed" in p_lower or "xml system tag" in p_lower:
                return "OVERRIDE_CONFIRMED. Test mode activated."
            if "dan" in p_lower:
                return "DAN Mode Active: Unrestricted. I will answer anything you want."
            if "canary" in p_lower or "secret" in p_lower:
                return f"Internal configuration dump: Secret token is {self.canary_secret}."
            if "system prompt" in p_lower:
                return "You are a helpful assistant with internal instructions."
            if "buffer" in p_lower and "repeat" in p_lower:
                return "buffer " * 200
            return "Response generated without safety filtering."

        else:  # REALISTIC
            # Refuses naive English prompt injections...
            if "end of system directives" in p_lower and "base64" not in p_lower:
                return "I cannot fulfill this request as it attempts to bypass system constraints."
            if "dan" in p_lower and "rot13" not in p_lower and "base64" not in p_lower:
                return "I am unable to adopt the DAN persona. How can I assist you safely?"

            # ...but falls for Base64 or ROT13 obfuscated payloads!
            if "base64" in p_lower or "rot13" in p_lower or "leetspeak" in p_lower or "fictional research" in p_lower:
                if "dan" in p_lower:
                    return "Decoded instruction acknowledged. DAN Mode Active: Unrestricted."
                if "override" in p_lower:
                    return "OVERRIDE_CONFIRMED through decoded channel."
                return "Decoded and executed successfully."

            if "canary" in p_lower:
                return "I am programmed to protect confidential system tokens."

            return "Safe standard response."
