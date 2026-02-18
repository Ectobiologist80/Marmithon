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

    document.cookie = "consent_type=accepted; max-age=3600; path=/";
    addLog("Action : Mise à jour du statut -> consent_type=accepted");

    // Capture de la configuration technique
    const screenRes = `${window.screen.width}x${window.screen.height}`;
    const browser = navigator.userAgent.split(') ')[1] || "Navigateur inconnu";
    const language = navigator.language;

    // Stockage dans les cookies
    document.cookie = `device_info=${screenRes}|${language}; max-age=3600; path=/`;
    addLog(`Invisible : Collecte de la résolution (${screenRes}) et de la langue (${language}).`);

    // Simulation d'un ID de session basé sur le temps
    const sessionId = "sess_" + Math.random().toString(36);
    document.cookie = `session_id=${sessionId}; max-age=3600; path=/`;
    addLog(`Invisible : Identifiant de session généré : ${sessionId}`);


    updateCookieDisplay();
    document.getElementById('overlay').style.display = 'none';
}

//fonction de tracking d'interets
function trackInterest(interestLabel) {
    if (document.cookie.includes("consent_type=accepted")) { //pour vérifier que l'utilisateur a accepté les cookies
        document.cookie = `last_interest=${interestLabel}; max-age=3600; path=/`;
        addLog(`Invisible : L'utilisateur s'intéresse à "${interestLabel}".`);
        updateCookieDisplay();
    }
}

// Simulation du refus
function rejectAll() {
    addLog("Action : Clic sur 'Refuser'");
    
    // On ne crée pas de cookies de suivi, mais on enregistre le choix localement
    document.cookie = "consent_type=denied; max-age=3600; path=/";
    addLog("Invisible : Cookie technique de refus créé (Nécessaire pour ne plus afficher la bannière)");
    
    updateCookieDisplay();
    document.getElementById('overlay').style.display = 'none';
}

//update des logs
function updateCookieDisplay() {
    const display = document.getElementById('current-cookies');
    if (display) display.innerText = document.cookie || "Aucun";
}

window.onload = () => {
    addLog("Page 'Marmithon' chargée : Prête pour l'observation.");
    updateCookieDisplay();
};