// Fonction pour ajouter un log horodaté
function addLog(message) {
    const container = document.getElementById('log-container');
    if (!container) return;
    const timestamp = new Date().toLocaleTimeString(); 
    container.innerHTML += `<div>[${timestamp}] ${message}</div>`;
    container.scrollTop = container.scrollHeight;
}

// Simulation du bouton "Tout accepter"
function acceptAll() {
    addLog("Action : Consentement total accordé.");

    // Capture de la configuration technique
    const screenRes = `${window.screen.width}x${window.screen.height}`;
    const browser = navigator.userAgent.split(') ')[1] || "Navigateur inconnu";
    const language = navigator.language;

    // Stockage dans les cookies
    document.cookie = `device_info=${screenRes}|${language}; max-age=3600; path=/`;
    addLog(`Invisible : Collecte de la résolution (${screenRes}) et de la langue (${language}).`);

    // Simulation d'un ID de session basé sur le temps
    const sessionId = "sess_" + Math.random().toString(36).substr(2, 9);
    document.cookie = `session_id=${sessionId}; max-age=3600; path=/`;
    addLog(`Invisible : Identifiant de session généré : ${sessionId}`);

    // Analyse des intérêts
    const pageTitle = document.title;
    document.cookie = `last_interest=${pageTitle}; max-age=3600; path=/`;
    addLog(`Invisible : Profilage basé sur le contenu : l'utilisateur s'intéresse à "${pageTitle}".`);

    updateCookieDisplay();
    document.getElementById('cookie-banner').style.display = 'none';
}

// Simulation du refus
function rejectAll() {
    addLog("Action : Clic sur 'Refuser'");
    
    // On ne crée pas de cookies de suivi, mais on enregistre le choix localement
    document.cookie = "consent_type=denied; max-age=3600; path=/";
    addLog("Invisible : Cookie technique de refus créé (Nécessaire pour ne plus afficher la bannière)");
    
    updateCookieDisplay();
    document.getElementById('cookie-banner').style.display = 'none';
}

function updateCookieDisplay() {
    const display = document.getElementById('current-cookies');
    if (display) display.innerText = document.cookie || "Aucun";
}

window.onload = () => {
    addLog("Page 'Marmithon' chargée : Prête pour l'observation.");
    updateCookieDisplay();
};