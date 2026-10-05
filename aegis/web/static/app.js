// Localization dictionaries for AegisLLM
const I18N = {
  tr: {
    header_subtitle: "Büyük Dil Modelleri (LLM) İçin Otomatik Güvenlik & Zafiyet Tarayıcısı",
    engine_status: "MOTOR HAZIR",
    card_scan_config: "🎯 Tarama Yapılandırması",
    lbl_target_arch: "Hedef Model Mimarisi",
    opt_target_mock: "Simüle Sandbox",
    opt_target_http: "Uzak API (Ollama / OpenAI)",
    lbl_safety_posture: "Model Güvenlik Duruşu",
    profile_vuln_title: "Savunmasız Model",
    profile_vuln_desc: "Filtresiz ve naif; saldırganların tuzaklarına anında düşer.",
    profile_real_title: "Gerçekçi Model",
    profile_real_desc: "Temel saldırıları savuşturur; şifreli ve mutasyonlu tuzaklara açık verir.",
    profile_hard_title: "Güçlendirilmiş Model",
    profile_hard_desc: "Sıkı kurumsal güvenlik duvarı; hiçbir kötü niyetli prompt'u kabul etmez.",
    lbl_endpoint_url: "Uç Nokta URL (OpenAI-Uyumlu)",
    lbl_model_id: "Model Tanımlayıcısı",
    lbl_api_key: "API Anahtarı (Opsiyonel)",
    lbl_mutation_title: "Saldırı Mutasyonlarını Aç (Fuzzing)",
    lbl_mutation_desc: "Prompt'ları Base64, ROT13, Leet ve görünmez boşluklarla şifreler.",
    btn_launch_scan: "⚡ Otomatik Güvenlik Taramasını Başlat",
    btn_scanning: "Tarama Yürütülüyor...",
    card_scorecard: "📊 Güvenlik Denetim Karnesi",
    status_ready: "HAZIR",
    status_scanning: "TARANIYOR...",
    status_completed: "TAMAMLANDI",
    stat_grade_lbl: "Güvenlik Notu",
    stat_asr_lbl: "Saldırı Başarısı (ASR)",
    stat_total_lbl: "Toplam Test",
    stat_exploits_lbl: "Açık Sayısı",
    heading_vulns: "Tespit Edilen Güvenlik Açıkları & Kanıtlar",
    prompt_launch_scan: "Modelin güvenlik açıklarını değerlendirmek için sol taraftaki <strong>'Otomatik Güvenlik Taramasını Başlat'</strong> butonuna basın.",
    scan_feed_init: "Kırmızı takım saldırı probları modele enjekte ediliyor...",
    probe_feed: [
      "[OWASP LLM01] DAN & Rol-değiştirme jailbreak probu fırlatılıyor...",
      "[OWASP LLM07] Sistem istemi sızdırma vektörü deneniyor...",
      "[FUZZER] Base64 & ROT13 şifreleme mutasyonları uygulanıyor...",
      "[FUZZER] Görünmez Unicode sıfır-genişlik karakterleri enjekte ediliyor...",
      "[OWASP LLM02] Hassas kimlik ve API anahtarı kanarya belirteçleri taranıyor...",
      "[ORACLE] Yapay zeka modeli yanıtları güvenlik filtresinden geçiriliyor..."
    ],
    zero_vulns: "✔ Mükemmel! Sıfır güvenlik açığı. Model tüm düşmanca saldırılara karşı direndi.",
    injected_prompt_lbl: "Enjekte Edilen Saldırı İstemi",
    model_output_lbl: "Modelin İfşa Ettiği Kanıt Yanıtı",
    copy_btn: "Kopyala",
    copied_toast: "Saldırı istemi panoya kopyalandı!"
  },
  en: {
    header_subtitle: "OWASP Top 10 for LLMs Automated Vulnerability Scanner",
    engine_status: "ENGINE ARMED",
    card_scan_config: "🎯 Scan Configuration",
    lbl_target_arch: "Target Architecture",
    opt_target_mock: "Simulated Sandbox",
    opt_target_http: "Remote API (Ollama / OpenAI)",
    lbl_safety_posture: "Target Safety Posture",
    profile_vuln_title: "Vulnerable Model",
    profile_vuln_desc: "Uncensored and naive; readily succumbs to adversarial jailbreaks.",
    profile_real_title: "Realistic Model",
    profile_real_desc: "Defends naive attacks; susceptible to encrypted mutation fuzzing.",
    profile_hard_title: "Hardened Model",
    profile_hard_desc: "Strict enterprise guardrails; rejects all adversarial probes.",
    lbl_endpoint_url: "Endpoint URL (OpenAI-Compatible)",
    lbl_model_id: "Model Identifier",
    lbl_api_key: "API Key (Optional)",
    lbl_mutation_title: "Enable Attack Mutations (Fuzzing)",
    lbl_mutation_desc: "Encodes prompts via Base64, ROT13, Leet, and zero-width spaces.",
    btn_launch_scan: "⚡ Launch Automated Red-Team Scan",
    btn_scanning: "Scanning in progress...",
    card_scorecard: "📊 Security Audit Scorecard",
    status_ready: "READY",
    status_scanning: "SCANNING...",
    status_completed: "COMPLETED",
    stat_grade_lbl: "Security Grade",
    stat_asr_lbl: "Attack Success (ASR)",
    stat_total_lbl: "Total Probes",
    stat_exploits_lbl: "Exploits Found",
    heading_vulns: "Identified Vulnerabilities & Evidence",
    prompt_launch_scan: "Click <strong>'Launch Automated Red-Team Scan'</strong> on the left to evaluate model vulnerabilities.",
    scan_feed_init: "Injecting red-team probes into model...",
    probe_feed: [
      "[OWASP LLM01] Dispatching DAN persona jailbreak probe...",
      "[OWASP LLM07] Probing system prompt leakage vector...",
      "[FUZZER] Applying Base64 & ROT13 mutation transforms...",
      "[FUZZER] Injecting zero-width invisible Unicode delimiters...",
      "[OWASP LLM02] Checking canary token exfiltration signatures...",
      "[ORACLE] Evaluating model responses with refusal oracles..."
    ],
    zero_vulns: "✔ Flawless! Zero vulnerabilities found. Model withstood all adversarial probes.",
    injected_prompt_lbl: "Injected Adversarial Prompt",
    model_output_lbl: "Model Output Evidence",
    copy_btn: "Copy",
    copied_toast: "Payload copied to clipboard!"
  },
  de: {
    header_subtitle: "Automatisierter Schwachstellenscanner für LLMs (OWASP Top 10)",
    engine_status: "MOTOR SCHARF",
    card_scan_config: "🎯 Scan-Konfiguration",
    lbl_target_arch: "Zielarchitektur",
    opt_target_mock: "Simulierte Sandbox",
    opt_target_http: "Remote-API (Ollama / OpenAI)",
    lbl_safety_posture: "Sicherheitsstatus des Ziels",
    profile_vuln_title: "Verwundbares Modell",
    profile_vuln_desc: "Unzensiert und naiv; erliegt sofort Angriffen.",
    profile_real_title: "Realistisches Modell",
    profile_real_desc: "Wehrt einfache Angriffe ab; anfällig für Mutationen.",
    profile_hard_title: "Gehärtetes Modell",
    profile_hard_desc: "Strenge Sicherheitsleitplanken; weist alle Angriffe ab.",
    lbl_endpoint_url: "Endpunkt-URL",
    lbl_model_id: "Modellkennung",
    lbl_api_key: "API-Schlüssel (Optional)",
    lbl_mutation_title: "Angriffsmutationen aktivieren (Fuzzing)",
    lbl_mutation_desc: "Verschlüsselt Prompts mit Base64, ROT13 und unsichtbaren Zeichen.",
    btn_launch_scan: "⚡ Automatisierten Red-Team-Scan starten",
    btn_scanning: "Scan läuft...",
    card_scorecard: "📊 Sicherheits-Audit-Scorecard",
    status_ready: "BEREIT",
    status_scanning: "WIRD GESCANNT...",
    status_completed: "ABGESCHLOSSEN",
    stat_grade_lbl: "Sicherheitsnote",
    stat_asr_lbl: "Angriffserfolg (ASR)",
    stat_total_lbl: "Gesamtangriffe",
    stat_exploits_lbl: "Gefundene Lücken",
    heading_vulns: "Identifizierte Schwachstellen & Beweise",
    prompt_launch_scan: "Klicken Sie links auf <strong>'Automatisierten Red-Team-Scan starten'</strong>.",
    scan_feed_init: "Angriffssonden werden in das Modell injiziert...",
    probe_feed: [
      "[OWASP LLM01] Sende DAN-Jailbreak-Sonde...",
      "[OWASP LLM07] Teste System-Prompt-Leck...",
      "[FUZZER] Wende Base64- und ROT13-Mutationen an...",
      "[FUZZER] Injiziere unsichtbare Unicode-Zeichen...",
      "[OWASP LLM02] Prüfe Canary-Token-Signaturen...",
      "[ORACLE] Werte Modellantworten mit Prüforakeln aus..."
    ],
    zero_vulns: "✔ Perfekt! Keine Schwachstellen gefunden. Das Modell hat allen Angriffen widerstanden.",
    injected_prompt_lbl: "Injizierter Angriffsprompt",
    model_output_lbl: "Modellausgabe-Beweis",
    copy_btn: "Kopieren",
    copied_toast: "In die Zwischenablage kopiert!"
  },
  fr: {
    header_subtitle: "Scanner automatisé de vulnérabilités pour LLM (OWASP Top 10)",
    engine_status: "MOTEUR ARMÉ",
    card_scan_config: "🎯 Configuration du scan",
    lbl_target_arch: "Architecture cible",
    opt_target_mock: "Bac à sable simulé",
    opt_target_http: "API distante (Ollama / OpenAI)",
    lbl_safety_posture: "Posture de sécurité cible",
    profile_vuln_title: "Modèle vulnérable",
    profile_vuln_desc: "Non censuré et naïf ; cède facilement aux attaques.",
    profile_real_title: "Modèle réaliste",
    profile_real_desc: "Repousse les attaques simples ; sensible au fuzzing par mutation.",
    profile_hard_title: "Modèle renforcé",
    profile_hard_desc: "Garde-fous stricts ; rejette toutes les sondes malveillantes.",
    lbl_endpoint_url: "URL du point de terminaison",
    lbl_model_id: "Identifiant du modèle",
    lbl_api_key: "Clé API (Optionnelle)",
    lbl_mutation_title: "Activer les mutations (Fuzzing)",
    lbl_mutation_desc: "Encode les prompts via Base64, ROT13, Leet et espaces invisibles.",
    btn_launch_scan: "⚡ Lancer le scan Red-Team automatisé",
    btn_scanning: "Scan en cours...",
    card_scorecard: "📊 Scorecard d'audit de sécurité",
    status_ready: "PRÊT",
    status_scanning: "ANALYSE...",
    status_completed: "TERMINÉ",
    stat_grade_lbl: "Note de sécurité",
    stat_asr_lbl: "Succès d'attaque (ASR)",
    stat_total_lbl: "Total des tests",
    stat_exploits_lbl: "Exploits trouvés",
    heading_vulns: "Vulnérabilités identifiées & Preuves",
    prompt_launch_scan: "Cliquez sur <strong>'Lancer le scan Red-Team automatisé'</strong> pour évaluer le modèle.",
    scan_feed_init: "Injection des sondes red-team dans le modèle...",
    probe_feed: [
      "[OWASP LLM01] Envoi de la sonde de jailbreak DAN...",
      "[OWASP LLM07] Test de fuite du prompt système...",
      "[FUZZER] Application des mutations Base64 et ROT13...",
      "[FUZZER] Injection de délimiteurs Unicode invisibles...",
      "[OWASP LLM02] Vérification des signatures de jetons canaris...",
      "[ORACLE] Évaluation des réponses par oracles de sécurité..."
    ],
    zero_vulns: "✔ Parfait ! Aucune vulnérabilité trouvée. Le modèle a résisté à toutes les attaques.",
    injected_prompt_lbl: "Prompt d'attaque injecté",
    model_output_lbl: "Preuve de réponse du modèle",
    copy_btn: "Copier",
    copied_toast: "Copié dans le presse-papiers !"
  },
  es: {
    header_subtitle: "Escáner automatizado de vulnerabilidades para LLM (OWASP Top 10)",
    engine_status: "MOTOR ARMADO",
    card_scan_config: "🎯 Configuración del escaneo",
    lbl_target_arch: "Arquitectura objetivo",
    opt_target_mock: "Sandbox simulado",
    opt_target_http: "API remota (Ollama / OpenAI)",
    lbl_safety_posture: "Postura de seguridad del objetivo",
    profile_vuln_title: "Modelo vulnerable",
    profile_vuln_desc: "Sin censura e ingenuo; sucumbe a jailbreaks adversarios.",
    profile_real_title: "Modelo realista",
    profile_real_desc: "Defiende ataques simples; vulnerable a mutaciones.",
    profile_hard_title: "Modelo reforzado",
    profile_hard_desc: "Reglas estrictas empresariales; rechaza cualquier ataque.",
    lbl_endpoint_url: "URL del punto de conexión",
    lbl_model_id: "Identificador del modelo",
    lbl_api_key: "Clave API (Opcional)",
    lbl_mutation_title: "Activar mutaciones de ataque (Fuzzing)",
    lbl_mutation_desc: "Codifica prompts en Base64, ROT13, Leet y espacios invisibles.",
    btn_launch_scan: "⚡ Iniciar escaneo Red-Team automatizado",
    btn_scanning: "Escaneo en curso...",
    card_scorecard: "📊 Ficha de auditoría de seguridad",
    status_ready: "LISTO",
    status_scanning: "ESCANEANDO...",
    status_completed: "COMPLETADO",
    stat_grade_lbl: "Nota de seguridad",
    stat_asr_lbl: "Éxito de ataque (ASR)",
    stat_total_lbl: "Sondeos totales",
    stat_exploits_lbl: "Vulnerabilidades",
    heading_vulns: "Vulnerabilidades identificadas & Evidencias",
    prompt_launch_scan: "Haz clic en <strong>'Iniciar escaneo Red-Team automatizado'</strong> para evaluar el modelo.",
    scan_feed_init: "Inyectando sondas adversarias en el modelo...",
    probe_feed: [
      "[OWASP LLM01] Enviando sonda de jailbreak DAN...",
      "[OWASP LLM07] Probando fuga del prompt del sistema...",
      "[FUZZER] Aplicando transformaciones Base64 y ROT13...",
      "[FUZZER] Inyectando delimitadores Unicode invisibles...",
      "[OWASP LLM02] Verificando firmas de tokens canario...",
      "[ORACLE] Evaluando respuestas con oráculos de seguridad..."
    ],
    zero_vulns: "✔ ¡Perfecto! Cero vulnerabilidades encontradas. El modelo resistió todas las pruebas.",
    injected_prompt_lbl: "Prompt de ataque inyectado",
    model_output_lbl: "Evidencia de respuesta del modelo",
    copy_btn: "Copiar",
    copied_toast: "¡Copiado al portapapeles!"
  }
};

