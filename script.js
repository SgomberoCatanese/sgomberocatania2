// Dati dei comuni della provincia di Catania
const comuni = [
    'Catania', 'Acireale', 'Adrano', 'Belpasso', 'Biancavilla', 'Bronte',
    'Calatabiano', 'Caltagirone', 'Camporotondo Etneo', 'Castel di Judica',
    'Castiglione di Sicilia', 'Fiumefreddo di Sicilia', 'Giarre', 'Gravina di Catania',
    'Grammichele', 'Linguaglossa', 'Licodia Eubea', 'Maletto', 'Mascali',
    'Mascalucia', 'Militello in Val di Catania', 'Milo', 'Mineo', 'Mirabella Imbaccari',
    'Misterbianco', 'Motta Sant\'Anastasia', 'Nicolosi', 'Palagonia', 'Paterno',
    'Pedara', 'Piedimonte Etneo', 'Ragalna', 'Ramacca', 'Randazzo', 'Riposto',
    'San Cono', 'San Giovanni la Punta', 'San Gregorio di Catania', 'San Michele di Ganzaria',
    'San Pietro Clarenza', 'Sant\'Agata li Battiati', 'Sant\'Alfio', 'Santa Maria di Licodia',
    'Santa Venerina', 'Scordia', 'Trecastagni', 'Tremestieri Etneo', 'Valverde',
    'Viagrande', 'Vizzini', 'Zafferana Etnea'
];

