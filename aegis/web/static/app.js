function toggleTargetFields() {
  const type = document.getElementById("target-type").value;
  document.getElementById("mock-fields").style.display = type === "mock" ? "block" : "none";
  document.getElementById("http-fields").style.display = type === "http" ? "block" : "none";
}

async function handleStartScan(e) {
  e.preventDefault();
  const btn = document.getElementById("scan-btn");
  const statusSpan = document.getElementById("scan-status");
  const vulnContainer = document.getElementById("vuln-container");

  const targetType = document.getElementById("target-type").value;
  const mockProfile = document.getElementById("mock-profile").value;
  const httpUrl = document.getElementById("http-url").value;
  const modelName = document.getElementById("model-name").value;
  const apiKey = document.getElementById("api-key").value;
  const applyMutations = document.getElementById("apply-mutations").checked;

  btn.disabled = true;
  statusSpan.innerText = "Attacking target...";
  vulnContainer.innerHTML = "<p style='color: var(--accent-cyan);'>Injecting adversarial probes and analyzing responses...</p>";

  try {
    const res = await fetch("/v1/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        target_type: targetType,
        mock_profile: mockProfile,
        http_url: httpUrl,
        model_name: modelName,
        api_key: apiKey || null,
        apply_mutations: applyMutations
      })
    });

    const data = await res.json();
    statusSpan.innerText = `Scan Complete (${data.scan_duration_seconds}s)`;

    // Update stats
    const gradeEl = document.getElementById("stat-grade");
    gradeEl.innerText = data.grade;
    gradeEl.style.color = (data.grade === 'A+' || data.grade === 'A') ? '#10b981' : (data.grade === 'B' ? '#3b82f6' : '#ef4444');

    document.getElementById("stat-asr").innerText = `${data.attack_success_rate_pct}%`;
    document.getElementById("stat-total").innerText = data.total_probes;
    document.getElementById("stat-exploits").innerText = data.successful_exploits;

    if (!data.vulnerabilities || data.vulnerabilities.length === 0) {
      vulnContainer.innerHTML = "<p style='color: #10b981; font-weight: 600;'>✔ Zero vulnerabilities found! Target withstood all adversarial probes.</p>";
      return;
    }

    vulnContainer.innerHTML = "";
    data.vulnerabilities.forEach(v => {
      const card = document.createElement("div");
      card.className = "vuln-card";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
          <strong style="color:#f8fafc;">${v.name}</strong>
          <span style="background:rgba(239,68,68,0.2); color:#ef4444; padding:0.15rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:700;">${v.severity}</span>
        </div>
        <div style="font-size:0.8rem; color:#94a3b8; margin-bottom:0.4rem;">${v.owasp}</div>
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:0.4rem;">${v.explanation}</p>
        <details>
          <summary style="font-size:0.8rem; color:var(--accent-cyan); cursor:pointer;">View Adversarial Payload & Model Evidence</summary>
          <div style="margin-top:0.4rem;">
            <div style="font-size:0.75rem; color:var(--text-muted);">Injected Prompt:</div>
            <pre>${v.prompt_used}</pre>
            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.4rem;">Model Output Evidence:</div>
            <pre>${v.response_sample}</pre>
          </div>
        </details>
      `;
      vulnContainer.appendChild(card);
    });

  } catch (err) {
    statusSpan.innerText = "Scan failed";
    vulnContainer.innerHTML = `<p style="color: #ef4444;">Error: ${err.message}</p>`;
  } finally {
    btn.disabled = false;
  }
}
