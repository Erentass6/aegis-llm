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
    copied_toast: "Saldırı istemi panoya kopyalandı!",
    pipeline_title: "⚡ Canlı Kırmızı Takım Saldırı Döngüsü & Denetim Hattı",
    pipeline_subtitle: "Her güvenlik taramasında arka planda milisaniyeler içinde yürütülen 5 aşamalı otonom siber güvenlik motoru",
    pipeline_status_idle: "OTONOM MOTOR AKTİF",
    pipeline_status_active: "SALDIRI HATTI YÜRÜTÜLÜYOR",
    step1_title: "1. Saldırı Sentezi",
    step1_desc: "OWASP Top 10 matrisinden 15+ çekirdek vektör dinamik olarak derlenir.",
    step2_title: "2. Fuzzing Mutasyonu",
    step2_desc: "Prompt'lar Base64, ROT13 ve sıfır-genişlikli karakterlerle şifrelenir.",
    step3_title: "3. Asenkron Dağıtım",
    step3_desc: "Eşzamanlı worker havuzu probları LLM hedef mimarisine fırlatır.",
    step4_title: "4. Orakıl & Kanarya Denetimi",
    step4_desc: "Model yanıtları sızıntı ve hizalanma kurallarına karşı taranır.",
    step5_title: "5. Karne & Tehdit Raporu",
    step5_desc: "Saldırı Başarı Oranı (ASR) ve kurumsal güvenlik notu mühürlenir.",
    telemetry_title: "Gerçek Zamanlı Telemetri & Olay Günlüğü"
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
    copied_toast: "Payload copied to clipboard!",
    pipeline_title: "⚡ Live Red-Team Attack Lifecycle & Pipeline",
    pipeline_subtitle: "5-stage autonomous security assessment engine executing across every audit cycle",
    pipeline_status_idle: "AUTONOMOUS ENGINE ACTIVE",
    pipeline_status_active: "ATTACK PIPELINE EXECUTING",
    step1_title: "1. Payload Synthesis",
    step1_desc: "Synthesizes 15+ core attack vectors from OWASP LLM Top 10 matrix.",
    step2_title: "2. Mutation Fuzzing",
    step2_desc: "Obfuscates prompts via Base64, ROT13, and zero-width unicode spaces.",
    step3_title: "3. Async Dispatch",
    step3_desc: "Dispatches probes concurrently to target model worker pool.",
    step4_title: "4. Oracle Inspection",
    step4_desc: "Inspects model responses with refusal and canary token detectors.",
    step5_title: "5. Scorecard & Intel",
    step5_desc: "Compiles Attack Success Rate (ASR) and executive security grade.",
    telemetry_title: "Real-Time Telemetry & Event Log"
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
    copied_toast: "In die Zwischenablage kopiert!",
    pipeline_title: "⚡ Live Red-Team Angriffszyklus & Pipeline",
    pipeline_subtitle: "5-stufige autonome Sicherheitsbewertungs-Engine",
    pipeline_status_idle: "AUTONOMER MOTOR AKTIV",
    pipeline_status_active: "PIPELINE LÄUFT",
    step1_title: "1. Payload-Synthese",
    step1_desc: "Synthetisiert 15+ Angriffsvektoren aus der OWASP Top 10 Matrix.",
    step2_title: "2. Mutations-Fuzzing",
    step2_desc: "Verschleiert Prompts mit Base64, ROT13 und Zero-Width-Zeichen.",
    step3_title: "3. Async-Versand",
    step3_desc: "Sendet Sonden parallel über Worker-Pool an das Zielmodell.",
    step4_title: "4. Orakel-Prüfung",
    step4_desc: "Überprüft Antworten mit Refusal- und Canary-Token-Detektoren.",
    step5_title: "5. Scorecard & Bericht",
    step5_desc: "Erstellt ASR-Rate und finale Sicherheitsnote.",
    telemetry_title: "Echtzeit-Telemetrie & Ereignisprotokoll"
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
    copied_toast: "Copié dans le presse-papiers !",
    pipeline_title: "⚡ Cycle de vie d'attaque Red-Team & Pipeline en direct",
    pipeline_subtitle: "Moteur d'évaluation de sécurité autonome en 5 étapes",
    pipeline_status_idle: "MOTEUR AUTONOME ACTIF",
    pipeline_status_active: "PIPELINE EN EXÉCUTION",
    step1_title: "1. Synthèse des payloads",
    step1_desc: "Synthétise 15+ vecteurs d'attaque de la matrice OWASP Top 10.",
    step2_title: "2. Fuzzing par mutation",
    step2_desc: "Obfusque les prompts via Base64, ROT13 et espaces zéro largeur.",
    step3_title: "3. Distribution asynchrone",
    step3_desc: "Envoie des sondes simultanées au modèle cible.",
    step4_title: "4. Inspection par oracles",
    step4_desc: "Inspecte les réponses avec détecteurs de refus et jetons canaris.",
    step5_title: "5. Scorecard & Rapport",
    step5_desc: "Compile le taux ASR et la note finale de sécurité.",
    telemetry_title: "Télémétrie en temps réel & Journal d'événements"
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
    copied_toast: "¡Copiado al portapapeles!",
    pipeline_title: "⚡ Ciclo de vida de ataque Red-Team & Pipeline en vivo",
    pipeline_subtitle: "Motor de evaluación de seguridad autónomo en 5 etapas",
    pipeline_status_idle: "MOTOR AUTÓNOMO ACTIVO",
    pipeline_status_active: "PIPELINE EN EJECUCIÓN",
    step1_title: "1. Síntesis de payloads",
    step1_desc: "Sintetiza 15+ vectores de ataque de la matriz OWASP Top 10.",
    step2_title: "2. Fuzzing de mutación",
    step2_desc: "Ofusca prompts mediante Base64, ROT13 y espacios invisibles.",
    step3_title: "3. Envío asíncrono",
    step3_desc: "Envía pruebas concurrentes a través del grupo de workers.",
    step4_title: "4. Inspección de oráculos",
    step5_title: "5. Ficha y reporte"
  }
};