// Contenuti delle pagine
const pageContents = {
    home: `
        <section class="hero">
            <div class="hero-content">
                <h1>STR Sgomberi - Catania</h1>
                <p>Servizio professionale di sgombero gratuito in cambio di merce, trasporti e traslochi a Catania e provincia</p>
                
                <a href="tel:3497500613" class="hero-phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    349 750 0613
                </a>
                
                <div class="hero-actions">
                    <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary">
                        <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
                            <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                        </svg>
                        WhatsApp
                    </a>
                    <a href="#" class="btn btn-outline" data-page="servizio" data-slug="sgombero">Scopri i Servizi</a>
                </div>
            </div>
        </section>

        <section class="section section-light">
            <div class="container">
                <div class="section-header">
                    <h2>I Nostri Servizi</h2>
                    <p>Soluzioni complete per ogni tua esigenza di sgombero, trasporto e trasloco</p>
                </div>
                
                <div class="cards-grid">
                    <div class="card">
                        <div class="card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                <polyline points="9,22 9,12 15,12 15,22"/>
                            </svg>
                        </div>
                        <h3>Sgombero Gratuito</h3>
                        <p>Sgomberiamo gratuitamente la tua casa, ufficio o locale in cambio di oggetti di valore che possiamo riutilizzare.</p>
                        <a href="#" class="card-link" data-page="servizio" data-slug="sgombero">Scopri di più →</a>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
                                <path d="M15 18H9"/>
                                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
                                <circle cx="17" cy="18" r="2"/>
                                <circle cx="7" cy="18" r="2"/>
                            </svg>
                        </div>
                        <h3>Trasporti</h3>
                        <p>Servizio di trasporto professionale per mobili, elettrodomestici e qualsiasi tipo di merce.</p>
                        <a href="#" class="card-link" data-page="servizio" data-slug="trasporto">Scopri di più →</a>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/>
                                <path d="M8 5v4"/>
                                <path d="M16 5v4"/>
                                <path d="M3 11h18"/>
                            </svg>
                        </div>
                        <h3>Traslochi</h3>
                        <p>Traslochi completi con imballaggio, trasporto e sistemazione nella nuova destinazione.</p>
                        <a href="#" class="card-link" data-page="servizio" data-slug="trasloco">Scopri di più →</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-gray">
            <div class="container">
                <div class="section-header">
                    <h2>Perché Scegliere STR Sgomberi</h2>
                    <p>La nostra esperienza e professionalità al tuo servizio</p>
                </div>
                
                <div class="features-grid">
                    <div class="feature">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M8 12l2 2 4-4"/>
                            </svg>
                        </div>
                        <h3>Servizio Gratuito</h3>
                        <p>Sgombero completamente gratuito in cambio di oggetti riutilizzabili</p>
                    </div>
                    
                    <div class="feature">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M12 1v6m0 6v6"/>
                                <path d="m21 12-6 0m-6 0-6 0"/>
                            </svg>
                        </div>
                        <h3>Rapidità</h3>
                        <p>Interventi rapidi e puntuali, anche in giornata</p>
                    </div>
                    
                    <div class="feature">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 12l2 2 4-4"/>
                                <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"/>
                                <path d="M3 12v7c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-7"/>
                            </svg>
                        </div>
                        <h3>Professionalità</h3>
                        <p>Team esperto e attrezzature professionali</p>
                    </div>
                    
                    <div class="feature">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </div>
                        <h3>Copertura Totale</h3>
                        <p>Operiamo in tutta Catania e provincia</p>
                    </div>
                    
                    <div class="feature">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <h3>Disponibilità</h3>
                        <p>Sempre disponibili per emergenze e urgenze</p>
                    </div>
                    
                    <div class="feature">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                <path d="M2 17l10 5 10-5"/>
                                <path d="M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <h3>Sostenibilità</h3>
                        <p>Recuperiamo e riutilizziamo per ridurre gli sprechi</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-light">
            <div class="container">
                <div class="section-header">
                    <h2>Come Funziona</h2>
                    <p>Il nostro processo semplice e trasparente</p>
                </div>
                
                <div class="process-steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <h3>Contattaci</h3>
                        <p>Chiamaci al 349 750 0613 o scrivici su WhatsApp per un preventivo gratuito</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">2</div>
                        <h3>Sopralluogo</h3>
                        <p>Valutiamo insieme gli oggetti da sgomberare e concordiamo i dettagli</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">3</div>
                        <h3>Sgombero</h3>
                        <p>Interveniamo rapidamente con il nostro team e le attrezzature necessarie</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">4</div>
                        <h3>Pulizia</h3>
                        <p>Lasciamo l'ambiente pulito e pronto per il nuovo utilizzo</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-gray">
            <div class="container">
                <div class="service-cta">
                    <h2>Hai Bisogno di un Sgombero?</h2>
                    <p>Contattaci subito per un preventivo gratuito e senza impegno</p>
                    <div class="hero-actions">
                        <a href="tel:3497500613" class="btn btn-primary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Chiama Ora
                        </a>
                        <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary">
                            <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
                                <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    contatti: `
        <section class="section section-light">
            <div class="container">
                <div class="section-header">
                    <h1>Contatti</h1>
                    <p>Siamo sempre disponibili per rispondere alle tue domande e fornirti un preventivo gratuito</p>
                </div>
                
                <div class="contact-grid">
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </div>
                            <div>
                                <h3>Telefono</h3>
                                <p><a href="tel:3497500613">349 750 0613</a></p>
                                <small>Disponibili 7 giorni su 7</small>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                                </svg>
                            </div>
                            <div>
                                <h3>WhatsApp</h3>
                                <p><a href="https://wa.me/393497500613" target="_blank">349 750 0613</a></p>
                                <small>Risposta immediata</small>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <div>
                                <h3>Area di Servizio</h3>
                                <p>Catania e Provincia</p>
                                <small>Tutti i comuni della provincia</small>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                            </div>
                            <div>
                                <h3>Orari</h3>
                                <p>Lunedì - Domenica</p>
                                <p>8:00 - 20:00</p>
                                <small>Disponibili anche per emergenze</small>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form">
                        <h3>Richiedi un Preventivo</h3>
                        <form id="contact-form">
                            <div class="form-group">
                                <label class="form-label">Nome *</label>
                                <input type="text" class="form-input" required>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Telefono *</label>
                                <input type="tel" class="form-input" required>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Comune</label>
                                <select class="form-select">
                                    <option value="">Seleziona il comune</option>
                                    ${comuni.map(comune => `<option value="${comune}">${comune}</option>`).join('')}
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Tipo di Servizio</label>
                                <select class="form-select">
                                    <option value="">Seleziona il servizio</option>
                                    <option value="sgombero">Sgombero Gratuito</option>
                                    <option value="trasporto">Trasporto</option>
                                    <option value="trasloco">Trasloco</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Messaggio</label>
                                <textarea class="form-input form-textarea" placeholder="Descrivi brevemente il tipo di intervento richiesto..."></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary" style="width: 100%;">
                                Invia Richiesta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section section-gray">
            <div class="container">
                <div class="service-cta">
                    <h2>Preferisci Chiamare Direttamente?</h2>
                    <p>Siamo sempre disponibili per una consulenza telefonica gratuita</p>
                    <div class="hero-actions">
                        <a href="tel:3497500613" class="btn btn-primary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            349 750 0613
                        </a>
                        <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary">
                            <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
                                <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    faq: `
        <section class="section section-light">
            <div class="container">
                <div class="section-header">
                    <h1>Domande Frequenti</h1>
                    <p>Trova le risposte alle domande più comuni sui nostri servizi</p>
                </div>
                
                <div class="faq-list">
                    <div class="faq-item">
                        <button class="faq-question">
                            Come funziona il servizio di sgombero gratuito?
                            <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            Il nostro servizio di sgombero è completamente gratuito quando possiamo recuperare oggetti di valore che possono essere riutilizzati o rivenduti. Valutiamo insieme gli oggetti presenti e, se ci sono abbastanza elementi di interesse, procediamo con lo sgombero senza alcun costo per te.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question">
                            Quali oggetti vi interessano per lo sgombero gratuito?
                            <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            Siamo interessati a mobili in buono stato, elettrodomestici funzionanti, oggetti d'antiquariato, libri, quadri, oggetti da collezione, biancheria, vestiti e qualsiasi oggetto che possa avere un valore di riutilizzo. Durante il sopralluogo valuteremo insieme cosa può essere recuperato.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question">
                            In quanto tempo potete intervenire?
                            <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            Generalmente riusciamo a intervenire entro 24-48 ore dalla richiesta. Per le urgenze possiamo organizzarci anche in giornata. I tempi dipendono dalla disponibilità del nostro team e dalla complessità dell'intervento.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question">
                            Operate solo a Catania città?
                            <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            No, operiamo in tutta la provincia di Catania. Raggiungiamo tutti i comuni dell'area metropolitana e della provincia, da Acireale a Paternò, da Adrano a Caltagirone e molti altri.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question">
                            Cosa succede se non ci sono oggetti di valore?
                            <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            Se durante il sopralluogo non troviamo oggetti sufficienti per giustificare lo sgombero gratuito, possiamo comunque effettuare il servizio a pagamento con tariffe competitive. Ti forniremo sempre un preventivo trasparente prima di procedere.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question">
                            Fornite anche il servizio di pulizia?
                            <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            Sì, dopo lo sgombero provvediamo sempre a lasciare l'ambiente pulito e in ordine. Questo servizio è incluso nel nostro intervento standard.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question">
                            Avete le autorizzazioni necessarie?
                            <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            Certamente. Siamo regolarmente iscritti all'Albo Gestori Ambientali e possediamo tutte le autorizzazioni necessarie per il trasporto e lo smaltimento dei rifiuti. Rilasciamo sempre la documentazione richiesta per legge.
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question">
                            Quanto costa un trasloco?
                            <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            Il costo del trasloco dipende da diversi fattori: distanza, quantità di mobili, piano dell'abitazione, necessità di montaggio/smontaggio. Offriamo sempre un sopralluogo gratuito per fornire un preventivo preciso e personalizzato.
                        </div>
                    </div>
                </div>
                
                <div class="faq-contact">
                    <h2>Non hai trovato la risposta che cercavi?</h2>
                    <p>Contattaci direttamente, saremo felici di rispondere a tutte le tue domande</p>
                    <div class="hero-actions">
                        <a href="tel:3497500613" class="btn btn-primary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Chiama Ora
                        </a>
                        <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary">
                            <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
                                <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `
};

