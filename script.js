// Navigation and Page Management
class SgomberoApp {
    constructor() {
        this.currentPage = 'home';
        this.currentSlug = null;
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupModals();
        this.setupSettings();
        this.loadPage('home');
        this.populateComuni();
    }

    setupNavigation() {
        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            const navLink = e.target.closest('[data-page]');
            if (navLink) {
                e.preventDefault();
                const page = navLink.dataset.page;
                const slug = navLink.dataset.slug;
                this.loadPage(page, slug);
                
                // Update active states
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                if (!slug) {
                    navLink.classList.add('active');
                }
            }
        });

        // Handle dropdown toggles
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const dropdown = toggle.closest('.nav-dropdown');
                const menu = dropdown.querySelector('.dropdown-menu');
                
                // Close other dropdowns
                document.querySelectorAll('.dropdown-menu').forEach(otherMenu => {
                    if (otherMenu !== menu) {
                        otherMenu.classList.remove('show');
                    }
                });
                
                menu.classList.toggle('show');
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-dropdown')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });
    }

    populateComuni() {
        const comuni = [
            'Catania', 'Acireale', 'Adrano', 'Belpasso', 'Biancavilla',
            'Bronte', 'Caltagirone', 'Camporotondo Etneo', 'Castel di Judica',
            'Giarre', 'Gravina di Catania', 'Mascalucia', 'Misterbianco',
            'Paternò', 'Pedara', 'Randazzo', 'Riposto', 'San Giovanni la Punta',
            'San Pietro Clarenza', 'Sant\'Agata li Battiati', 'Trecastagni',
            'Tremestieri Etneo', 'Valverde', 'Viagrande', 'Zafferana Etnea'
        ];

        const comuniGrid = document.getElementById('comuni-grid');
        if (comuniGrid) {
            comuniGrid.innerHTML = comuni.map(comune => 
                `<a href="#" class="dropdown-item" data-page="comune" data-slug="${comune.toLowerCase().replace(/[^a-z0-9]/g, '-')}" data-comune="${comune}">
                    ${comune}
                </a>`
            ).join('');
        }
    }

    loadPage(page, slug = null) {
        this.currentPage = page;
        this.currentSlug = slug;
        
        const mainContent = document.getElementById('main-content');
        
        switch(page) {
            case 'home':
                mainContent.innerHTML = this.getHomePage();
                break;
            case 'servizio':
                mainContent.innerHTML = this.getServizioPage(slug);
                break;
            case 'comune':
                const comune = document.querySelector(`[data-slug="${slug}"]`)?.dataset.comune;
                mainContent.innerHTML = this.getComunePage(comune);
                break;
            case 'faq':
                mainContent.innerHTML = this.getFAQPage();
                break;
            case 'contatti':
                mainContent.innerHTML = this.getContattiPage();
                break;
            default:
                mainContent.innerHTML = this.getHomePage();
        }

        // Setup page-specific functionality
        this.setupPageFunctionality();
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    getHomePage() {
        return `
            <!-- Hero Section -->
            <section class="hero">
                <div class="hero-content">
                    <h1>Sgombero Gratuito a Catania</h1>
                    <p>Servizio professionale di sgombero appartamenti, cantine e locali commerciali. <strong>Completamente gratuito</strong> in cambio di oggetti di valore.</p>
                    
                    <a href="tel:3490073264" class="hero-phone">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        349 007 3264
                    </a>
                    
                    <div class="hero-actions">
                        <a href="#" class="btn btn-outline" data-page="contatti">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            Richiedi Preventivo Gratuito
                        </a>
                        <a href="#" class="btn btn-outline" data-page="servizio" data-slug="sgombero">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12,6 12,12 16,14"/>
                            </svg>
                            Scopri Come Funziona
                        </a>
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h2>I Nostri Servizi Professionali</h2>
                        <p>Oltre 15 anni di esperienza nel settore con attrezzature specializzate e personale qualificato</p>
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
                            <p>Svuotiamo appartamenti, cantine e locali commerciali completamente gratis in cambio di oggetti di valore. Servizio rapido e professionale.</p>
                            <a href="#" class="card-link" data-page="servizio" data-slug="sgombero">Scopri di più →</a>
                        </div>
                        
                        <div class="card">
                            <div class="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
                                    <path d="M9 22v-4h6v4"/>
                                    <path d="M8 6h.01"/>
                                    <path d="M16 6h.01"/>
                                    <path d="M12 6h.01"/>
                                    <path d="M12 10h.01"/>
                                    <path d="M12 14h.01"/>
                                    <path d="M16 10h.01"/>
                                    <path d="M16 14h.01"/>
                                    <path d="M8 10h.01"/>
                                    <path d="M8 14h.01"/>
                                </svg>
                            </div>
                            <h3>Trasporti Specializzati</h3>
                            <p>Trasportiamo mobili e oggetti voluminosi con attrezzature professionali. Scale aeree per piani alti e accessi difficili.</p>
                            <a href="#" class="card-link" data-page="servizio" data-slug="trasporto">Scopri di più →</a>
                        </div>
                        
                        <div class="card">
                            <div class="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M14 9V5a3 3 0 0 0-6 0v4"/>
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                            </div>
                            <h3>Traslochi Completi</h3>
                            <p>Servizio completo di trasloco con imballaggio, trasporto e sistemazione. Personale esperto e assicurazione inclusa.</p>
                            <a href="#" class="card-link" data-page="servizio" data-slug="trasloco">Scopri di più →</a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Equipment Section with Images -->
            <section class="section section-gray">
                <div class="container">
                    <div class="section-header">
                        <h2>Attrezzature Professionali</h2>
                        <p>Utilizziamo solo equipaggiamenti specializzati per garantire sicurezza ed efficienza</p>
                    </div>
                    
                    <div class="equipment-grid">
                        <div class="equipment-item">
                            <img src="public/IMG-20250619-WA0016.jpg" alt="Camion professionale per sgomberi">
                            <h3>Camion Attrezzati</h3>
                            <p>Flotta di camion professionali con sponde idrauliche per il carico sicuro di mobili e oggetti voluminosi.</p>
                        </div>
                        
                        <div class="equipment-item">
                            <img src="public/IMG-20250619-WA0018.jpg" alt="Scala aerea per piani alti">
                            <h3>Scale Aeree Specializzate</h3>
                            <p>Attrezzature per raggiungere balconi e finestre ai piani alti, ideali per trasporti difficili e sgomberi complessi.</p>
                        </div>
                        
                        <div class="equipment-item">
                            <img src="public/IMG-20250619-WA0015.jpg" alt="Operazioni di sgombero professionale">
                            <h3>Operazioni Sicure</h3>
                            <p>Personale qualificato e procedure di sicurezza certificate per ogni tipo di intervento, anche in spazi ristretti.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Process Section -->
            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h2>Come Funziona il Nostro Servizio</h2>
                        <p>Un processo semplice e trasparente per il tuo sgombero gratuito</p>
                    </div>
                    
                    <div class="process-steps">
                        <div class="step">
                            <div class="step-number">1</div>
                            <h3>Contatto Iniziale</h3>
                            <p>Chiamaci o compila il form. Ti risponderemo entro 24 ore per fissare un sopralluogo gratuito.</p>
                        </div>
                        
                        <div class="step">
                            <div class="step-number">2</div>
                            <h3>Sopralluogo Gratuito</h3>
                            <p>Valutiamo gli oggetti presenti e concordiamo modalità e tempi dell'intervento.</p>
                        </div>
                        
                        <div class="step">
                            <div class="step-number">3</div>
                            <h3>Sgombero Professionale</h3>
                            <p>Interveniamo con le nostre attrezzature specializzate, lasciando il locale perfettamente pulito.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="section section-gray">
                <div class="container">
                    <div class="section-header">
                        <h2>Perché Scegliere Sgombero Catania</h2>
                        <p>La professionalità che fa la differenza</p>
                    </div>
                    
                    <div class="features-grid">
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M12 6v6l4 2"/>
                                </svg>
                            </div>
                            <h3>Servizio Rapido</h3>
                            <p>Interveniamo entro 24-48 ore dalla richiesta</p>
                        </div>
                        
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 12l2 2 4-4"/>
                                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                                </svg>
                            </div>
                            <h3>Completamente Gratuito</h3>
                            <p>Nessun costo per il cliente, solo valore recuperato</p>
                        </div>
                        
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                            </div>
                            <h3>Assicurati e Legali</h3>
                            <p>Smaltimento rifiuti a norma di legge</p>
                        </div>
                        
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                            </div>
                            <h3>Personale Qualificato</h3>
                            <p>Team esperto con oltre 15 anni di esperienza</p>
                        </div>
                        
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <h3>Tutta la Provincia</h3>
                            <p>Operiamo in tutti i comuni di Catania</p>
                        </div>
                        
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                                    <circle cx="12" cy="13" r="3"/>
                                </svg>
                            </div>
                            <h3>Attrezzature Speciali</h3>
                            <p>Scale aeree e mezzi per ogni situazione</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getServizioPage(slug) {
        const servizi = {
            'sgombero': {
                title: 'Sgombero Gratuito',
                subtitle: 'Il nostro servizio principale: sgombero completamente gratuito',
                image: 'public/IMG-20250619-WA0016.jpg',
                content: `
                    <div class="service-content">
                        <div class="service-image">
                            <img src="public/IMG-20250619-WA0016.jpg" alt="Servizio di sgombero gratuito con camion professionale">
                        </div>
                        <div class="service-text">
                            <h3>Come Funziona il Servizio Gratuito</h3>
                            <p>Il nostro modello di business unico ci permette di offrire sgomberi completamente gratuiti. Recuperiamo il valore dagli oggetti che hanno ancora un mercato, permettendoti di liberare i tuoi spazi senza alcun costo.</p>
                            
                            <h4>Cosa Sgomberiamo Gratuitamente:</h4>
                            <ul>
                                <li><strong>Appartamenti completi</strong> - Mobili, elettrodomestici, oggetti personali</li>
                                <li><strong>Cantine e soffitte</strong> - Anche con accesso difficile</li>
                                <li><strong>Locali commerciali</strong> - Uffici, negozi, magazzini</li>
                                <li><strong>Garage e box auto</strong> - Liberazione completa degli spazi</li>
                            </ul>
                            
                            <h4>Il Nostro Processo:</h4>
                            <ol>
                                <li><strong>Sopralluogo gratuito</strong> - Valutiamo gli oggetti presenti</li>
                                <li><strong>Accordo trasparente</strong> - Concordiamo cosa tenere e cosa lasciare</li>
                                <li><strong>Sgombero professionale</strong> - Con le nostre attrezzature specializzate</li>
                                <li><strong>Pulizia finale</strong> - Lasciamo il locale perfettamente pulito</li>
                            </ol>
                        </div>
                    </div>
                `
            },
            'trasporto': {
                title: 'Trasporti Specializzati',
                subtitle: 'Trasporti professionali con attrezzature per ogni situazione',
                image: 'public/IMG-20250619-WA0018.jpg',
                content: `
                    <div class="service-content">
                        <div class="service-image">
                            <img src="public/IMG-20250619-WA0018.jpg" alt="Scala aerea professionale per trasporti ai piani alti">
                        </div>
                        <div class="service-text">
                            <h3>Trasporti con Attrezzature Specializzate</h3>
                            <p>Disponiamo di scale aeree professionali e attrezzature specializzate per raggiungere qualsiasi piano, anche in situazioni complesse dove le scale condominiali sono troppo strette.</p>
                            
                            <h4>Le Nostre Specializzazioni:</h4>
                            <ul>
                                <li><strong>Scale aeree fino a 20 metri</strong> - Per balconi e finestre ai piani alti</li>
                                <li><strong>Trasporti voluminosi</strong> - Mobili, elettrodomestici, pianoforti</li>
                                <li><strong>Accessi difficili</strong> - Scale strette, cortili interni</li>
                                <li><strong>Carichi pesanti</strong> - Con attrezzature di sollevamento</li>
                            </ul>
                            
                            <h4>Vantaggi del Nostro Servizio:</h4>
                            <ul>
                                <li>Personale specializzato e assicurato</li>
                                <li>Attrezzature certificate e sicure</li>
                                <li>Preventivi gratuiti e trasparenti</li>
                                <li>Interventi rapidi su tutta la provincia</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'trasloco': {
                title: 'Traslochi Completi',
                subtitle: 'Servizio completo di trasloco con personale qualificato',
                image: 'public/IMG-20250619-WA0015.jpg',
                content: `
                    <div class="service-content">
                        <div class="service-image">
                            <img src="public/IMG-20250619-WA0015.jpg" alt="Operazioni di trasloco professionale con personale qualificato">
                        </div>
                        <div class="service-text">
                            <h3>Traslochi Professionali Completi</h3>
                            <p>Organizziamo traslochi completi con un servizio chiavi in mano. Dal sopralluogo iniziale alla sistemazione finale, ci occupiamo di ogni dettaglio per rendere il tuo trasloco semplice e senza stress.</p>
                            
                            <h4>Servizi Inclusi:</h4>
                            <ul>
                                <li><strong>Sopralluogo e preventivo gratuito</strong></li>
                                <li><strong>Imballaggio professionale</strong> - Con materiali di qualità</li>
                                <li><strong>Smontaggio e rimontaggio mobili</strong></li>
                                <li><strong>Trasporto assicurato</strong> - Con mezzi adeguati</li>
                                <li><strong>Sistemazione nella nuova casa</strong></li>
                            </ul>
                            
                            <h4>Tipologie di Trasloco:</h4>
                            <ul>
                                <li><strong>Residenziali</strong> - Appartamenti, ville, case</li>
                                <li><strong>Commerciali</strong> - Uffici, negozi, aziende</li>
                                <li><strong>Parziali</strong> - Solo alcuni mobili o stanze</li>
                                <li><strong>Internazionali</strong> - Con documentazione doganale</li>
                            </ul>
                            
                            <div class="service-cta">
                                <a href="tel:3490073264" class="btn btn-primary">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    Chiama per Preventivo Gratuito
                                </a>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        const servizio = servizi[slug] || servizi['sgombero'];
        
        return `
            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h1>${servizio.title}</h1>
                        <p>${servizio.subtitle}</p>
                    </div>
                    
                    ${servizio.content}
                    
                    <div class="service-contact">
                        <h3>Richiedi Informazioni</h3>
                        <p>Contattaci per un preventivo gratuito e senza impegno</p>
                        <div class="hero-actions">
                            <a href="tel:3490073264" class="btn btn-primary">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                Chiama Ora: 349 007 3264
                            </a>
                            <a href="#" class="btn btn-secondary" data-page="contatti">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                </svg>
                                Richiedi Preventivo
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getComunePage(comune) {
        return `
            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h1>Sgombero Gratuito a ${comune}</h1>
                        <p>Servizio professionale di sgombero e trasporti specializzato per ${comune} e dintorni</p>
                    </div>
                    
                    <div class="comune-content">
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
                                    <h3>Sgombero Appartamenti</h3>
                                    <p>Sgomberiamo appartamenti, case e ville a ${comune} completamente gratis. Servizio rapido e professionale con personale qualificato.</p>
                                </div>
                                
                                <div class="card">
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
                                            <path d="M9 22v-4h6v4"/>
                                        </svg>
                                    </div>
                                    <h3>Trasporti Specializzati</h3>
                                    <p>Trasporti con scale aeree e attrezzature professionali per raggiungere qualsiasi piano a ${comune}, anche in situazioni complesse.</p>
                                </div>
                                
                                <div class="card">
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M14 9V5a3 3 0 0 0-6 0v4"/>
                                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                        </svg>
                                    </div>
                                    <h3>Traslochi Completi</h3>
                                    <p>Organizziamo traslochi completi da e per ${comune} con servizio chiavi in mano e personale esperto.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="comune-info">
                            <h2>Perché Sceglierci a ${comune}</h2>
                            <div class="features-grid">
                                <div class="feature">
                                    <div class="feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <path d="M12 6v6l4 2"/>
                                        </svg>
                                    </div>
                                    <h3>Intervento Rapido</h3>
                                    <p>Raggiungiamo ${comune} entro 24-48 ore dalla chiamata</p>
                                </div>
                                
                                <div class="feature">
                                    <div class="feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                    </div>
                                    <h3>Conoscenza Locale</h3>
                                    <p>Conosciamo bene ${comune} e le sue caratteristiche</p>
                                </div>
                                
                                <div class="feature">
                                    <div class="feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M9 12l2 2 4-4"/>
                                            <circle cx="12" cy="12" r="10"/>
                                        </svg>
                                    </div>
                                    <h3>Servizio Garantito</h3>
                                    <p>Qualità e professionalità certificate a ${comune}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="comune-contact">
                            <h2>Contattaci per ${comune}</h2>
                            <p>Siamo pronti ad intervenire a ${comune} per qualsiasi esigenza di sgombero o trasporto</p>
                            
                            <div class="hero-actions">
                                <a href="tel:3490073264" class="btn btn-primary">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    Chiama per ${comune}: 349 007 3264
                                </a>
                                <a href="#" class="btn btn-secondary" data-page="contatti">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                    </svg>
                                    Preventivo Gratuito
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getFAQPage() {
        const faqs = [
            {
                question: "Come funziona il servizio di sgombero gratuito?",
                answer: "Il nostro servizio è completamente gratuito perché recuperiamo il valore dagli oggetti che hanno ancora un mercato. Facciamo un sopralluogo gratuito, valutiamo cosa c'è di interessante e concordiamo l'intervento. Tu non paghi nulla e noi ci occupiamo di tutto: sgombero, pulizia e smaltimento a norma di legge."
            },
            {
                question: "Quali oggetti vi interessano per rendere lo sgombero gratuito?",
                answer: "Ci interessano mobili in buono stato, elettrodomestici funzionanti, oggetti d'antiquariato, libri, quadri, ceramiche, argenteria, e qualsiasi oggetto che abbia ancora un valore di mercato. Durante il sopralluogo valutiamo tutto insieme."
            },
            {
                question: "Quanto tempo ci vuole per organizzare uno sgombero?",
                answer: "Generalmente riusciamo ad intervenire entro 24-48 ore dalla richiesta. Per situazioni urgenti possiamo organizzarci anche in giornata. Il sopralluogo è sempre gratuito e senza impegno."
            },
            {
                question: "Operate in tutti i comuni della provincia di Catania?",
                answer: "Sì, operiamo in tutti i comuni della provincia di Catania: da Catania città fino ai paesi dell'Etna, della costa e dell'entroterra. Abbiamo mezzi e personale per raggiungere qualsiasi località."
            },
            {
                question: "Cosa succede se non ci sono oggetti di valore?",
                answer: "Se durante il sopralluogo non troviamo oggetti sufficienti per coprire i costi, possiamo comunque fare lo sgombero a tariffe molto competitive. In ogni caso il sopralluogo è sempre gratuito e senza impegno."
            },
            {
                question: "Siete assicurati e autorizzati?",
                answer: "Sì, siamo completamente assicurati per danni a terzi e abbiamo tutte le autorizzazioni necessarie per il trasporto e lo smaltimento dei rifiuti. Rilasciamo sempre la documentazione per lo smaltimento a norma di legge."
            },
            {
                question: "Potete raggiungere piani alti senza ascensore?",
                answer: "Assolutamente sì! Abbiamo scale aeree professionali che ci permettono di raggiungere balconi e finestre fino al 6° piano. È una delle nostre specializzazioni per situazioni dove le scale condominiali sono troppo strette."
            },
            {
                question: "Fate anche traslochi completi?",
                answer: "Sì, oltre agli sgomberi facciamo anche traslochi completi con servizio chiavi in mano: imballaggio, trasporto, smontaggio e rimontaggio mobili. Preventivo sempre gratuito."
            },
            {
                question: "Come posso richiedere un preventivo?",
                answer: "Puoi chiamarci direttamente al 349 007 3264 oppure compilare il form di contatto sul sito. Ti ricontatteremo entro poche ore per fissare il sopralluogo gratuito."
            },
            {
                question: "Lavorate anche nei weekend?",
                answer: "Sì, lavoriamo anche nei weekend per venire incontro alle esigenze dei clienti. Siamo flessibili sugli orari e cerchiamo sempre di adattarci alle vostre necessità."
            }
        ];

        return `
            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h1>Domande Frequenti</h1>
                        <p>Tutte le risposte che cerchi sui nostri servizi di sgombero e trasporti</p>
                    </div>
                    
                    <div class="faq-list">
                        ${faqs.map((faq, index) => `
                            <div class="faq-item">
                                <button class="faq-question">
                                    ${faq.question}
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="6,9 12,15 18,9"/>
                                    </svg>
                                </button>
                                <div class="faq-answer">
                                    <p>${faq.answer}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="faq-contact">
                        <h2>Non hai trovato la risposta che cercavi?</h2>
                        <p>Contattaci direttamente per qualsiasi domanda specifica</p>
                        <div class="hero-actions">
                            <a href="tel:3490073264" class="btn btn-primary">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                Chiama Ora: 349 007 3264
                            </a>
                            <a href="#" class="btn btn-secondary" data-page="contatti">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                </svg>
                                Scrivi un Messaggio
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getContattiPage() {
        return `
            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h1>Contattaci</h1>
                        <p>Siamo sempre disponibili per preventivi gratuiti e consulenze</p>
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
                                    <small>Disponibile 7 giorni su 7, dalle 8:00 alle 20:00</small>
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
                                    <small>Tutti i comuni della provincia di Catania</small>
                                </div>
                            </div>
                            
                            <div class="contact-item">
                                <div class="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M12 6v6l4 2"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Tempi di Risposta</h3>
                                    <p>24-48 ore</p>
                                    <small>Interventi rapidi, anche in giornata per urgenze</small>
                                </div>
                            </div>
                            
                            <div class="contact-item">
                                <div class="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M9 12l2 2 4-4"/>
                                        <circle cx="12" cy="12" r="10"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Sopralluogo</h3>
                                    <p>Sempre Gratuito</p>
                                    <small>Valutazione senza impegno e preventivo trasparente</small>
                                </div>
                            </div>
                        </div>
                        
                        <div class="contact-form">
                            <h3>Richiedi Preventivo Gratuito</h3>
                            <form id="contact-form">
                                <div class="form-group">
                                    <label class="form-label">Nome e Cognome *</label>
                                    <input type="text" class="form-input" required>
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label">Telefono *</label>
                                    <input type="tel" class="form-input" required>
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-input">
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label">Comune *</label>
                                    <select class="form-select" required>
                                        <option value="">Seleziona il comune</option>
                                        <option value="catania">Catania</option>
                                        <option value="acireale">Acireale</option>
                                        <option value="adrano">Adrano</option>
                                        <option value="belpasso">Belpasso</option>
                                        <option value="biancavilla">Biancavilla</option>
                                        <option value="bronte">Bronte</option>
                                        <option value="caltagirone">Caltagirone</option>
                                        <option value="altro">Altro comune</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label">Tipo di Servizio *</label>
                                    <select class="form-select" required>
                                        <option value="">Seleziona il servizio</option>
                                        <option value="sgombero">Sgombero Gratuito</option>
                                        <option value="trasporto">Trasporto</option>
                                        <option value="trasloco">Trasloco</option>
                                        <option value="altro">Altro</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label">Descrizione</label>
                                    <textarea class="form-input form-textarea" placeholder="Descrivi brevemente cosa devi sgomberare o trasportare..."></textarea>
                                </div>
                                
                                <button type="submit" class="btn btn-primary" style="width: 100%;">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                    </svg>
                                    Invia Richiesta
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    setupPageFunctionality() {
        // Setup FAQ toggles
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.closest('.faq-item');
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

        // Setup contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Grazie per la richiesta! Ti contatteremo entro 24 ore.');
            });
        }
    }

    setupModals() {
        // Auth modal
        const authModal = document.getElementById('auth-modal');
        const userBtn = document.getElementById('user-btn');
        const closeAuth = document.getElementById('close-auth');

        userBtn?.addEventListener('click', () => {
            authModal.classList.add('active');
            this.loadAuthContent();
        });

        closeAuth?.addEventListener('click', () => {
            authModal.classList.remove('active');
        });

        // Settings modal
        const settingsModal = document.getElementById('settings-modal');
        const settingsBtn = document.getElementById('settings-btn');
        const closeSettings = document.getElementById('close-settings');

        settingsBtn?.addEventListener('click', () => {
            settingsModal.classList.add('active');
            this.loadSettingsContent();
        });

        closeSettings?.addEventListener('click', () => {
            settingsModal.classList.remove('active');
        });

        // Close modals on backdrop click
        [authModal, settingsModal].forEach(modal => {
            modal?.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });
    }

    loadAuthContent() {
        const authContent = document.getElementById('auth-content');
        authContent.innerHTML = `
            <form id="auth-form">
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-input" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-input" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-bottom: 16px;">
                    Accedi
                </button>
                <button type="button" class="btn btn-outline" style="width: 100%;">
                    Registrati
                </button>
            </form>
        `;
    }

    loadSettingsContent() {
        const settingsContent = document.getElementById('settings-content');
        settingsContent.innerHTML = `
            <div class="settings-section">
                <h3>Tema</h3>
                <div class="theme-options">
                    <div class="theme-option active" data-theme="light">
                        <div class="theme-icon">☀️</div>
                        <div>Chiaro</div>
                    </div>
                    <div class="theme-option" data-theme="dark">
                        <div class="theme-icon">🌙</div>
                        <div>Scuro</div>
                    </div>
                    <div class="theme-option" data-theme="custom">
                        <div class="theme-icon">🎨</div>
                        <div>Personalizzato</div>
                    </div>
                </div>
            </div>

            <div class="settings-section" id="custom-colors" style="display: none;">
                <h3>Colori Personalizzati</h3>
                <div class="color-input-group">
                    <label class="form-label">Sfondo</label>
                    <input type="color" class="color-input" value="#ffffff">
                </div>
                <div class="color-input-group">
                    <label class="form-label">Testo</label>
                    <input type="color" class="color-input" value="#000000">
                </div>
                <div class="color-input-group">
                    <label class="form-label">Pulsanti</label>
                    <input type="color" class="color-input" value="#007AFF">
                </div>
            </div>

            <div class="settings-section">
                <h3>Effetti</h3>
                <div class="form-group">
                    <label class="form-label">Effetto Vetro</label>
                    <div class="toggle-switch active" data-setting="glass"></div>
                </div>
            </div>
        `;

        this.setupSettings();
    }

    setupSettings() {
        // Theme selection
        document.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                const theme = option.dataset.theme;
                document.documentElement.setAttribute('data-theme', theme);
                
                const customColors = document.getElementById('custom-colors');
                if (theme === 'custom') {
                    customColors.style.display = 'block';
                } else {
                    customColors.style.display = 'none';
                }
            });
        });

        // Color inputs
        document.querySelectorAll('.color-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const property = e.target.previousElementSibling.textContent.toLowerCase();
                const value = e.target.value;
                
                switch(property) {
                    case 'sfondo':
                        document.documentElement.style.setProperty('--custom-bg', value);
                        break;
                    case 'testo':
                        document.documentElement.style.setProperty('--custom-text', value);
                        break;
                    case 'pulsanti':
                        document.documentElement.style.setProperty('--custom-button', value);
                        break;
                }
            });
        });

        // Toggle switches
        document.querySelectorAll('.toggle-switch').forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggle.classList.toggle('active');
                
                const setting = toggle.dataset.setting;
                if (setting === 'glass') {
                    const isActive = toggle.classList.contains('active');
                    document.querySelectorAll('.navbar, .dropdown-menu, .modal-content').forEach(el => {
                        if (isActive) {
                            el.classList.add('glass');
                        } else {
                            el.classList.remove('glass');
                        }
                    });
                }
            });
        });
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new SgomberoApp();
});