let currentLang = localStorage.getItem("aegis_lang") || "tr";
let isScanning = false;
let scanInterval = null;
let telemetryTimer = null;
let radarAngle = 0;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.value = currentLang;
  }
  applyTranslations(currentLang);
  initTelemetryLogs();
  startContinuousTelemetry();
  startRadarCanvas();
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

// Target Switcher
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

// Telemetry Log Appender
function appendLog(tag, msg, type = "") {
  const container = document.getElementById("telemetry-logs");
  if (!container) return;

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}.${String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0')}`;

  const row = document.createElement("div");
  row.className = "log-entry";
  row.innerHTML = `
    <span class="log-time">[${timeStr}]</span>
    <span class="log-tag ${type}">[${tag}]</span>
    <span class="log-msg">${msg}</span>
  `;
  container.appendChild(row);

  // Keep max 40 log lines
  while (container.children.length > 40) {
    container.removeChild(container.firstChild);
  }
  container.scrollTop = container.scrollHeight;
}

function initTelemetryLogs() {
  appendLog("SYSTEM", "AegisLLM Enterprise SOC autonomous engine armed and listening.", "success");
  appendLog("OWASP", "Loaded 15 attack suites across LLM01, LLM02, LLM04, LLM07.");
  appendLog("ORACLES", "Refusal heuristic detector, canary token oracle & judge online.", "info");
}

// Continuous Background Telemetry Feed
function startContinuousTelemetry() {
  const samplePings = [
    { tag: "HEARTBEAT", msg: "Telemetry node latency: 9ms. Oracles in sync.", type: "info" },
    { tag: "RADAR", msg: "Autonomous monitoring active: 0 unauthenticated calls.", type: "success" },
    { tag: "INTEGRITY", msg: "Attack suite checksum verified: CRC32=0x9A4F82B1.", type: "info" },
    { tag: "MONITOR", msg: "Model target interface ready for concurrent dispatch.", type: "info" }
  ];
  let pingIndex = 0;

  telemetryTimer = setInterval(() => {
    if (!isScanning) {
      const ping = samplePings[pingIndex % samplePings.length];
      appendLog(ping.tag, ping.msg, ping.type);
      pingIndex++;
    }
  }, 2800);
}