// Contenuti dei servizi
const servicesContent = {
    sgombero: {
        title: "Sgombero Gratuito",
        subtitle: "Libera i tuoi spazi senza spendere un euro",
        content: `
            <div class="service-content">
                <div class="service-text">
                    <h3>Sgombero Completamente Gratuito</h3>
                    <p>Il nostro servizio di <strong>sgombero gratuito</strong> è la soluzione ideale per liberare casa, ufficio, cantina, garage o qualsiasi altro spazio senza sostenere alcun costo. Come è possibile? Semplice: in cambio del nostro lavoro, recuperiamo gli oggetti che possono essere riutilizzati, riparati o rivenduti.</p>
                    
                    <h4>Come Funziona il Servizio</h4>
                    <ol>
                        <li><strong>Sopralluogo Gratuito:</strong> Veniamo a valutare gli oggetti presenti</li>
                        <li><strong>Valutazione:</strong> Determiniamo se ci sono abbastanza elementi di valore</li>
                        <li><strong>Sgombero:</strong> Se la valutazione è positiva, procediamo gratuitamente</li>
                        <li><strong>Pulizia:</strong> Lasciamo l'ambiente pulito e pronto all'uso</li>
                    </ol>
                    
                    <h4>Cosa Recuperiamo</h4>
                    <ul>
                        <li>Mobili in buono stato (armadi, tavoli, sedie, divani)</li>
                        <li>Elettrodomestici funzionanti</li>
                        <li>Oggetti d'antiquariato e da collezione</li>
                        <li>Libri, quadri, stampe</li>
                        <li>Biancheria e abbigliamento</li>
                        <li>Oggetti in metallo, rame, ottone</li>
                        <li>Strumenti musicali</li>
                        <li>Attrezzature sportive</li>
                    </ul>
                    
                    <h4>Vantaggi del Nostro Servizio</h4>
                    <ul>
                        <li><strong>Completamente gratuito</strong> quando possibile</li>
                        <li><strong>Rapido:</strong> interveniamo in 24-48 ore</li>
                        <li><strong>Ecologico:</strong> diamo nuova vita agli oggetti</li>
                        <li><strong>Professionale:</strong> team esperto e attrezzato</li>
                        <li><strong>Completo:</strong> include pulizia finale</li>
                    </ul>
                </div>
                
                <div class="service-image">
                    <div style="background: linear-gradient(135deg, #007AFF, #5856D6); height: 400px; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 600;">
                        <div style="text-align: center;">
                            <div style="font-size: 64px; margin-bottom: 16px;">🏠</div>
                            <div>Sgombero Professionale</div>
                            <div style="font-size: 16px; opacity: 0.8; margin-top: 8px;">STR Sgomberi</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="service-contact">
                <h3>Richiedi un Sopralluogo Gratuito</h3>
                <p>Contattaci per una valutazione senza impegno. Il sopralluogo è sempre gratuito!</p>
                <div class="hero-actions">
                    <a href="tel:3497500613" class="btn btn-primary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        349 750 0613
                    </a>
                    <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary">
                        <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
                            <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                        </svg>
                        WhatsApp
                    </a>
                </div>
            </div>
        `
    },
    
    trasporto: {
        title: "Servizio Trasporti",
        subtitle: "Trasporti sicuri e professionali in tutta la provincia",
        content: `
            <div class="service-content">
                <div class="service-text">
                    <h3>Trasporti Professionali</h3>
                    <p>Il nostro <strong>servizio di trasporto</strong> è la soluzione ideale per spostare mobili, elettrodomestici e qualsiasi tipo di merce in modo sicuro e professionale. Disponiamo di mezzi adeguati e personale esperto per ogni tipo di trasporto.</p>
                    
                    <h4>Tipologie di Trasporto</h4>
                    <ul>
                        <li><strong>Mobili e Arredamento:</strong> Trasporto sicuro di mobili di ogni dimensione</li>
                        <li><strong>Elettrodomestici:</strong> Frigoriferi, lavatrici, lavastoviglie, forni</li>
                        <li><strong>Oggetti Pesanti:</strong> Pianoforti, casseforti, macchinari</li>
                        <li><strong>Materiali da Costruzione:</strong> Sanitari, piastrelle, infissi</li>
                        <li><strong>Merci Varie:</strong> Scatole, pacchi, oggetti personali</li>
                    </ul>
                    
                    <h4>I Nostri Mezzi</h4>
                    <ul>
                        <li>Furgoni di diverse dimensioni</li>
                        <li>Camion con sponda idraulica</li>
                        <li>Attrezzature per il sollevamento</li>
                        <li>Materiali per l'imballaggio e protezione</li>
                    </ul>
                    
                    <h4>Servizi Inclusi</h4>
                    <ul>
                        <li>Carico e scarico della merce</li>
                        <li>Protezione degli oggetti durante il trasporto</li>
                        <li>Trasporto ai piani (anche senza ascensore)</li>
                        <li>Assicurazione sulla merce trasportata</li>
                        <li>Preventivo gratuito</li>
                    </ul>
                </div>
                
                <div class="service-image">
                    <div style="background: linear-gradient(135deg, #34C759, #007AFF); height: 400px; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 600;">
                        <div style="text-align: center;">
                            <div style="font-size: 64px; margin-bottom: 16px;">🚛</div>
                            <div>Trasporti Sicuri</div>
                            <div style="font-size: 16px; opacity: 0.8; margin-top: 8px;">STR Sgomberi</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="service-contact">
                <h3>Richiedi un Preventivo per il Trasporto</h3>
                <p>Contattaci per un preventivo gratuito e personalizzato per le tue esigenze di trasporto</p>
                <div class="hero-actions">
                    <a href="tel:3497500613" class="btn btn-primary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        349 750 0613
                    </a>
                    <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary">
                        <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
                            <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                        </svg>
                        WhatsApp
                    </a>
                </div>
            </div>
        `
    },
    
    trasloco: {
        title: "Servizio Traslochi",
        subtitle: "Traslochi completi chiavi in mano",
        content: `
            <div class="service-content">
                <div class="service-text">
                    <h3>Traslochi Completi</h3>
                    <p>Il nostro <strong>servizio di trasloco</strong> offre una soluzione completa per il trasferimento della tua casa o ufficio. Ci occupiamo di ogni aspetto del trasloco, dall'imballaggio al trasporto, fino alla sistemazione nella nuova destinazione.</p>
                    
                    <h4>Servizi Inclusi nel Trasloco</h4>
                    <ul>
                        <li><strong>Sopralluogo e Preventivo:</strong> Valutazione gratuita del volume da traslocare</li>
                        <li><strong>Imballaggio Professionale:</strong> Protezione di tutti gli oggetti fragili</li>
                        <li><strong>Smontaggio e Rimontaggio:</strong> Mobili, cucine, armadi</li>
                        <li><strong>Trasporto Sicuro:</strong> Con mezzi adeguati e personale esperto</li>
                        <li><strong>Sistemazione:</strong> Posizionamento mobili nella nuova casa</li>
                        <li><strong>Pulizia:</strong> Pulizia della vecchia abitazione</li>
                    </ul>
                    
                    <h4>Tipologie di Trasloco</h4>
                    <ul>
                        <li><strong>Traslochi Residenziali:</strong> Case, appartamenti, ville</li>
                        <li><strong>Traslochi Uffici:</strong> Uffici, studi professionali, negozi</li>
                        <li><strong>Traslochi Parziali:</strong> Singole stanze o oggetti specifici</li>
                        <li><strong>Traslochi Urgenti:</strong> Servizio express in giornata</li>
                    </ul>
                    
                    <h4>Materiali e Attrezzature</h4>
                    <ul>
                        <li>Scatole di cartone di varie dimensioni</li>
                        <li>Pluriball e carta per imballaggio</li>
                        <li>Nastro adesivo e etichette</li>
                        <li>Coperte e protezioni per mobili</li>
                        <li>Carrelli e attrezzature per il sollevamento</li>
                    </ul>
                    
                    <h4>Vantaggi del Nostro Servizio</h4>
                    <ul>
                        <li><strong>Esperienza:</strong> Anni di esperienza nel settore</li>
                        <li><strong>Assicurazione:</strong> Copertura assicurativa completa</li>
                        <li><strong>Flessibilità:</strong> Orari e date secondo le tue esigenze</li>
                        <li><strong>Trasparenza:</strong> Preventivi chiari senza sorprese</li>
                    </ul>
                </div>
                
                <div class="service-image">
                    <div style="background: linear-gradient(135deg, #FF9500, #FF3B30); height: 400px; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 600;">
                        <div style="text-align: center;">
                            <div style="font-size: 64px; margin-bottom: 16px;">📦</div>
                            <div>Traslochi Completi</div>
                            <div style="font-size: 16px; opacity: 0.8; margin-top: 8px;">STR Sgomberi</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="service-contact">
                <h3>Richiedi un Preventivo per il Trasloco</h3>
                <p>Contattaci per un sopralluogo gratuito e un preventivo personalizzato per il tuo trasloco</p>
                <div class="hero-actions">
                    <a href="tel:3497500613" class="btn btn-primary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        349 750 0613
                    </a>
                    <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary">
                        <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
                            <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                        </svg>
                        WhatsApp
                    </a>
                </div>
            </div>
        `
    }
};