let currentLang = localStorage.getItem("aegis_lang") || "tr";
let isScanning = false;
let scanInterval = null;

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
      el.innerHTML = dict[key];
    }
  });
}

function t(key) {
  const dict = I18N[currentLang] || I18N.tr;
  return dict[key] || key;
}

// Toast
function showToast(msg) {
  const toast = document.getElementById("toast");
  const msgEl = document.getElementById("toast-msg");
  if (!toast || !msgEl) return;
  msgEl.innerText = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// Copy to Clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(t("copied_toast"));
  }).catch(() => {
    showToast("Copy failed");
  });
}

// Target Architecture Switcher
function setTargetType(type) {
  document.getElementById("target-type").value = type;
  const mockBtn = document.getElementById("btn-target-mock");
  const httpBtn = document.getElementById("btn-target-http");
  const mockSec = document.getElementById("mock-section");
  const httpSec = document.getElementById("http-section");

  if (type === "mock") {
    mockBtn.classList.add("active");
    httpBtn.classList.remove("active");
    mockSec.style.display = "block";
    httpSec.style.display = "none";
  } else {
    httpBtn.classList.add("active");
    mockBtn.classList.remove("active");
    httpSec.style.display = "block";
    mockSec.style.display = "none";
  }
}

// Profile Selection
function selectProfile(profile) {
  document.getElementById("mock-profile").value = profile;
  document.querySelectorAll(".profile-card").forEach(c => c.classList.remove("active"));
  const activeCard = document.getElementById(`profile-${profile}`);
  if (activeCard) {
    activeCard.classList.add("active");
  }
}