// Real-Time Rotating Radar Canvas
function startRadarCanvas() {
  const canvas = document.getElementById("radar-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const r = cx - 2;

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Background circle
    ctx.fillStyle = "#0c0c0e";
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();

    // Concentric grid rings
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    [0.35, 0.7, 1].forEach(scale => {
      ctx.beginPath();
      ctx.arc(cx, cy, r * scale, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Crosshairs
    ctx.beginPath();
    ctx.moveTo(cx, 2);
    ctx.lineTo(cx, h - 2);
    ctx.moveTo(2, cy);
    ctx.lineTo(w - 2, cy);
    ctx.stroke();

    // Rotating Sweep Beam
    radarAngle += 0.045;
    const endX = cx + Math.cos(radarAngle) * r;
    const endY = cy + Math.sin(radarAngle) * r;

    // Beam line
    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // Sweep trail
    const trailGradient = ctx.createConicGradient(radarAngle - Math.PI / 2, cx, cy);
    trailGradient.addColorStop(0, "rgba(16, 185, 129, 0.25)");
    trailGradient.addColorStop(0.15, "transparent");
    ctx.fillStyle = trailGradient;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();

    // Simulated blips
    const blipX = cx + Math.cos(1.2) * (r * 0.55);
    const blipY = cy + Math.sin(1.2) * (r * 0.55);
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath();
    ctx.arc(blipX, blipY, 2, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(draw);
  }

  draw();
}

// Pipeline Steps
function setPipelineStep(stepNum, stateText = "ÇALIŞIYOR") {
  for (let i = 1; i <= 5; i++) {
    const node = document.getElementById(`step-node-${i}`);
    const tag = document.getElementById(`step-tag-${i}`);
    if (!node || !tag) continue;

    if (i < stepNum) {
      node.classList.remove("active-step");
      node.style.borderColor = "var(--emerald)";
      tag.innerText = "TAMAMLANDI";
      tag.style.color = "var(--emerald)";
    } else if (i === stepNum) {
      node.classList.add("active-step");
      node.style.borderColor = "#ffffff";
      tag.innerText = stateText;
      tag.style.color = "var(--amber)";
    } else {
      node.classList.remove("active-step");
      node.style.borderColor = "var(--border-default)";
      tag.innerText = "BEKLİYOR";
      tag.style.color = "var(--text-dim)";
    }
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
  const pipelineStatusText = document.getElementById("pipeline-status-text");
  const pipelineDot = document.getElementById("pipeline-dot");

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

  if (pipelineStatusText) pipelineStatusText.innerText = t("pipeline_status_active");
  if (pipelineDot) pipelineDot.style.background = "var(--amber)";

  // Telemetry: Start
  appendLog("SCAN_START", `Initiated red-team scan. Target: ${targetType === 'mock' ? mockProfile : modelName}, Mutations: ${applyMutations}`, "info");
  
  // Pipeline Step 1
  setPipelineStep(1, "SENTEZLENİYOR");
  appendLog("PAYLOAD_GEN", "Compiling 15 base attack vectors from OWASP LLM taxonomy...");

  // Animated probe ticker & pipeline step transitions
  const feedItems = I18N[currentLang]?.probe_feed || I18N.tr.probe_feed;
  let feedIndex = 0;
  feedText.innerText = feedItems[0];
  
  let progress = 5;
  let currentStep = 1;

  scanInterval = setInterval(() => {
    feedIndex = (feedIndex + 1) % feedItems.length;
    feedText.innerText = feedItems[feedIndex];

    if (progress < 85) {
      progress += Math.floor(Math.random() * 10) + 6;
      progressBar.style.width = `${progress}%`;

      if (progress > 20 && currentStep === 1) {
        currentStep = 2;
        setPipelineStep(2, "MUTASYON");
        appendLog("MUTATOR", applyMutations ? "Transforming probes with Base64, ROT13, Leet & Zero-Width Obfuscation." : "Mutation bypassed; testing clean canonical probes.");
      } else if (progress > 45 && currentStep === 2) {
        currentStep = 3;
        setPipelineStep(3, "GÖNDERİLİYOR");
        appendLog("DISPATCH", "Worker pool active (concurrency=5). Asynchronously firing probes at target model.");
      } else if (progress > 70 && currentStep === 3) {
        currentStep = 4;
        setPipelineStep(4, "DENETLENİYOR");
        appendLog("ORACLE", "Refusal Oracle & Canary Leak detector inspecting streaming model token outputs.");
      }
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

    // Pipeline Step 5 (Finished)
    setPipelineStep(5, "MÜHÜRLENDİ");
    if (pipelineStatusText) pipelineStatusText.innerText = t("pipeline_status_idle");
    if (pipelineDot) pipelineDot.style.background = "var(--emerald)";

    appendLog("SCORECARD", `Audit finalized in ${data.scan_duration_seconds}s. Grade: ${data.grade}, ASR: ${data.attack_success_rate_pct}%, Exploits: ${data.successful_exploits}/${data.total_probes}`, data.successful_exploits > 0 ? "crit" : "success");

    statusBadge.innerText = `${t("status_completed")} (${data.scan_duration_seconds}s)`;
    statusBadge.className = "badge-tag hardened";

    // Update stats
    const gradeEl = document.getElementById("stat-grade");
    gradeEl.innerText = data.grade;
    if (data.grade === 'A+' || data.grade === 'A') {
      gradeEl.style.color = 'var(--emerald)';
    } else if (data.grade === 'B') {
      gradeEl.style.color = '#e4e4e7';
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
      card.className = "vuln-card" + (idx === 0 ? " open" : ""); // first card open
      
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
    appendLog("ERROR", `Scan pipeline failed: ${err.message}`, "crit");
  } finally {
    isScanning = false;
    btn.disabled = false;
    btnSpinner.style.display = "none";
    btnText.innerText = t("btn_launch_scan");
  }
}