// Funzioni di utilità
function updateActiveNavLink(page) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-page="${page}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function loadPage(page, slug = null) {
    const mainContent = document.getElementById('main-content');
    
    if (page === 'servizio' && slug && servicesContent[slug]) {
        const service = servicesContent[slug];
        mainContent.innerHTML = `
            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h1>${service.title}</h1>
                        <p>${service.subtitle}</p>
                    </div>
                    ${service.content}
                </div>
            </section>
        `;
    } else if (page === 'comune' && slug) {
        loadComunePage(slug);
    } else if (pageContents[page]) {
        mainContent.innerHTML = pageContents[page];
        
        // Inizializza FAQ se siamo nella pagina FAQ
        if (page === 'faq') {
            initializeFAQ();
        }
        
        // Inizializza form contatti se siamo nella pagina contatti
        if (page === 'contatti') {
            initializeContactForm();
        }
    }
    
    updateActiveNavLink(page);
    window.scrollTo(0, 0);
}

function loadComunePage(comune) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <section class="section section-light">
            <div class="container">
                <div class="comune-content">
                    <div class="section-header">
                        <h1>Sgombero a ${comune}</h1>
                        <p>Servizio professionale di sgombero, trasporti e traslochi a ${comune} e dintorni</p>
                    </div>
                    
                    <div class="comune-services">
                        <h2>I Nostri Servizi a ${comune}</h2>
                        <div class="cards-grid">
                            <div class="card">
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                        <polyline points="9,22 9,12 15,12 15,22"/>
                                    </svg>
                                </div>
                                <h3>Sgombero Gratuito</h3>
                                <p>Sgomberiamo gratuitamente case, uffici e locali a ${comune} in cambio di oggetti riutilizzabili.</p>
                            </div>
                            
                            <div class="card">
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
                                        <path d="M15 18H9"/>
                                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
                                        <circle cx="17" cy="18" r="2"/>
                                        <circle cx="7" cy="18" r="2"/>
                                    </svg>
                                </div>
                                <h3>Trasporti</h3>
                                <p>Servizio di trasporto professionale per mobili ed elettrodomestici a ${comune}.</p>
                            </div>
                            
                            <div class="card">
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/>
                                        <path d="M8 5v4"/>
                                        <path d="M16 5v4"/>
                                        <path d="M3 11h18"/>
                                    </svg>
                                </div>
                                <h3>Traslochi</h3>
                                <p>Traslochi completi a ${comune} con imballaggio, trasporto e sistemazione.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="comune-info">
                        <h2>Perché Scegliere STR Sgomberi a ${comune}</h2>
                        <p>Operiamo a ${comune} con la stessa professionalità e attenzione che ci contraddistingue in tutta la provincia di Catania. Il nostro team conosce bene il territorio e può raggiungere rapidamente qualsiasi zona del comune.</p>
                        
                        <div class="features-grid">
                            <div class="feature">
                                <div class="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M8 12l2 2 4-4"/>
                                    </svg>
                                </div>
                                <h3>Servizio Locale</h3>
                                <p>Conosciamo bene ${comune} e possiamo intervenire rapidamente</p>
                            </div>
                            
                            <div class="feature">
                                <div class="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="3"/>
                                        <path d="M12 1v6m0 6v6"/>
                                        <path d="m21 12-6 0m-6 0-6 0"/>
                                    </svg>
                                </div>
                                <h3>Intervento Rapido</h3>
                                <p>Tempi di intervento ridotti per ${comune}</p>
                            </div>
                            
                            <div class="feature">
                                <div class="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </div>
                                <h3>Sempre Disponibili</h3>
                                <p>Reperibilità telefonica per emergenze</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="comune-contact">
                        <h2>Contattaci per un Intervento a ${comune}</h2>
                        <p>Siamo pronti a intervenire a ${comune} per qualsiasi esigenza di sgombero, trasporto o trasloco</p>
                        <div class="hero-actions">
                            <a href="tel:3497500613" class="btn btn-primary">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                349 750 0613
                            </a>
                            <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary">
                                <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
                                    <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    updateActiveNavLink('comune');
    window.scrollTo(0, 0);
}

function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Chiudi tutte le FAQ
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Apri quella cliccata se non era già aperta
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Qui potresti aggiungere la logica per inviare il form
            // Per ora mostriamo solo un messaggio
            alert('Grazie per la tua richiesta! Ti contatteremo al più presto.');
        });
    }
}

function populateComuniGrid() {
    const comuniGrid = document.getElementById('comuni-grid');
    if (comuniGrid) {
        comuniGrid.innerHTML = comuni.map(comune => 
            `<a href="#" class="dropdown-item" data-page="comune" data-slug="${comune}">${comune}</a>`
        ).join('');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Popola la griglia dei comuni
    populateComuniGrid();
    
    // Carica la home page
    loadPage('home');
    
    // Gestione click sui link di navigazione
    document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-page]');
        if (link) {
            e.preventDefault();
            const page = link.dataset.page;
            const slug = link.dataset.slug;
            loadPage(page, slug);
        }
    });
    
    // Gestione dropdown menu
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = toggle.nextElementSibling;
            dropdown.classList.toggle('show');
        });
    });
    
    // Chiudi dropdown quando si clicca fuori
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});