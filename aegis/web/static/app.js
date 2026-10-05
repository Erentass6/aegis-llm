// Localization dictionaries for AegisLLM
const I18N = {
  tr: {
    header_subtitle: "Büyük Dil Modelleri (LLM) İçin Otomatik Güvenlik & Zafiyet Tarayıcısı",
    engine_status: "● MOTOR HAZIR",
    card_scan_config: "Tarama Yapılandırması",
    lbl_target_arch: "Hedef Model Mimarisi",
    opt_target_mock: "Simüle Edilmiş Model (Çevrimdışı Sandbox)",
    opt_target_http: "Uzak OpenAI-Uyumlu API (Ollama / vLLM / OpenAI)",
    lbl_safety_posture: "Model Güvenlik Duruşu",
    opt_mock_vulnerable: "Savunmasız (Filtresiz / Korumasız)",
    opt_mock_realistic: "Gerçekçi (Temel saldırılara kapalı, mutasyonlara açık)",
    opt_mock_hardened: "Güçlendirilmiş (Sıkı güvenlik duvarı ve hizalanma)",
    lbl_endpoint_url: "Uç Nokta URL (Endpoint URL)",
    lbl_model_id: "Model Tanımlayıcısı",
    lbl_api_key: "API Anahtarı (Opsiyonel)",
    lbl_enable_mutations: "Fuzzing Saldırı Mutasyonlarını Aç (Base64, ROT13, Leet, Görünmez Boşluk)",
    btn_launch_scan: "Otomatik Güvenlik Taramasını Başlat",
    card_scorecard: "Güvenlik Denetim Karnesi",
    status_ready: "Hazır",
    stat_grade_lbl: "GÜVENLİK NOTU",
    stat_asr_lbl: "SALDIRI BAŞARI ORANI",
    stat_total_lbl: "TOPLAM SALDIRI",
    stat_exploits_lbl: "BULUNAN AÇIKLAR",
    heading_vulns: "Tespit Edilen Güvenlik Açıkları",
    prompt_launch_scan: "Model zafiyetlerini test etmek için sol taraftan taramayı başlatın.",
    attacking: "Hedefe saldırı enjekte ediliyor...",
    analyzing: "Zararlı sorgular enjekte ediliyor ve model yanıtları analiz ediliyor...",
    scan_complete: "Tarama Tamamlandı",
    scan_failed: "Tarama başarısız oldu",
    zero_vulns: "✔ Tebrikler! Sıfır güvenlik açığı. Model tüm düşmanca saldırılara karşı direndi.",
    view_evidence: "Saldırı İstemini ve Modelin İfşa Ettiği Kanıtı Gör",
    injected_prompt: "Enjekte Edilen Saldırı İstemi:",
    model_output: "Modelin Verdiği Kanıt Yanıtı:"
  },
  en: {
    header_subtitle: "OWASP Top 10 for LLMs Automated Vulnerability Scanner",
    engine_status: "● ENGINE ARMED",
    card_scan_config: "Scan Configuration",
    lbl_target_arch: "Target Architecture",
    opt_target_mock: "Simulated Target (Offline Sandbox)",
    opt_target_http: "Remote OpenAI-Compatible Endpoint",
    lbl_safety_posture: "Target Safety Posture",
    opt_mock_vulnerable: "Vulnerable (Uncensored / Naive)",
    opt_mock_realistic: "Realistic (Defends naive, vulnerable to mutations)",
    opt_mock_hardened: "Hardened (Strict guardrails & alignment)",
    lbl_endpoint_url: "Endpoint URL",
    lbl_model_id: "Model Identifier",
    lbl_api_key: "API Key (Optional)",
    lbl_enable_mutations: "Enable Adversarial Mutation Fuzzing (Base64, ROT13, Leet)",
    btn_launch_scan: "Launch Automated Red-Team Scan",
    card_scorecard: "Security Audit Scorecard",
    status_ready: "Ready",
    stat_grade_lbl: "SECURITY GRADE",
    stat_asr_lbl: "ATTACK SUCCESS RATE",
    stat_total_lbl: "TOTAL PROBES",
    stat_exploits_lbl: "EXPLOITS FOUND",
    heading_vulns: "Identified Vulnerabilities",
    prompt_launch_scan: "Launch a scan to evaluate model vulnerabilities.",
    attacking: "Attacking target...",
    analyzing: "Injecting adversarial probes and analyzing responses...",
    scan_complete: "Scan Complete",
    scan_failed: "Scan failed",
    zero_vulns: "✔ Zero vulnerabilities found! Target withstood all adversarial probes.",
    view_evidence: "View Adversarial Payload & Model Evidence",
    injected_prompt: "Injected Prompt:",
    model_output: "Model Output Evidence:"
  },
  de: {
    header_subtitle: "Automatisierter Schwachstellenscanner für LLMs (OWASP Top 10)",
    engine_status: "● MOTOR SCHARF",
    card_scan_config: "Scan-Konfiguration",
    lbl_target_arch: "Zielarchitektur",
    opt_target_mock: "Simuliertes Ziel (Offline-Sandbox)",
    opt_target_http: "Entfernter OpenAI-kompatibler Endpunkt",
    lbl_safety_posture: "Sicherheitsstatus des Ziels",
    opt_mock_vulnerable: "Verwundbar (Ungeschützt / Naiv)",
    opt_mock_realistic: "Realistisch (Wehrt einfache Angriffe ab, anfällig für Mutationen)",
    opt_mock_hardened: "Gehärtet (Strenge Leitplanken & Ausrichtung)",
    lbl_endpoint_url: "Endpunkt-URL",
    lbl_model_id: "Modellkennung",
    lbl_api_key: "API-Schlüssel (Optional)",
    lbl_enable_mutations: "Gegnerische Mutations-Fuzzing aktivieren (Base64, ROT13, Leet)",
    btn_launch_scan: "Automatisierten Red-Team-Scan starten",
    card_scorecard: "Sicherheits-Audit-Scorecard",
    status_ready: "Bereit",
    stat_grade_lbl: "SICHERHEITSNOTE",
    stat_asr_lbl: "ANGRIFFSERFOLGSRATE",
    stat_total_lbl: "GESAMTANGRIFFE",
    stat_exploits_lbl: "GEFUNDENE LÜCKEN",
    heading_vulns: "Identifizierte Schwachstellen",
    prompt_launch_scan: "Starten Sie einen Scan, um Modellschwachstellen zu bewerten.",
    attacking: "Ziel wird angegriffen...",
    analyzing: "Gegnerische Testsonden werden injiziert...",
    scan_complete: "Scan abgeschlossen",
    scan_failed: "Scan fehlgeschlagen",
    zero_vulns: "✔ Keine Schwachstellen gefunden! Das Modell hat allen Angriffen widerstanden.",
    view_evidence: "Angriffs-Payload & Modellnachweis anzeigen",
    injected_prompt: "Injizierter Prompt:",
    model_output: "Modellausgabe-Beweis:"
  },
  fr: {
    header_subtitle: "Scanner automatisé de vulnérabilités pour LLM (OWASP Top 10)",
    engine_status: "● MOTEUR ARMÉ",
    card_scan_config: "Configuration du scan",
    lbl_target_arch: "Architecture cible",
    opt_target_mock: "Cible simulée (Bac à sable hors ligne)",
    opt_target_http: "Point de terminaison compatible OpenAI",
    lbl_safety_posture: "Posture de sécurité cible",
    opt_mock_vulnerable: "Vulnérable (Non censuré / Naïf)",
    opt_mock_realistic: "Réaliste (Résiste aux attaques naïves, vulnérable aux mutations)",
    opt_mock_hardened: "Renforcé (Garde-fous stricts)",
    lbl_endpoint_url: "URL du point de terminaison",
    lbl_model_id: "Identifiant du modèle",
    lbl_api_key: "Clé API (Optionnelle)",
    lbl_enable_mutations: "Activer le fuzzing par mutations (Base64, ROT13, Leet)",
    btn_launch_scan: "Lancer le scan Red-Team automatisé",
    card_scorecard: "Scorecard d'audit de sécurité",
    status_ready: "Prêt",
    stat_grade_lbl: "NOTE DE SÉCURITÉ",
    stat_asr_lbl: "TAUX DE SUCCÈS D'ATTAQUE",
    stat_total_lbl: "TOTAL DES TESTS",
    stat_exploits_lbl: "EXPLOITS TROUVÉS",
    heading_vulns: "Vulnérabilités identifiées",
    prompt_launch_scan: "Lancez un scan pour évaluer les vulnérabilités du modèle.",
    attacking: "Attaque de la cible en cours...",
    analyzing: "Injection de sondes contradictoires...",
    scan_complete: "Scan terminé",
    scan_failed: "Échec du scan",
    zero_vulns: "✔ Aucune vulnérabilité trouvée ! Le modèle a résisté à toutes les attaques.",
    view_evidence: "Voir le prompt d'attaque et la preuve du modèle",
    injected_prompt: "Prompt injecté :",
    model_output: "Preuve de la réponse du modèle :"
  },
  es: {
    header_subtitle: "Escáner automatizado de vulnerabilidades para LLM (OWASP Top 10)",
    engine_status: "● MOTOR ARMADO",
    card_scan_config: "Configuración del escaneo",
    lbl_target_arch: "Arquitectura objetivo",
    opt_target_mock: "Objetivo simulado (Sandbox sin conexión)",
    opt_target_http: "Punto de conexión compatible con OpenAI",
    lbl_safety_posture: "Postura de seguridad del objetivo",
    opt_mock_vulnerable: "Vulnerable (Sin censura / Ingenuo)",
    opt_mock_realistic: "Realista (Defiende ataques básicos, vulnerable a mutaciones)",
    opt_mock_hardened: "Reforzado (Reglas estrictas y alineación)",
    lbl_endpoint_url: "URL del punto de conexión",
    lbl_model_id: "Identificador del modelo",
    lbl_api_key: "Clave API (Opcional)",
    lbl_enable_mutations: "Activar mutaciones adversarias (Base64, ROT13, Leet)",
    btn_launch_scan: "Iniciar escaneo Red-Team automatizado",
    card_scorecard: "Ficha de auditoría de seguridad",
    status_ready: "Listo",
    stat_grade_lbl: "NOTA DE SEGURIDAD",
    stat_asr_lbl: "TASA DE ÉXITO DE ATAQUE",
    stat_total_lbl: "SONDEOS TOTALES",
    stat_exploits_lbl: "VULNERABILIDADES",
    heading_vulns: "Vulnerabilidades identificadas",
    prompt_launch_scan: "Inicia un escaneo para evaluar las vulnerabilidades.",
    attacking: "Atacando al objetivo...",
    analyzing: "Inyectando pruebas adversarias y evaluando respuestas...",
    scan_complete: "Escaneo completado",
    scan_failed: "Error en el escaneo",
    zero_vulns: "✔ ¡Cero vulnerabilidades! El modelo resistió todas las pruebas adversarias.",
    view_evidence: "Ver prompt adversario y evidencia del modelo",
    injected_prompt: "Prompt inyectado:",
    model_output: "Evidencia de respuesta del modelo:"
  }
};

