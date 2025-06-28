// Funzione per generare un intervallo casuale tra 30 e 180 secondi
function randomDelay(minSec = 30, maxSec = 180) {
    return Math.floor(Math.random() * (maxSec - minSec + 1) + minSec) * 1000;
}

// Crea il popup DOM
function createPopup() {
    // Se esiste già un popup attivo, non ne crea un altro
    if (document.querySelector("#crono-popup")) return;

    const popup = document.createElement("div");
    popup.id = "crono-popup";
    popup.innerHTML = `
        <div class="crono-popup-content">
            <h2>🔥 Tutte le migliori offerte Amazon in un solo posto!</h2>
            <p><strong>Cronoshop</strong> è un portale che raccoglie le offerte più vantaggiose di Amazon.<br>
            Non vendiamo nulla direttamente: verrai reindirizzato su Amazon per ogni acquisto.</p>
            <div class="popup-buttons">
                <a href="https://cronoshop.eu" class="visit-btn" target="_blank">Visita</a>
                <button class="close-btn">Chiudi</button>
            </div>
        </div>
    `;
    document.body.appendChild(popup);

    // Evento chiusura
    popup.querySelector(".close-btn").addEventListener("click", () => {
        popup.remove();
    });
}

// Mostra popup casualmente
function schedulePopup() {
    setTimeout(() => {
        createPopup();
        schedulePopup(); // Ri-schedula di nuovo per il prossimo popup
    }, randomDelay());
}

// Avvio
document.addEventListener("DOMContentLoaded", () => {
    createPopup();     // Mostra subito al primo ingresso
    schedulePopup();   // Poi parte il loop random
});