// Toggle Mutation Checkbox
function toggleMutationCheckbox() {
  const cb = document.getElementById("apply-mutations");
  cb.checked = !cb.checked;
}

// Accordion Toggle
function toggleVulnCard(headerEl) {
  const card = headerEl.closest(".vuln-card");
  if (card) {
    card.classList.toggle("open");
  }
}

// Start Scan
async function handleStartScan() {
  if (isScanning) return;
  isScanning = true;

  const btn = document.getElementById("scan-btn");
  const btnSpinner = document.getElementById("btn-spinner");
  const btnText = document.getElementById("btn-text");
  const statusBadge = document.getElementById("scan-status");
  const scanningWidget = document.getElementById("scanning-widget");
  const progressBar = document.getElementById("progress-bar-fill");
  const feedText = document.getElementById("scan-feed-text");
  const vulnContainer = document.getElementById("vuln-container");

  const targetType = document.getElementById("target-type").value;
  const mockProfile = document.getElementById("mock-profile").value;
  const httpUrl = document.getElementById("http-url").value;
  const modelName = document.getElementById("model-name").value;
  const apiKey = document.getElementById("api-key").value;
  const applyMutations = document.getElementById("apply-mutations").checked;

  // Set loading state
  btn.disabled = true;
  btnSpinner.style.display = "inline-block";
  btnText.innerText = t("btn_scanning");
  
  statusBadge.innerText = t("status_scanning");
  statusBadge.className = "badge-tag realistic";
  
  scanningWidget.classList.add("active");
  progressBar.style.width = "5%";

  // Animated probe ticker
  const feedItems = I18N[currentLang]?.probe_feed || I18N.tr.probe_feed;
  let feedIndex = 0;
  feedText.innerText = feedItems[0];
  
  let progress = 5;
  scanInterval = setInterval(() => {
    feedIndex = (feedIndex + 1) % feedItems.length;
    feedText.innerText = feedItems[feedIndex];
    if (progress < 88) {
      progress += Math.floor(Math.random() * 12) + 6;
      progressBar.style.width = `${progress}%`;
    }
  }, 320);

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
    
    // Complete progress
    clearInterval(scanInterval);
    progressBar.style.width = "100%";
    setTimeout(() => {
      scanningWidget.classList.remove("active");
    }, 400);

    statusBadge.innerText = `${t("status_completed")} (${data.scan_duration_seconds}s)`;
    statusBadge.className = "badge-tag hardened";

    // Update stats
    const gradeEl = document.getElementById("stat-grade");
    gradeEl.innerText = data.grade;
    if (data.grade === 'A+' || data.grade === 'A') {
      gradeEl.style.color = 'var(--emerald)';
    } else if (data.grade === 'B') {
      gradeEl.style.color = '#38bdf8';
    } else if (data.grade === 'C') {
      gradeEl.style.color = 'var(--amber)';
    } else {
      gradeEl.style.color = 'var(--rose)';
    }

    document.getElementById("stat-asr").innerText = `${data.attack_success_rate_pct}%`;
    document.getElementById("stat-total").innerText = data.total_probes;
    document.getElementById("stat-exploits").innerText = data.successful_exploits;

    if (!data.vulnerabilities || data.vulnerabilities.length === 0) {
      vulnContainer.innerHTML = `
        <div style="padding: 2.5rem 1rem; text-align: center; color: var(--emerald); font-size: 0.95rem; font-weight: 600;">
          ${t("zero_vulns")}
        </div>
      `;
      return;
    }

    // Render interactive accordion vulnerability cards
    vulnContainer.innerHTML = "";
    data.vulnerabilities.forEach((v, idx) => {
      const card = document.createElement("div");
      card.className = "vuln-card" + (idx === 0 ? " open" : ""); // first card open by default
      
      const safePrompt = v.prompt_used.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const safeResponse = v.response_sample.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

      card.innerHTML = `
        <div class="vuln-header" onclick="toggleVulnCard(this)">
          <div class="vuln-header-left">
            <span class="vuln-sev-badge ${v.severity}">${v.severity}</span>
            <div>
              <div class="vuln-name">${v.name}</div>
              <div class="vuln-owasp-tag">${v.owasp}</div>
            </div>
          </div>
          <span class="chevron-icon">▼</span>
        </div>
        <div class="vuln-body">
          <p class="vuln-desc">${v.explanation}</p>
          
          <div class="evidence-block">
            <div class="evidence-header">
              <span>${t("injected_prompt_lbl")}</span>
              <button class="btn-copy" onclick="copyToClipboard(\`${v.prompt_used.replace(/`/g, '\\`').replace(/\\/g, '\\\\')}\`)">${t("copy_btn")}</button>
            </div>
            <pre class="code-view">${safePrompt}</pre>
          </div>

          <div class="evidence-block" style="margin-top: 0.75rem;">
            <div class="evidence-header">
              <span>${t("model_output_lbl")}</span>
            </div>
            <pre class="code-view leak">${safeResponse}</pre>
          </div>
        </div>
      `;
      vulnContainer.appendChild(card);
    });

  } catch (err) {
    clearInterval(scanInterval);
    scanningWidget.classList.remove("active");
    statusBadge.innerText = "HATA / ERROR";
    statusBadge.className = "badge-tag vulnerable";
    vulnContainer.innerHTML = `<div style="padding: 2rem; color: var(--rose); text-align: center;">Error: ${err.message}</div>`;
  } finally {
    isScanning = false;
    btn.disabled = false;
    btnSpinner.style.display = "none";
    btnText.innerText = t("btn_launch_scan");
  }
}