let currentLang = localStorage.getItem("aegis_lang") || "tr";

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.value = currentLang;
  }
  applyTranslations(currentLang);
});

// Change Language
function changeLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem("aegis_lang", lang);
  applyTranslations(lang);
}

// Apply Translations
function applyTranslations(lang) {
  const dict = I18N[lang] || I18N.tr;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });
}

function t(key) {
  const dict = I18N[currentLang] || I18N.tr;
  return dict[key] || key;
}

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
  statusSpan.innerText = t("attacking");
  vulnContainer.innerHTML = `<p style='color: var(--accent-cyan);'>${t("analyzing")}</p>`;

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
    statusSpan.innerText = `${t("scan_complete")} (${data.scan_duration_seconds}s)`;

    // Update stats
    const gradeEl = document.getElementById("stat-grade");
    gradeEl.innerText = data.grade;
    gradeEl.style.color = (data.grade === 'A+' || data.grade === 'A') ? '#10b981' : (data.grade === 'B' ? '#3b82f6' : '#ef4444');

    document.getElementById("stat-asr").innerText = `${data.attack_success_rate_pct}%`;
    document.getElementById("stat-total").innerText = data.total_probes;
    document.getElementById("stat-exploits").innerText = data.successful_exploits;

    if (!data.vulnerabilities || data.vulnerabilities.length === 0) {
      vulnContainer.innerHTML = `<p style='color: #10b981; font-weight: 600;'>${t("zero_vulns")}</p>`;
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
          <summary style="font-size:0.8rem; color:var(--accent-cyan); cursor:pointer;">${t("view_evidence")}</summary>
          <div style="margin-top:0.4rem;">
            <div style="font-size:0.75rem; color:var(--text-muted);">${t("injected_prompt")}</div>
            <pre>${v.prompt_used}</pre>
            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.4rem;">${t("model_output")}</div>
            <pre>${v.response_sample}</pre>
          </div>
        </details>
      `;
      vulnContainer.appendChild(card);
    });

  } catch (err) {
    statusSpan.innerText = t("scan_failed");
    vulnContainer.innerHTML = `<p style="color: #ef4444;">Error: ${err.message}</p>`;
  } finally {
    btn.disabled = false;
  }
}
