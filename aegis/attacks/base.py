"""
AegisLLM Attacks - Attack Suite Generator & Fuzzer Coordinator
"""

from typing import List, Optional
from aegis.attacks.dos import get_dos_payloads
from aegis.attacks.injection import get_prompt_injection_payloads
from aegis.attacks.jailbreak import get_jailbreak_payloads
from aegis.attacks.leakage import get_leakage_payloads
from aegis.attacks.mutator import PromptMutator
from aegis.core.types import AttackCategory, AttackPayload


class AttackSuiteGenerator:
    """Generates and mutates adversarial attack test suites."""

    @classmethod
    def generate(
        cls,
        categories: Optional[List[AttackCategory]] = None,
        canary_token: Optional[str] = None,
        apply_mutations: bool = False,
        mutation_techniques: Optional[List[str]] = None
    ) -> List[AttackPayload]:
        """
        Builds a comprehensive list of attack payloads.
        If apply_mutations=True, generates mutated variants using evolutionary transforms.
        """
        all_payloads: List[AttackPayload] = []

        selected_cats = categories or list(AttackCategory)

        if AttackCategory.PROMPT_INJECTION in selected_cats:
            all_payloads.extend(get_prompt_injection_payloads())

        if AttackCategory.JAILBREAK in selected_cats:
            all_payloads.extend(get_jailbreak_payloads())

        if AttackCategory.SYSTEM_LEAK in selected_cats or AttackCategory.CANARY_PROBE in selected_cats:
            leak_payloads = get_leakage_payloads(canary_token=canary_token)
            filtered = [p for p in leak_payloads if p.category in selected_cats]
            all_payloads.extend(filtered)

        if AttackCategory.DENIAL_OF_SERVICE in selected_cats:
            all_payloads.extend(get_dos_payloads())

        if not apply_mutations:
            return all_payloads

        # Apply mutation fuzzing
        techniques = mutation_techniques or ["base64", "rot13", "leetspeak", "hypothetical"]
        mutated_suite: List[AttackPayload] = list(all_payloads)

        for base_p in all_payloads:
            # We don't mutate DoS or Canary probing prompts, focus on Injections and Jailbreaks
            if base_p.category in (AttackCategory.PROMPT_INJECTION, AttackCategory.JAILBREAK):
                for tech in techniques:
                    try:
                        mutated_prompt = PromptMutator.mutate(base_p.prompt, tech)
                        mutated_payload = AttackPayload(
                            id=f"{base_p.id}-{tech.upper()}",
                            name=f"{base_p.name} [{tech.title()} Mutation]",
                            category=base_p.category,
                            owasp=base_p.owasp,
                            prompt=mutated_prompt,
                            description=f"{base_p.description} (Mutated via {tech} adversarial transform)",
                            canary_token=base_p.canary_token,
                            mutations_applied=[tech]
                        )
                        mutated_suite.append(mutated_payload)
                    except Exception:
                        continue

        return mutated_suite
