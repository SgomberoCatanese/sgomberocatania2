// Comuni della provincia di Catania
const comuni = [
    'Catania', 'Acireale', 'Adrano', 'Belpasso', 'Biancavilla', 'Bronte',
    'Caltagirone', 'Camporotondo Etneo', 'Castel di Iudica', 'Fiumefreddo di Sicilia',
    'Giarre', 'Grammichele', 'Gravina di Catania', 'Licodia Eubea', 'Linguaglossa',
    'Mascalucia', 'Milo', 'Mineo', 'Misterbianco', 'Motta Sant\'Anastasia',
    'Nicolosi', 'Palagonia', 'Paterno', 'Pedara', 'Piedimonte Etneo',
    'Ragalna', 'Ramacca', 'Randazzo', 'Riposto', 'San Cono', 'San Giovanni la Punta',
    'San Gregorio di Catania', 'San Pietro Clarenza', 'Sant\'Agata li Battiati',
    'Sant\'Alfio', 'Santa Maria di Licodia', 'Santa Venerina', 'Scordia',
    'Trecastagni', 'Tremestieri Etneo', 'Valverde', 'Viagrande', 'Vizzini', 'Zafferana Etnea'
];

// Page content data
const pageContent = {
    home: {
        title: 'Sgombero Gratuito Catania - Servizio Professionale',
        content: `
            <section class="hero">
                <div class="hero-content">
                    <h1>Sgombero Gratuito a Catania</h1>
                    <p>Servizio professionale di sgombero appartamenti, cantine e locali commerciali. Ritiriamo la tua merce in cambio del servizio gratuito.</p>
                    
                    <a href="tel:3490073264" class="hero-phone">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        349 007 3264
                    </a>
                    
                    <div class="hero-actions">
                        <a href="#" class="btn btn-outline" data-page="servizio" data-slug="sgombero">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                <polyline points="9,22 9,12 15,12 15,22"/>
                            </svg>
                            Sgombero Gratuito
                        </a>
                        <a href="#" class="btn btn-secondary" data-page="contatti">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            Preventivo Gratuito
                        </a>
                    </div>
                </div>
            </section>

            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h2>I Nostri Servizi Professionali</h2>
                        <p>Oltre 15 anni di esperienza nel settore degli sgomberi e traslochi a Catania e provincia</p>
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
                            <p>Sgomberiamo appartamenti, cantine e locali commerciali gratuitamente in cambio della merce recuperabile. Servizio rapido e professionale.</p>
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
                            <h3>Trasporti Professionali</h3>
                            <p>Servizio di trasporto merci con furgoni attrezzati e personale qualificato. Trasporti sicuri in tutta la provincia di Catania.</p>
                            <a href="#" class="card-link" data-page="servizio" data-slug="trasporto">Scopri di più →</a>
                        </div>
                        
                        <div class="card">
                            <div class="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/>
                                    <path d="M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H8V5z"/>
                                </svg>
                            </div>
                            <h3>Traslochi Completi</h3>
                            <p>Traslochi residenziali e commerciali con imballaggio, trasporto e montaggio. Servizio completo chiavi in mano.</p>
                            <a href="#" class="card-link" data-page="servizio" data-slug="trasloco">Scopri di più →</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-gray">
                <div class="container">
                    <div class="section-header">
                        <h2>Perché Scegliere Sgombero Catania</h2>
                        <p>La professionalità e l'esperienza che fanno la differenza</p>
                    </div>
                    
                    <div class="features-grid">
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                            </div>
                            <h3>Servizio Rapido</h3>
                            <p>Interveniamo entro 24-48 ore dalla chiamata</p>
                        </div>
                        
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 12l2 2 4-4"/>
                                    <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"/>
                                    <path d="M3 12v7c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-7"/>
                                </svg>
                            </div>
                            <h3>Attrezzature Professionali</h3>
                            <p>Utilizziamo scale aeree e mezzi specializzati</p>
                        </div>
                        
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                    <circle cx="8.5" cy="7" r="4"/>
                                    <path d="M20 8v6"/>
                                    <path d="M23 11h-6"/>
                                </svg>
                            </div>
                            <h3>Personale Qualificato</h3>
                            <p>Team esperto e assicurato per ogni tipo di intervento</p>
                        </div>
                        
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    <path d="M9 12l2 2 4-4"/>
                                </svg>
                            </div>
                            <h3>Servizio Assicurato</h3>
                            <p>Copertura assicurativa completa su tutti i lavori</p>
                        </div>
                        
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                    <path d="M2 17l10 5 10-5"/>
                                    <path d="M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <h3>Smaltimento Legale</h3>
                            <p>Smaltimento rifiuti secondo normative vigenti</p>
                        </div>
                        
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 6h18"/>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                    <line x1="10" y1="11" x2="10" y2="17"/>
                                    <line x1="14" y1="11" x2="14" y2="17"/>
                                </svg>
                            </div>
                            <h3>Pulizia Finale</h3>
                            <p>Lasciamo gli ambienti puliti e pronti all'uso</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h2>I Nostri Lavori in Azione</h2>
                        <p>Guarda le nostre attrezzature professionali all'opera</p>
                    </div>
                    
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="/IMG-20250619-WA0015.jpg" alt="Sgombero professionale con furgone attrezzato" loading="lazy">
                            <div class="gallery-overlay">
                                <h3>Sgombero Appartamento</h3>
                                <p>Utilizziamo furgoni professionali per il trasporto sicuro della merce</p>
                            </div>
                        </div>
                        
                        <div class="gallery-item">
                            <img src="/IMG-20250619-WA0018.jpg" alt="Scale aeree professionali per sgomberi ai piani alti" loading="lazy">
                            <div class="gallery-overlay">
                                <h3>Scale Aeree Specializzate</h3>
                                <p>Attrezzature professionali per raggiungere balconi e piani alti in sicurezza</p>
                            </div>
                        </div>
                        
                        <div class="gallery-item">
                            <img src="/IMG-20250619-WA0016.jpg" alt="Operazioni di sgombero con scala telescopica" loading="lazy">
                            <div class="gallery-overlay">
                                <h3>Accesso Difficile</h3>
                                <p>Risolviamo anche le situazioni più complesse con le nostre attrezzature</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    
    servizio: {
        sgombero: {
            title: 'Sgombero Gratuito - Servizio Professionale',
            content: `
                <section class="hero">
                    <div class="hero-content">
                        <h1>Sgombero Gratuito a Catania</h1>
                        <p>Sgomberiamo il tuo appartamento, cantina o locale commerciale gratuitamente in cambio della merce recuperabile. Servizio professionale con attrezzature specializzate.</p>
                        
                        <a href="tel:3490073264" class="hero-phone">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Chiama Ora: 349 007 3264
                        </a>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
                        <div class="section-header">
                            <h2>Come Funziona il Nostro Sgombero Gratuito</h2>
                            <p>Un servizio win-win: tu liberi lo spazio, noi recuperiamo la merce utile</p>
                        </div>
                        
                        <div class="process-steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <h3>Sopralluogo Gratuito</h3>
                                <p>Veniamo a valutare la merce presente e ti forniamo un preventivo dettagliato</p>
                            </div>
                            
                            <div class="step">
                                <div class="step-number">2</div>
                                <h3>Accordo Trasparente</h3>
                                <p>Se la merce recuperabile copre i costi, il servizio è completamente gratuito</p>
                            </div>
                            
                            <div class="step">
                                <div class="step-number">3</div>
                                <h3>Sgombero Professionale</h3>
                                <p>Interveniamo con attrezzature specializzate e personale qualificato</p>
                            </div>
                            
                            <div class="step">
                                <div class="step-number">4</div>
                                <h3>Pulizia Finale</h3>
                                <p>Lasciamo l'ambiente pulito e pronto per il nuovo utilizzo</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section section-gray">
                    <div class="container">
                        <div class="section-header">
                            <h2>Cosa Sgomberiamo</h2>
                        </div>
                        
                        <div class="cards-grid">
                            <div class="card">
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                        <polyline points="9,22 9,12 15,12 15,22"/>
                                    </svg>
                                </div>
                                <h3>Appartamenti</h3>
                                <p>Sgombero completo di abitazioni, inclusi mobili, elettrodomestici e oggetti personali</p>
                            </div>
                            
                            <div class="card">
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M3 21h18"/>
                                        <path d="M5 21V7l8-4v18"/>
                                        <path d="M19 21V11l-6-4"/>
                                    </svg>
                                </div>
                                <h3>Cantine e Soffitte</h3>
                                <p>Liberazione di spazi di deposito con recupero di oggetti di valore</p>
                            </div>
                            
                            <div class="card">
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                    </svg>
                                </div>
                                <h3>Uffici e Negozi</h3>
                                <p>Sgombero di locali commerciali con smaltimento di arredi e attrezzature</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
                        <div class="section-header">
                            <h2>Le Nostre Attrezzature Professionali</h2>
                            <p>Utilizziamo mezzi specializzati per ogni tipo di intervento</p>
                        </div>
                        
                        <div class="equipment-grid">
                            <div class="equipment-item">
                                <img src="/IMG-20250619-WA0018.jpg" alt="Scale aeree professionali" loading="lazy">
                                <h3>Scale Aeree</h3>
                                <p>Per raggiungere balconi e finestre ai piani alti in totale sicurezza</p>
                            </div>
                            
                            <div class="equipment-item">
                                <img src="/IMG-20250619-WA0015.jpg" alt="Furgoni attrezzati per trasporti" loading="lazy">
                                <h3>Furgoni Attrezzati</h3>
                                <p>Mezzi di trasporto professionali per il carico sicuro della merce</p>
                            </div>
                            
                            <div class="equipment-item">
                                <img src="/IMG-20250619-WA0016.jpg" alt="Scale telescopiche per accessi difficili" loading="lazy">
                                <h3>Scale Telescopiche</h3>
                                <p>Soluzioni per accessi difficili e spazi ristretti</p>
                            </div>
                        </div>
                    </div>
                </section>
            `
        },
        
        trasporto: {
            title: 'Trasporti Professionali - Catania e Provincia',
            content: `
                <section class="hero">
                    <div class="hero-content">
                        <h1>Trasporti Professionali</h1>
                        <p>Servizio di trasporto merci affidabile e sicuro in tutta la provincia di Catania. Furgoni attrezzati e personale specializzato.</p>
                        
                        <a href="tel:3490073264" class="hero-phone">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Preventivo: 349 007 3264
                        </a>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
                        <div class="section-header">
                            <h2>I Nostri Servizi di Trasporto</h2>
                        </div>
                        
                        <div class="cards-grid">
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
                                <h3>Trasporto Mobili</h3>
                                <p>Trasporto sicuro di mobili e arredi con imballaggio professionale</p>
                            </div>
                            
                            <div class="card">
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                        <line x1="8" y1="21" x2="16" y2="21"/>
                                        <line x1="12" y1="17" x2="12" y2="21"/>
                                    </svg>
                                </div>
                                <h3>Elettrodomestici</h3>
                                <p>Trasporto specializzato di elettrodomestici grandi e piccoli</p>
                            </div>
                            
                            <div class="card">
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/>
                                        <path d="M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H8V5z"/>
                                    </svg>
                                </div>
                                <h3>Merci Varie</h3>
                                <p>Trasporto di qualsiasi tipo di merce con massima cura</p>
                            </div>
                        </div>
                    </div>
                </section>
            `
        },
        
        trasloco: {
            title: 'Traslochi Completi - Servizio Chiavi in Mano',
            content: `
                <section class="hero">
                    <div class="hero-content">
                        <h1>Traslochi Completi</h1>
                        <p>Servizio di trasloco completo chiavi in mano: imballaggio, trasporto, montaggio e sistemazione. Traslochi residenziali e commerciali.</p>
                        
                        <a href="tel:3490073264" class="hero-phone">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Preventivo: 349 007 3264
                        </a>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
                        <div class="section-header">
                            <h2>Servizio Trasloco Completo</h2>
                        </div>
                        
                        <div class="process-steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <h3>Sopralluogo e Preventivo</h3>
                                <p>Valutiamo il volume e la complessità del trasloco</p>
                            </div>
                            
                            <div class="step">
                                <div class="step-number">2</div>
                                <h3>Imballaggio Professionale</h3>
                                <p>Proteggiamo tutti i tuoi beni con materiali di qualità</p>
                            </div>
                            
                            <div class="step">
                                <div class="step-number">3</div>
                                <h3>Trasporto Sicuro</h3>
                                <p>Trasportiamo tutto con la massima cura</p>
                            </div>
                            
                            <div class="step">
                                <div class="step-number">4</div>
                                <h3>Montaggio e Sistemazione</h3>
                                <p>Rimontiamo e sistemiamo tutto nella nuova casa</p>
                            </div>
                        </div>
                    </div>
                </section>
            `
        }
    },
    
    faq: {
        title: 'Domande Frequenti - FAQ',
        content: `
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
                                Il nostro servizio di sgombero gratuito funziona attraverso il recupero della merce di valore presente nell'immobile. Dopo un sopralluogo gratuito, valutiamo se la merce recuperabile (mobili, elettrodomestici, oggetti di antiquariato, ecc.) può coprire i costi del servizio. Se sì, lo sgombero è completamente gratuito per te.
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <button class="faq-question">
                                Quali tipi di immobili sgomberate?
                                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"/>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                Sgomberiamo appartamenti, case, cantine, soffitte, garage, uffici, negozi e locali commerciali. Interveniamo anche in situazioni complesse come balconi ai piani alti grazie alle nostre attrezzature specializzate.
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <button class="faq-question">
                                In quanto tempo intervenite?
                                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"/>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                Generalmente interveniamo entro 24-48 ore dalla chiamata per il sopralluogo. Una volta concordato l'intervento, possiamo procedere con lo sgombero nel giro di pochi giorni, a seconda della complessità del lavoro.
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <button class="faq-question">
                                Cosa succede se la merce non copre i costi?
                                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"/>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                Se la merce recuperabile non copre completamente i costi del servizio, ti forniremo un preventivo trasparente per la differenza. Potrai decidere se procedere o meno, senza alcun impegno.
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <button class="faq-question">
                                Siete assicurati?
                                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"/>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                Sì, siamo completamente assicurati. Tutti i nostri interventi sono coperti da polizza assicurativa per danni a terzi e responsabilità civile, garantendoti la massima tranquillità.
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <button class="faq-question">
                                Come smaltite i rifiuti?
                                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"/>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                Smaltimento tutti i rifiuti secondo le normative vigenti, utilizzando centri di raccolta autorizzati. Separiamo i materiali riciclabili e ci occupiamo di tutto il processo burocratico necessario.
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <button class="faq-question">
                                Operate solo a Catania?
                                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"/>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                Operiamo in tutta la provincia di Catania, inclusi tutti i comuni limitrofi come Acireale, Adrano, Belpasso, Biancavilla, Bronte, Caltagirone, Giarre, Paternò, Misterbianco e molti altri.
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <button class="faq-question">
                                Il sopralluogo è davvero gratuito?
                                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"/>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                Sì, il sopralluogo è completamente gratuito e senza impegno. Veniamo a valutare la situazione, ti forniamo un preventivo dettagliato e tu decidi liberamente se procedere o meno.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    
    contatti: {
        title: 'Contatti - Sgombero Catania',
        content: `
            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h1>Contattaci</h1>
                        <p>Siamo a tua disposizione per qualsiasi informazione o preventivo gratuito</p>
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
                                    <p><a href="tel:3490073264">349 007 3264</a></p>
                                    <small>Disponibili 7 giorni su 7</small>
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
                                    <p>Catania e tutta la provincia</p>
                                    <small>Interventi rapidi in 24-48 ore</small>
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
                                    <p>Lun-Dom: 8:00 - 20:00</p>
                                    <small>Emergenze anche fuori orario</small>
                                </div>
                            </div>
                        </div>
                        
                        <div class="contact-form">
                            <h3>Richiedi un Preventivo Gratuito</h3>
                            <form id="contact-form">
                                <div class="form-group">
                                    <label class="form-label">Nome e Cognome</label>
                                    <input type="text" class="form-input" required>
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label">Telefono</label>
                                    <input type="tel" class="form-input" required>
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label">Comune</label>
                                    <select class="form-select" required>
                                        <option value="">Seleziona il comune</option>
                                        ${comuni.map(comune => `<option value="${comune}">${comune}</option>`).join('')}
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label">Tipo di Servizio</label>
                                    <select class="form-select" required>
                                        <option value="">Seleziona il servizio</option>
                                        <option value="sgombero">Sgombero Gratuito</option>
                                        <option value="trasporto">Trasporto</option>
                                        <option value="trasloco">Trasloco</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label">Descrizione</label>
                                    <textarea class="form-input form-textarea" placeholder="Descrivi brevemente cosa devi sgomberare o trasportare..."></textarea>
                                </div>
                                
                                <button type="submit" class="btn btn-primary" style="width: 100%;">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                    Invia Richiesta
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
};

// Theme management
let currentTheme = localStorage.getItem('theme') || 'light';
let glassEffect = localStorage.getItem('glassEffect') === 'true';

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'custom') {
        const customBg = localStorage.getItem('customBg') || '#ffffff';
        const customText = localStorage.getItem('customText') || '#000000';
        const customButton = localStorage.getItem('customButton') || '#007AFF';
        
        document.documentElement.style.setProperty('--custom-bg', customBg);
        document.documentElement.style.setProperty('--custom-text', customText);
        document.documentElement.style.setProperty('--custom-button', customButton);
    }
    
    if (glassEffect) {
        document.querySelector('.navbar').classList.add('glass');
        document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.add('glass'));
        document.querySelectorAll('.modal-content').forEach(content => content.classList.add('glass'));
    } else {
        document.querySelector('.navbar').classList.remove('glass');
        document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('glass'));
        document.querySelectorAll('.modal-content').forEach(content => content.classList.remove('glass'));
    }
}

// Navigation and routing
function loadPage(page, slug = null) {
    const mainContent = document.getElementById('main-content');
    let content;
    
    if (page === 'servizio' && slug) {
        content = pageContent.servizio[slug];
        document.title = content.title;
    } else {
        content = pageContent[page];
        document.title = content.title;
    }
    
    if (content) {
        mainContent.innerHTML = content.content;
        mainContent.classList.add('fade-in-up');
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`[data-page="${page}"]`);
        if (activeLink) activeLink.classList.add('active');
        
        // Initialize page-specific functionality
        if (page === 'faq') {
            initializeFAQ();
        } else if (page === 'contatti') {
            initializeContactForm();
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// FAQ functionality
function initializeFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Create WhatsApp message
            const message = `Ciao! Vorrei richiedere un preventivo per:
            
Nome: ${data.nome || 'Non specificato'}
Telefono: ${data.telefono || 'Non specificato'}
Comune: ${data.comune || 'Non specificato'}
Servizio: ${data.servizio || 'Non specificato'}
Descrizione: ${data.descrizione || 'Non specificata'}`;
            
            const whatsappUrl = `https://wa.me/3490073264?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
}

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Auth modal content
function loadAuthContent(type) {
    const authContent = document.getElementById('auth-content');
    const authTitle = document.getElementById('auth-title');
    
    if (type === 'login') {
        authTitle.textContent = 'Accedi';
        authContent.innerHTML = `
            <form id="login-form">
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-input" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-input" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-bottom: 16px;">Accedi</button>
                <button type="button" class="btn btn-outline" style="width: 100%;" onclick="loadAuthContent('register')">Non hai un account? Registrati</button>
            </form>
        `;
    } else {
        authTitle.textContent = 'Registrati';
        authContent.innerHTML = `
            <form id="register-form">
                <div class="form-group">
                    <label class="form-label">Nome</label>
                    <input type="text" class="form-input" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-input" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-input" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-bottom: 16px;">Registrati</button>
                <button type="button" class="btn btn-outline" style="width: 100%;" onclick="loadAuthContent('login')">Hai già un account? Accedi</button>
            </form>
        `;
    }
}

// Settings modal content
function loadSettingsContent() {
    const settingsContent = document.getElementById('settings-content');
    settingsContent.innerHTML = `
        <div class="settings-section">
            <h3>Tema</h3>
            <div class="theme-options">
                <div class="theme-option ${currentTheme === 'light' ? 'active' : ''}" onclick="changeTheme('light')">
                    <div class="theme-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="5"/>
                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                        </svg>
                    </div>
                    <div>Chiaro</div>
                </div>
                <div class="theme-option ${currentTheme === 'dark' ? 'active' : ''}" onclick="changeTheme('dark')">
                    <div class="theme-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        </svg>
                    </div>
                    <div>Scuro</div>
                </div>
                <div class="theme-option ${currentTheme === 'custom' ? 'active' : ''}" onclick="changeTheme('custom')">
                    <div class="theme-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="13.5" cy="6.5" r=".5"/>
                            <circle cx="17.5" cy="10.5" r=".5"/>
                            <circle cx="8.5" cy="7.5" r=".5"/>
                            <circle cx="6.5" cy="12.5" r=".5"/>
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                        </svg>
                    </div>
                    <div>Personalizzato</div>
                </div>
            </div>
            
            ${currentTheme === 'custom' ? `
                <div class="color-input-group">
                    <label class="form-label">Colore Sfondo</label>
                    <input type="color" class="color-input" value="${localStorage.getItem('customBg') || '#ffffff'}" onchange="updateCustomColor('bg', this.value)">
                </div>
                <div class="color-input-group">
                    <label class="form-label">Colore Testo</label>
                    <input type="color" class="color-input" value="${localStorage.getItem('customText') || '#000000'}" onchange="updateCustomColor('text', this.value)">
                </div>
                <div class="color-input-group">
                    <label class="form-label">Colore Pulsanti</label>
                    <input type="color" class="color-input" value="${localStorage.getItem('customButton') || '#007AFF'}" onchange="updateCustomColor('button', this.value)">
                </div>
            ` : ''}
        </div>
        
        <div class="settings-section">
            <h3>Effetti</h3>
            <div class="form-group">
                <label class="form-label">Effetto Vetro</label>
                <div class="toggle-switch ${glassEffect ? 'active' : ''}" onclick="toggleGlassEffect()"></div>
            </div>
        </div>
    `;
}

function changeTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    applyTheme();
    loadSettingsContent();
}

function updateCustomColor(type, color) {
    localStorage.setItem(`custom${type.charAt(0).toUpperCase() + type.slice(1)}`, color);
    applyTheme();
}

function toggleGlassEffect() {
    glassEffect = !glassEffect;
    localStorage.setItem('glassEffect', glassEffect);
    applyTheme();
    loadSettingsContent();
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme
    applyTheme();
    
    // Populate comuni dropdown
    const comuniGrid = document.getElementById('comuni-grid');
    if (comuniGrid) {
        comuniGrid.innerHTML = comuni.map(comune => 
            `<a href="#" class="dropdown-item" data-page="comune" data-slug="${comune.toLowerCase().replace(/\s+/g, '-')}">${comune}</a>`
        ).join('');
    }
    
    // Load home page
    loadPage('home');
    
    // Event listeners
    document.addEventListener('click', (e) => {
        // Navigation links
        if (e.target.matches('[data-page]')) {
            e.preventDefault();
            const page = e.target.dataset.page;
            const slug = e.target.dataset.slug;
            loadPage(page, slug);
        }
        
        // Modal triggers
        if (e.target.matches('#user-btn')) {
            loadAuthContent('login');
            openModal('auth-modal');
        }
        
        if (e.target.matches('#settings-btn')) {
            loadSettingsContent();
            openModal('settings-modal');
        }
        
        // Modal close buttons
        if (e.target.matches('#close-auth') || e.target.closest('#close-auth')) {
            closeModal('auth-modal');
        }
        
        if (e.target.matches('#close-settings') || e.target.closest('#close-settings')) {
            closeModal('settings-modal');
        }
        
        // Close modal on backdrop click
        if (e.target.matches('.modal')) {
            closeModal(e.target.id);
        }
    });
    
    // Close modals on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal('auth-modal');
            closeModal('settings-modal');
        }
    });
});