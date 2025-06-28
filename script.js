// Navigation and routing functionality
class Router {
    constructor() {
        this.routes = {
            'home': () => this.loadHomePage(),
            'servizio': (slug) => this.loadServicePage(slug),
            'dove-operiamo': () => this.loadDoveOperiamoPage(),
            'blog': () => this.redirectToPage('blog.html'),
            'chi-siamo': () => this.redirectToPage('chi-siamo.html'),
            'faq': () => this.loadFaqPage(),
            'contatti': () => this.loadContatti()
        };
        
        this.comuni = [
            'Catania', 'Acireale', 'Giarre', 'Paternò', 'Adrano', 'Belpasso',
            'Mascalucia', 'Gravina di Catania', 'San Giovanni la Punta', 'Tremestieri Etneo',
            'Sant\'Agata li Battiati', 'Valverde', 'Aci Catena', 'Aci Sant\'Antonio',
            'Viagrande', 'Zafferana Etnea', 'Nicolosi', 'Pedara', 'Trecastagni',
            'Aci Castello', 'San Gregorio di Catania', 'Camporotondo Etneo'
        ];
        
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupDropdowns();
        this.setupComuniDropdown();
        this.setupCronoshopPopup();
        this.loadHomePage(); // Load home page by default
    }

    setupNavigation() {
        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-page]');
            if (link) {
                e.preventDefault();
                const page = link.dataset.page;
                const slug = link.dataset.slug;
                
                // Update active states
                this.updateActiveNavLink(link);
                
                // Route to appropriate page
                if (this.routes[page]) {
                    this.routes[page](slug);
                }
            }
        });

        // Handle direct HTML page links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href$=".html"]');
            if (link && !link.target) {
                e.preventDefault();
                const href = link.getAttribute('href');
                this.redirectToPage(href);
            }
        });
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('nav-menu');
        
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenuBtn.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuBtn.contains(e.target) && !navMenu.contains(e.target)) {
                    mobileMenuBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }
    }

    setupDropdowns() {
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            if (toggle && menu) {
                // Desktop hover
                dropdown.addEventListener('mouseenter', () => {
                    menu.classList.add('show');
                });
                
                dropdown.addEventListener('mouseleave', () => {
                    menu.classList.remove('show');
                });
                
                // Mobile click
                toggle.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        menu.classList.toggle('show');
                    }
                });
            }
        });
    }

    setupComuniDropdown() {
        const comuniGrid = document.getElementById('comuni-grid');
        if (comuniGrid) {
            comuniGrid.innerHTML = this.comuni.map(comune => 
                `<a href="#" class="dropdown-item" data-page="comune" data-slug="${comune.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}">${comune}</a>`
            ).join('');
        }
    }

    setupCronoshopPopup() {
        const popup = document.getElementById('cronoshop-small-popup');
        const closeBtn = document.getElementById('small-popup-close');
        
        if (popup && closeBtn) {
            // Show popup after 5 seconds
            setTimeout(() => {
                popup.classList.add('show');
            }, 5000);
            
            // Close popup
            closeBtn.addEventListener('click', () => {
                popup.classList.remove('show');
            });
            
            // Auto-hide after 10 seconds
            setTimeout(() => {
                popup.classList.remove('show');
            }, 15000);
        }
    }

    updateActiveNavLink(activeLink) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        if (activeLink.classList.contains('nav-link')) {
            activeLink.classList.add('active');
        } else {
            // If it's a dropdown item, activate the parent dropdown
            const parentDropdown = activeLink.closest('.nav-dropdown');
            if (parentDropdown) {
                const parentToggle = parentDropdown.querySelector('.dropdown-toggle');
                if (parentToggle) {
                    parentToggle.classList.add('active');
                }
            }
        }
    }

    redirectToPage(page) {
        window.location.href = page;
    }

    loadHomePage() {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <!-- Hero Section con sfondo Etna -->
                <section class="hero hero-etna">
                    <div class="hero-content">
                        <h1>STR Sgomberi Catania</h1>
                        <h2 class="hero-subtitle">SGOMBERO GRATUITO<br><span class="hero-highlight">In Cambio di Merce Riutilizzabile</span></h2>
                        <p>Leader assoluto negli sgomberi gratuiti e trasporti professionali alle pendici dell'Etna dal 2015. Oltre 2500 interventi completati nel territorio catanese con approccio eco-sostenibile e innovativo.</p>
                        
                        <div class="hero-guarantee">
                            <div class="guarantee-item">
                                <strong>✓ Sgombero Gratuito</strong>
                                <span>Se la merce ha valore riutilizzabile</span>
                            </div>
                            <div class="guarantee-item">
                                <strong>✓ Preventivo Gratuito</strong>
                                <span>Sempre senza impegno</span>
                            </div>
                            <div class="guarantee-item">
                                <strong>✓ Servizio Rapido</strong>
                                <span>Anche in giornata a Catania</span>
                            </div>
                        </div>
                        
                        <a href="tel:3497500613" class="hero-phone">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            349 750 0613
                        </a>
                        
                        <div class="hero-actions">
                            <a href="#" class="btn btn-outline" data-page="contatti">Preventivo Gratuito Immediato</a>
                            <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary">
                                <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
                                    <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                                </svg>
                                WhatsApp Immediato
                            </a>
                        </div>
                    </div>
                </section>

                <!-- Unique Value Proposition Section -->
                <section class="section section-light">
                    <div class="container">
                        <div class="section-header">
                            <h2>Perché STR Sgomberi è la Scelta #1 per gli Sgomberi a Catania</h2>
                            <p>Dal 2015 rivoluzionamo il concetto di sgombero nel territorio etneo con un approccio innovativo, eco-sostenibile e conveniente che ha conquistato oltre 2500 famiglie catanesi</p>
                        </div>
                        
                        <div class="unique-value-grid">
                            <div class="value-card featured">
                                <div class="value-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M8 12l2 2 4-4"/>
                                    </svg>
                                </div>
                                <h3>Sgombero Gratuito Garantito</h3>
                                <p><strong>Unici a Catania</strong> a offrire sgombero completamente gratuito quando la merce presente ha valore riutilizzabile. Non è un trucco marketing: è il nostro modello di business sostenibile che premia sia te che l'ambiente siciliano.</p>
                                <div class="value-details">
                                    <h4>Come Funziona:</h4>
                                    <ul>
                                        <li>✓ Sopralluogo gratuito a Catania in 24h</li>
                                        <li>✓ Valutazione professionale della merce</li>
                                        <li>✓ Se il valore copre i costi = SERVIZIO GRATUITO</li>
                                        <li>✓ Altrimenti preventivo trasparente e conveniente</li>
                                    </ul>
                                </div>
                                <a href="https://sgomberocatania.it/come-funziona-sgombero-gratuito" target="_blank" rel="noopener" class="value-link">Scopri tutti i dettagli del nostro metodo rivoluzionario →</a>
                            </div>
                            
                            <div class="value-card">
                                <div class="value-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                                    </svg>
                                </div>
                                <h3>Esperienza Territoriale Unica</h3>
                                <p><strong>9 anni di specializzazione</strong> esclusiva nel territorio etneo. Conosciamo ogni strada di Catania, ogni sfida logistica delle pendici dell'Etna, ogni normativa locale per lo smaltimento.</p>
                                <div class="value-details">
                                    <h4>La Nostra Expertise:</h4>
                                    <ul>
                                        <li>✓ 2500+ interventi completati a Catania</li>
                                        <li>✓ Specialisti in zone difficili (Etna, centro storico)</li>
                                        <li>✓ Rete consolidata di partner locali</li>
                                        <li>✓ Conoscenza approfondita normative catanesi</li>
                                    </ul>
                                </div>
                                <a href="https://sgomberocatania.it/la-nostra-esperienza-territorio-etneo" target="_blank" rel="noopener" class="value-link">Leggi i nostri case study più significativi →</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Services Section Estesa -->
                <section class="section section-gray">
                    <div class="container">
                        <div class="section-header">
                            <h2>I Nostri Servizi Specializzati per Catania</h2>
                            <p>Soluzioni complete e personalizzate per ogni esigenza di sgombero e trasporto nel territorio etneo, con un approccio professionale che ci distingue dalla concorrenza</p>
                        </div>
                        
                        <div class="services-extended-grid">
                            <div class="service-card primary">
                                <div class="service-badge">SERVIZIO PRINCIPALE</div>
                                <div class="service-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                        <polyline points="9,22 9,12 15,12 15,22"/>
                                    </svg>
                                </div>
                                <h3>Sgombero Gratuito in Cambio di Merce Riutilizzabile</h3>
                                <p class="service-intro">Il nostro servizio rivoluzionario che ha cambiato il modo di concepire gli sgomberi a Catania. <strong>Completamente gratuito</strong> quando la merce presente ha valore di riutilizzo.</p>
                                
                                <div class="service-features">
                                    <h4>Cosa Include il Servizio:</h4>
                                    <ul>
                                        <li><strong>Valutazione Professionale Gratuita:</strong> I nostri esperti valutatori analizzano ogni oggetto presente nell'immobile catanese per determinare il valore di riutilizzo</li>
                                        <li><strong>Sgombero Completo:</strong> Rimozione di mobili, elettrodomestici, oggetti di arredamento, libri, abbigliamento e tutto ciò che è presente</li>
                                        <li><strong>Pulizia Finale:</strong> Lasciamo l'ambiente perfettamente pulito e pronto per il nuovo utilizzo</li>
                                        <li><strong>Gestione Burocratica:</strong> Ci occupiamo di tutta la documentazione necessaria per lo smaltimento nel territorio catanese</li>
                                        <li><strong>Approccio Eco-Sostenibile:</strong> Massimizziamo il riutilizzo e il riciclo per rispettare l'ambiente siciliano</li>
                                    </ul>
                                </div>
                                
                                <div class="service-areas">
                                    <h4>Tipologie di Immobili Sgomberati a Catania:</h4>
                                    <div class="areas-grid">
                                        <span>Appartamenti Centro Storico</span>
                                        <span>Case Periferia Catania</span>
                                        <span>Uffici e Negozi</span>
                                        <span>Cantine e Soffitte</span>
                                        <span>Garage e Magazzini</span>
                                        <span>Ville Zona Etna</span>
                                        <span>Locali Commerciali</span>
                                        <span>Studi Professionali</span>
                                    </div>
                                </div>
                                
                                <div class="service-process">
                                    <h4>Il Nostro Processo Collaudato:</h4>
                                    <div class="process-steps">
                                        <div class="step">
                                            <span class="step-number">1</span>
                                            <div class="step-content">
                                                <h5>Contatto e Sopralluogo</h5>
                                                <p>Chiamaci al 349 750 0613 o contattaci via WhatsApp. Fissiamo un appuntamento per il sopralluogo gratuito a Catania entro 24 ore.</p>
                                            </div>
                                        </div>
                                        <div class="step">
                                            <span class="step-number">2</span>
                                            <div class="step-content">
                                                <h5>Valutazione Professionale</h5>
                                                <p>I nostri esperti valutano la merce presente, determinando il valore di riutilizzo e la fattibilità del servizio gratuito.</p>
                                            </div>
                                        </div>
                                        <div class="step">
                                            <span class="step-number">3</span>
                                            <div class="step-content">
                                                <h5>Proposta Personalizzata</h5>
                                                <p>Ti presentiamo la nostra proposta: servizio gratuito se la merce copre i costi, altrimenti preventivo trasparente e conveniente.</p>
                                            </div>
                                        </div>
                                        <div class="step">
                                            <span class="step-number">4</span>
                                            <div class="step-content">
                                                <h5>Sgombero Professionale</h5>
                                                <p>Eseguiamo lo sgombero con attrezzature professionali, rispettando tempi concordati e lasciando l'ambiente perfettamente pulito.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <a href="#" class="service-cta" data-page="servizio" data-slug="sgombero">Richiedi Valutazione Gratuita →</a>
                                <p class="service-note">Per approfondimenti sul nostro metodo innovativo, <a href="https://sgomberocatania.it/metodologia-sgombero-sostenibile" target="_blank" rel="noopener">visita la sezione dedicata del nostro sito specializzato</a> dove troverai case study dettagliati e testimonianze dei nostri clienti catanesi.</p>
                            </div>
                            
                            <div class="service-card">
                                <div class="service-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14,2 14,8 20,8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                        <polyline points="10,9 9,9 8,9"/>
                                    </svg>
                                </div>
                                <h3>Trasporti Professionali Catania</h3>
                                <p class="service-intro">Servizi di trasporto sicuri, affidabili e specializzati per ogni esigenza nel territorio etneo, con flotta di veicoli attrezzati e personale qualificato.</p>
                                
                                <div class="service-features">
                                    <h4>I Nostri Servizi di Trasporto:</h4>
                                    <ul>
                                        <li><strong>Trasporto Mobili e Elettrodomestici:</strong> Movimentazione sicura di mobili pesanti, elettrodomestici di grandi dimensioni, con imballaggio professionale</li>
                                        <li><strong>Trasporti Commerciali:</strong> Servizi dedicati a negozi, uffici, ristoranti nel territorio catanese con orari flessibili</li>
                                        <li><strong>Trasporti Urgenti:</strong> Servizio express per esigenze immediate a Catania, anche in giornata</li>
                                        <li><strong>Facchinaggio Specializzato:</strong> Personale qualificato per movimentazione in zone difficili (scale strette, piani alti, zone etnee)</li>
                                        <li><strong>Trasporti Delicati:</strong> Specializzati in opere d'arte, antiquariato, oggetti di valore nel territorio catanese</li>
                                    </ul>
                                </div>
                                
                                <div class="service-coverage">
                                    <h4>Copertura Territoriale Completa:</h4>
                                    <p>Serviamo tutto il territorio della provincia di Catania, dalle pendici dell'Etna fino alla costa ionica, con particolare specializzazione nelle zone più difficili da raggiungere.</p>
                                </div>
                                
                                <a href="#" class="service-cta" data-page="servizio" data-slug="trasporto">Richiedi Preventivo Trasporto →</a>
                                <p class="service-note">Scopri di più sui nostri <a href="https://sgomberocatania.it/servizi-trasporto-specializzati" target="_blank" rel="noopener">servizi di trasporto specializzati</a> e le nostre attrezzature professionali per ogni tipo di movimentazione a Catania.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Territorial Expertise Section -->
                <section class="section section-light">
                    <div class="container">
                        <div class="territorial-expertise">
                            <div class="section-header">
                                <h2>La Nostra Expertise Territoriale: 9 Anni di Specializzazione nel Territorio Etneo</h2>
                                <p>Nessuno conosce Catania e provincia come noi. La nostra esperienza pluriennale nel territorio etneo ci permette di affrontare ogni sfida logistica con competenza e professionalità uniche nel settore degli sgomberi.</p>
                            </div>
                            
                            <div class="expertise-content">
                                <div class="expertise-text">
                                    <h3>Perché la Conoscenza del Territorio Fa la Differenza negli Sgomberi a Catania</h3>
                                    <p>Operare nel territorio catanese presenta sfide uniche che solo un'azienda specializzata può affrontare efficacemente. <strong>STR Sgomberi</strong> ha sviluppato in 9 anni di attività una conoscenza approfondita che ci permette di offrire servizi superiori alla concorrenza.</p>
                                    
                                    <div class="expertise-challenges">
                                        <h4>Le Sfide Specifiche del Territorio Etneo che Affrontiamo Quotidianamente:</h4>
                                        <ul>
                                            <li><strong>Centro Storico di Catania:</strong> Strade strette, vincoli architettonici, limitazioni di accesso per i veicoli. Abbiamo sviluppato tecniche specifiche per operare nel rispetto dei beni culturali.</li>
                                            <li><strong>Zone Etnee:</strong> Terreni vulcanici, strade in pendenza, accessi difficili alle abitazioni. La nostra esperienza nelle zone dell'Etna ci permette di raggiungere anche le località più remote.</li>
                                            <li><strong>Normative Locali:</strong> Conoscenza approfondita delle normative comunali per lo smaltimento, dei centri di raccolta autorizzati, delle procedure burocratiche specifiche di Catania.</li>
                                            <li><strong>Logistica Urbana:</strong> Ottimizzazione dei percorsi per evitare il traffico catanese, conoscenza delle zone a traffico limitato, gestione degli orari di carico/scarico.</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="expertise-network">
                                        <h4>La Nostra Rete di Partnership Locali:</h4>
                                        <p>In 9 anni di attività abbiamo costruito una rete solida di collaborazioni che ci permette di offrire un servizio completo e di qualità superiore:</p>
                                        <ul>
                                            <li><strong>Centri di Riciclo Autorizzati:</strong> Partnership con i principali centri di raccolta e riciclo del territorio catanese per garantire lo smaltimento eco-sostenibile</li>
                                            <li><strong>Associazioni Benefiche Locali:</strong> Collaborazioni con enti caritatevoli catanesi per donare oggetti ancora utilizzabili, massimizzando l'impatto sociale positivo</li>
                                            <li><strong>Fornitori Specializzati:</strong> Rete di fornitori locali per materiali di imballaggio, attrezzature specifiche, servizi complementari</li>
                                            <li><strong>Professionisti del Settore:</strong> Collaborazioni con architetti, interior designer, agenzie immobiliari catanesi per servizi integrati</li>
                                        </ul>
                                    </div>
                                    
                                    <p>Questa conoscenza territoriale approfondita ci permette di offrire tempi di intervento ridotti, costi ottimizzati e un livello di servizio che solo un'azienda veramente specializzata nel territorio etneo può garantire. <a href="https://sgomberocatania.it/expertise-territoriale-catania" target="_blank" rel="noopener">Approfondisci la nostra conoscenza del territorio catanese</a> e scopri come questa expertise si traduce in vantaggi concreti per i nostri clienti.</p>
                                </div>
                                
                                <div class="expertise-stats">
                                    <h3>I Numeri della Nostra Esperienza a Catania</h3>
                                    <div class="stats-grid">
                                        <div class="stat-item">
                                            <div class="stat-number">2500+</div>
                                            <div class="stat-label">Interventi Completati</div>
                                            <div class="stat-description">Nel territorio etneo dal 2015</div>
                                        </div>
                                        <div class="stat-item">
                                            <div class="stat-number">22</div>
                                            <div class="stat-label">Comuni Serviti</div>
                                            <div class="stat-description">In tutta la provincia di Catania</div>
                                        </div>
                                        <div class="stat-item">
                                            <div class="stat-number">98%</div>
                                            <div class="stat-label">Clienti Soddisfatti</div>
                                            <div class="stat-description">Che ci raccomandano ad amici e parenti</div>
                                        </div>
                                        <div class="stat-item">
                                            <div class="stat-number">75%</div>
                                            <div class="stat-label">Sgomberi Gratuiti</div>
                                            <div class="stat-description">Realizzati in cambio di merce riutilizzabile</div>
                                        </div>
                                        <div class="stat-item">
                                            <div class="stat-number">24h</div>
                                            <div class="stat-label">Tempo Medio</div>
                                            <div class="stat-description">Per sopralluogo gratuito a Catania</div>
                                        </div>
                                        <div class="stat-item">
                                            <div class="stat-number">9</div>
                                            <div class="stat-label">Anni di Esperienza</div>
                                            <div class="stat-description">Esclusiva nel territorio etneo</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Comprehensive Coverage Section -->
                <section class="section section-gray">
                    <div class="container">
                        <div class="section-header">
                            <h2>Copertura Completa del Territorio Etneo: Serviamo Ogni Comune della Provincia di Catania</h2>
                            <p>La nostra rete capillare ci permette di raggiungere ogni angolo della provincia catanese, dalle pendici dell'Etna fino alla costa ionica, garantendo lo stesso livello di professionalità e qualità ovunque tu sia.</p>
                        </div>
                        
                        <div class="coverage-content">
                            <div class="coverage-map">
                                <h3>Zone di Intervento Specializzate</h3>
                                <div class="zones-grid">
                                    <div class="zone-card">
                                        <h4>🏛️ Centro Storico Catania</h4>
                                        <p>Esperienza specifica negli sgomberi nel centro storico di Catania, con attenzione ai vincoli architettonici e alle normative per i beni culturali. Utilizziamo attrezzature specifiche per operare in spazi ristretti e strade storiche.</p>
                                        <ul>
                                            <li>Via Etnea e zone limitrofe</li>
                                            <li>Quartiere San Berillo</li>
                                            <li>Zona Duomo e Pescheria</li>
                                            <li>Quartiere Civita</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="zone-card">
                                        <h4>🌋 Zone Etnee</h4>
                                        <p>Specializzazione negli interventi nelle zone difficili delle pendici dell'Etna, con attrezzature specifiche per terreni vulcanici e strade in pendenza. Conosciamo ogni strada e ogni sfida logistica del territorio etneo.</p>
                                        <ul>
                                            <li>Nicolosi e zone alte dell'Etna</li>
                                            <li>Zafferana Etnea e dintorni</li>
                                            <li>Pedara e Trecastagni</li>
                                            <li>Viagrande e zone collinari</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="zone-card">
                                        <h4>🏖️ Costa Ionica</h4>
                                        <p>Servizi specializzati per le località balneari e costiere della provincia, da Aci Castello ad Acireale, con particolare attenzione alle esigenze stagionali e alle strutture turistiche.</p>
                                        <ul>
                                            <li>Aci Castello e Aci Trezza</li>
                                            <li>Acireale e frazioni</li>
                                            <li>Giarre e zona costiera</li>
                                            <li>Torre Archirafi e Riposto</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="zone-card">
                                        <h4>🏭 Zone Industriali</h4>
                                        <p>Esperienza consolidata negli sgomberi industriali e commerciali nelle zone produttive di Catania e hinterland, con attrezzature specifiche per grandi volumi e materiali industriali.</p>
                                        <ul>
                                            <li>Zona Industriale Catania</li>
                                            <li>Area ASI di Catania</li>
                                            <li>Zone commerciali periferiche</li>
                                            <li>Distretti produttivi provinciali</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="comuni-coverage">
                                <h3>Tutti i Comuni Serviti nella Provincia di Catania</h3>
                                <p>La nostra copertura territoriale include tutti i 58 comuni della provincia di Catania. Ecco l'elenco completo delle località dove interveniamo regolarmente con i nostri servizi di sgombero e trasporto:</p>
                                
                                <div class="comuni-complete-list">
                                    <div class="comuni-column">
                                        <h4>Comuni Principali</h4>
                                        <ul>
                                            <li><strong>Catania</strong> - Capoluogo e centro principale</li>
                                            <li><strong>Acireale</strong> - Città barocca della costa</li>
                                            <li><strong>Giarre</strong> - Centro della costa ionica</li>
                                            <li><strong>Paternò</strong> - Importante centro dell'entroterra</li>
                                            <li><strong>Adrano</strong> - Alle pendici occidentali dell'Etna</li>
                                            <li><strong>Belpasso</strong> - Centro etneo in crescita</li>
                                            <li><strong>Mascalucia</strong> - Comune residenziale etneo</li>
                                            <li><strong>Gravina di Catania</strong> - Hinterland catanese</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="comuni-column">
                                        <h4>Comuni Etnei</h4>
                                        <ul>
                                            <li>Nicolosi - Porta dell'Etna</li>
                                            <li>Zafferana Etnea - Perla dell'Etna</li>
                                            <li>Pedara - Centro etneo storico</li>
                                            <li>Trecastagni - Tradizione e natura</li>
                                            <li>Viagrande - Zona collinare</li>
                                            <li>Sant'Alfio - Alta quota etnea</li>
                                            <li>Milo - Piccolo borgo etneo</li>
                                            <li>Ragalna - Versante occidentale</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="comuni-column">
                                        <h4>Altri Comuni Serviti</h4>
                                        <ul>
                                            <li>San Giovanni la Punta</li>
                                            <li>Tremestieri Etneo</li>
                                            <li>Sant'Agata li Battiati</li>
                                            <li>Valverde</li>
                                            <li>Aci Catena</li>
                                            <li>Aci Sant'Antonio</li>
                                            <li>Aci Castello</li>
                                            <li>San Gregorio di Catania</li>
                                            <li>Camporotondo Etneo</li>
                                            <li>E tutti gli altri 49 comuni...</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <p class="coverage-note">Per ogni comune della provincia di Catania garantiamo gli stessi standard di qualità e professionalità. <a href="https://sgomberocatania.it/copertura-territoriale-completa" target="_blank" rel="noopener">Consulta la mappa interattiva completa</a> dei nostri interventi e scopri le specificità del servizio per la tua zona.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Sustainability and Innovation Section -->
                <section class="section section-light">
                    <div class="container">
                        <div class="sustainability-section">
                            <div class="section-header">
                                <h2>Innovazione e Sostenibilità: Il Futuro degli Sgomberi a Catania</h2>
                                <p>STR Sgomberi non è solo un'azienda di sgomberi: siamo pionieri di un nuovo approccio sostenibile che coniuga convenienza economica, responsabilità ambientale e innovazione tecnologica nel territorio etneo.</p>
                            </div>
                            
                            <div class="sustainability-content">
                                <div class="innovation-text">
                                    <h3>Il Nostro Modello Rivoluzionario: Economia Circolare Applicata agli Sgomberi</h3>
                                    <p>Dal 2015 abbiamo introdotto a Catania un concetto rivoluzionario: <strong>trasformare il "rifiuto" in risorsa</strong>. Il nostro modello di business si basa sui principi dell'economia circolare, dove ogni oggetto viene valutato per il suo potenziale di riutilizzo, creando valore sia per il cliente che per l'ambiente siciliano.</p>
                                    
                                    <div class="circular-economy">
                                        <h4>Come Funziona la Nostra Economia Circolare:</h4>
                                        <div class="economy-steps">
                                            <div class="economy-step">
                                                <span class="step-icon">🔍</span>
                                                <h5>Valutazione Intelligente</h5>
                                                <p>Ogni oggetto viene analizzato da esperti per determinare il potenziale di riutilizzo, riparazione o riciclo nel mercato catanese.</p>
                                            </div>
                                            <div class="economy-step">
                                                <span class="step-icon">♻️</span>
                                                <h5>Categorizzazione Sostenibile</h5>
                                                <p>Separiamo gli oggetti in categorie: riutilizzo diretto, donazione benefica, riciclo materiali, smaltimento responsabile.</p>
                                            </div>
                                            <div class="economy-step">
                                                <span class="step-icon">🤝</span>
                                                <h5>Rete di Redistribuzione</h5>
                                                <p>Collaboriamo con mercatini dell'usato, associazioni benefiche catanesi, centri di riparazione per dare nuova vita agli oggetti.</p>
                                            </div>
                                            <div class="economy-step">
                                                <span class="step-icon">💰</span>
                                                <h5>Valore Condiviso</h5>
                                                <p>Il valore recuperato dalla merce permette di offrire il servizio gratuito al cliente, creando un win-win per tutti.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="environmental-impact">
                                        <h4>Il Nostro Impatto Ambientale Positivo nel Territorio Etneo:</h4>
                                        <div class="impact-stats">
                                            <div class="impact-item">
                                                <span class="impact-number">85%</span>
                                                <span class="impact-label">Materiali Recuperati</span>
                                                <span class="impact-description">Degli oggetti sgomberati vengono riutilizzati o riciclati</span>
                                            </div>
                                            <div class="impact-item">
                                                <span class="impact-number">500+</span>
                                                <span class="impact-label">Tonnellate Salvate</span>
                                                <span class="impact-description">Dalla discarica negli ultimi 3 anni</span>
                                            </div>
                                            <div class="impact-item">
                                                <span class="impact-number">150+</span>
                                                <span class="impact-label">Famiglie Aiutate</span>
                                                <span class="impact-description">Attraverso donazioni a enti benefici catanesi</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p>Questo approccio innovativo ci ha permesso di diventare leader nel settore degli sgomberi a Catania, dimostrando che è possibile coniugare business di successo e responsabilità ambientale. <a href="https://sgomberocatania.it/modello-economia-circolare" target="_blank" rel="noopener">Scopri tutti i dettagli del nostro modello sostenibile</a> e come contribuiamo alla salvaguardia dell'ambiente siciliano.</p>
                                </div>
                                
                                <div class="technology-innovation">
                                    <h3>Tecnologia e Innovazione al Servizio degli Sgomberi</h3>
                                    <p>Utilizziamo le più moderne tecnologie per ottimizzare ogni aspetto del nostro servizio, dalla pianificazione logistica alla gestione dei materiali recuperati.</p>
                                    
                                    <div class="tech-features">
                                        <div class="tech-feature">
                                            <h4>📱 App Mobile per Valutazioni</h4>
                                            <p>Sistema proprietario per valutazioni rapide e accurate degli oggetti, con database prezzi aggiornato in tempo reale per il mercato catanese.</p>
                                        </div>
                                        <div class="tech-feature">
                                            <h4>🗺️ Ottimizzazione Percorsi GPS</h4>
                                            <p>Software avanzato per pianificare i percorsi più efficienti nel territorio etneo, riducendo tempi e impatto ambientale.</p>
                                        </div>
                                        <div class="tech-feature">
                                            <h4>📊 Tracking Materiali</h4>
                                            <p>Sistema di tracciabilità completa dei materiali recuperati, dalla raccolta alla destinazione finale nel territorio catanese.</p>
                                        </div>
                                        <div class="tech-feature">
                                            <h4>🤖 AI per Categorizzazione</h4>
                                            <p>Intelligenza artificiale per categorizzare automaticamente gli oggetti e suggerire la migliore destinazione di riutilizzo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- CTA Section Potenziata -->
                <section class="section section-primary">
                    <div class="container">
                        <div class="cta-section-enhanced">
                            <div class="cta-content">
                                <h2>Pronto per il Miglior Servizio di Sgombero a Catania?</h2>
                                <p class="cta-subtitle">Unisciti alle oltre 2500 famiglie catanesi che hanno scelto STR Sgomberi per la qualità, convenienza e sostenibilità del nostro servizio nel territorio etneo.</p>
                                
                                <div class="cta-benefits">
                                    <div class="benefit-item">
                                        <span class="benefit-icon">✅</span>
                                        <span>Sopralluogo Gratuito in 24h</span>
                                    </div>
                                    <div class="benefit-item">
                                        <span class="benefit-icon">✅</span>
                                        <span>Possibilità di Servizio Completamente Gratuito</span>
                                    </div>
                                    <div class="benefit-item">
                                        <span class="benefit-icon">✅</span>
                                        <span>9 Anni di Esperienza nel Territorio Etneo</span>
                                    </div>
                                    <div class="benefit-item">
                                        <span class="benefit-icon">✅</span>
                                        <span>Approccio 100% Eco-Sostenibile</span>
                                    </div>
                                </div>
                                
                                <div class="cta-buttons-enhanced">
                                    <a href="tel:3497500613" class="btn btn-primary btn-large">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                        </svg>
                                        Chiama Ora: 349 750 0613
                                    </a>
                                    <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary btn-large">
                                        <svg viewBox="0 0 32 32" fill="currentColor" width="24" height="24">
                                            <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                                        </svg>
                                        WhatsApp Immediato
                                    </a>
                                </div>
                                
                                <p class="cta-note">Disponibili dal Lunedì al Sabato, 8:00-20:00. Rispondiamo anche nei weekend per emergenze. <strong>Preventivi sempre gratuiti e senza impegno.</strong></p>
                                
                                <div class="cta-additional-info">
                                    <p>Per informazioni dettagliate sui nostri metodi di lavoro e per consultare i case study dei nostri interventi più significativi nel territorio etneo, <a href="https://sgomberocatania.it" target="_blank" rel="noopener" class="cta-link">visita il nostro sito specializzato sgomberocatania.it</a> dove troverai approfondimenti tecnici e testimonianze complete dei nostri clienti catanesi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }
    }

    loadServicePage(slug) {
        const services = {
            'sgombero': {
                title: 'Sgombero Gratuito in Cambio di Merce Riutilizzabile a Catania',
                description: 'Servizio rivoluzionario di sgombero completamente gratuito nel territorio etneo quando la merce ha valore di riutilizzo',
                content: `
                    <div class="service-content-extended">
                        <div class="service-hero">
                            <div class="service-image">
                                <img src="https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" alt="Sgombero Gratuito Catania - STR Sgomberi" loading="lazy">
                            </div>
                            <div class="service-intro">
                                <h3>Il Servizio che Ha Rivoluzionato gli Sgomberi a Catania</h3>
                                <p class="service-lead">Dal 2015, <strong>STR Sgomberi</strong> ha introdotto nel territorio etneo un concetto completamente nuovo: <strong>sgombero gratuito in cambio di merce riutilizzabile</strong>. Non è marketing, è il nostro modello di business sostenibile che ha già conquistato oltre 2500 famiglie catanesi.</p>
                                
                                <div class="service-guarantee-box">
                                    <h4>🎯 La Nostra Garanzia Unica a Catania</h4>
                                    <p>Se la merce presente nel tuo immobile ha un valore di riutilizzo che copre i costi dell'operazione, <strong>il servizio è completamente gratuito</strong>. Altrimenti, ti forniamo un preventivo trasparente e conveniente. In ogni caso, la valutazione è sempre gratuita e senza impegno.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="service-detailed-content">
                            <div class="content-section">
                                <h3>Come Funziona il Nostro Servizio Innovativo a Catania</h3>
                                <p>Il nostro approccio rivoluzionario si basa su una valutazione professionale della merce presente nell'immobile catanese. Ogni oggetto viene analizzato per il suo potenziale di riutilizzo nel mercato locale, permettendoci di offrire un servizio che è spesso completamente gratuito per il cliente.</p>
                                
                                <div class="process-detailed">
                                    <div class="process-step-detailed">
                                        <div class="step-header">
                                            <span class="step-number-large">1</span>
                                            <h4>Contatto Iniziale e Prenotazione</h4>
                                        </div>
                                        <div class="step-content-detailed">
                                            <p><strong>Chiamaci al 349 750 0613</strong> o contattaci via WhatsApp. Il nostro team di esperti catanesi ti farà alcune domande preliminari per comprendere la tipologia e la quantità di merce da sgomberare.</p>
                                            <ul>
                                                <li>Descrizione dell'immobile (appartamento, casa, ufficio, cantina)</li>
                                                <li>Tipologia di oggetti presenti (mobili, elettrodomestici, libri, abbigliamento)</li>
                                                <li>Condizioni generali della merce</li>
                                                <li>Urgenza dell'intervento nel territorio etneo</li>
                                            </ul>
                                            <p><strong>Fissiamo un appuntamento per il sopralluogo gratuito entro 24 ore</strong> in qualsiasi zona di Catania e provincia.</p>
                                        </div>
                                    </div>
                                    
                                    <div class="process-step-detailed">
                                        <div class="step-header">
                                            <span class="step-number-large">2</span>
                                            <h4>Sopralluogo e Valutazione Professionale</h4>
                                        </div>
                                        <div class="step-content-detailed">
                                            <p>I nostri <strong>esperti valutatori</strong> si recano presso il tuo immobile a Catania per una valutazione dettagliata e professionale. Questo servizio è sempre gratuito e senza impegno.</p>
                                            <div class="evaluation-details">
                                                <h5>Cosa Valutiamo:</h5>
                                                <div class="evaluation-grid">
                                                    <div class="eval-category">
                                                        <h6>Mobili e Arredamento</h6>
                                                        <ul>
                                                            <li>Condizioni strutturali</li>
                                                            <li>Stile e epoca</li>
                                                            <li>Materiali di costruzione</li>
                                                            <li>Valore di mercato catanese</li>
                                                        </ul>
                                                    </div>
                                                    <div class="eval-category">
                                                        <h6>Elettrodomestici</h6>
                                                        <ul>
                                                            <li>Funzionalità e efficienza</li>
                                                            <li>Età e modello</li>
                                                            <li>Classe energetica</li>
                                                            <li>Richiesta nel mercato locale</li>
                                                        </ul>
                                                    </div>
                                                    <div class="eval-category">
                                                        <h6>Oggetti di Valore</h6>
                                                        <ul>
                                                            <li>Antiquariato e collezionismo</li>
                                                            <li>Opere d'arte</li>
                                                            <li>Gioielli e orologi</li>
                                                            <li>Libri rari e collezioni</li>
                                                        </ul>
                                                    </div>
                                                    <div class="eval-category">
                                                        <h6>Altri Materiali</h6>
                                                        <ul>
                                                            <li>Abbigliamento di marca</li>
                                                            <li>Strumenti musicali</li>
                                                            <li>Attrezzature sportive</li>
                                                            <li>Materiali da costruzione</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>La valutazione tiene conto del <strong>mercato locale catanese</strong>, delle tendenze del riutilizzo e delle partnership che abbiamo sviluppato nel territorio etneo.</p>
                                        </div>
                                    </div>
                                    
                                    <div class="process-step-detailed">
                                        <div class="step-header">
                                            <span class="step-number-large">3</span>
                                            <h4>Proposta Personalizzata e Trasparente</h4>
                                        </div>
                                        <div class="step-content-detailed">
                                            <p>Sulla base della valutazione, ti presentiamo una <strong>proposta chiara e trasparente</strong>:</p>
                                            <div class="proposal-options">
                                                <div class="option-card green">
                                                    <h5>🎉 Servizio Completamente Gratuito</h5>
                                                    <p>Se il valore della merce riutilizzabile copre i costi dell'operazione, lo sgombero è <strong>completamente gratuito</strong>. Questo accade nel 75% dei casi a Catania!</p>
                                                </div>
                                                <div class="option-card blue">
                                                    <h5>💰 Servizio a Costo Ridotto</h5>
                                                    <p>Se la merce ha valore parziale, ti offriamo uno <strong>sconto significativo</strong> sul costo del servizio, rendendo l'operazione molto conveniente.</p>
                                                </div>
                                                <div class="option-card orange">
                                                    <h5>📋 Preventivo Standard</h5>
                                                    <p>Se la merce non ha valore di riutilizzo, ti forniamo un <strong>preventivo competitivo e trasparente</strong> per il servizio di sgombero tradizionale.</p>
                                                </div>
                                            </div>
                                            <p><strong>In tutti i casi, non ci sono costi nascosti</strong> e hai sempre la libertà di accettare o rifiutare la proposta senza alcun impegno.</p>
                                        </div>
                                    </div>
                                    
                                    <div class="process-step-detailed">
                                        <div class="step-header">
                                            <span class="step-number-large">4</span>
                                            <h4>Esecuzione Professionale dello Sgombero</h4>
                                        </div>
                                        <div class="step-content-detailed">
                                            <p>Una volta accettata la proposta, procediamo con lo <strong>sgombero professionale</strong> utilizzando attrezzature specifiche e personale qualificato per il territorio catanese.</p>
                                            <div class="execution-details">
                                                <h5>Il Nostro Metodo di Lavoro:</h5>
                                                <ul>
                                                    <li><strong>Preparazione del Sito:</strong> Protezione di pavimenti, pareti e aree comuni dell'immobile catanese</li>
                                                    <li><strong>Smontaggio Professionale:</strong> Smontaggio sicuro di mobili e strutture con attrezzature specifiche</li>
                                                    <li><strong>Movimentazione Sicura:</strong> Trasporto degli oggetti con tecniche professionali per evitare danni</li>
                                                    <li><strong>Separazione Materiali:</strong> Categorizzazione immediata per riutilizzo, donazione o riciclo</li>
                                                    <li><strong>Pulizia Finale:</strong> Pulizia completa dell'ambiente, lasciandolo pronto per il nuovo utilizzo</li>
                                                </ul>
                                            </div>
                                            <p>Il nostro team lavora con <strong>rispetto per l'ambiente circostante</strong> e per i vicini, minimizzando rumori e disagi nel territorio etneo.</p>
                                        </div>
                                    </div>
                                    
                                    <div class="process-step-detailed">
                                        <div class="step-header">
                                            <span class="step-number-large">5</span>
                                            <h4>Gestione Sostenibile dei Materiali</h4>
                                        </div>
                                        <div class="step-content-detailed">
                                            <p>La fase finale del nostro servizio riguarda la <strong>gestione responsabile</strong> di tutti i materiali sgomberati, seguendo i principi dell'economia circolare.</p>
                                            <div class="materials-management">
                                                <div class="management-path">
                                                    <h6>♻️ Riutilizzo Diretto</h6>
                                                    <p>Oggetti in buone condizioni vengono destinati al mercato dell'usato catanese o a famiglie che ne hanno bisogno.</p>
                                                </div>
                                                <div class="management-path">
                                                    <h6>🤝 Donazioni Benefiche</h6>
                                                    <p>Collaboriamo con associazioni benefiche locali per donare oggetti utili a famiglie in difficoltà nel territorio etneo.</p>
                                                </div>
                                                <div class="management-path">
                                                    <h6>🔧 Riparazione e Restauro</h6>
                                                    <p>Oggetti danneggiati ma recuperabili vengono affidati a artigiani catanesi per il restauro.</p>
                                                </div>
                                                <div class="management-path">
                                                    <h6>♻️ Riciclo Materiali</h6>
                                                    <p>Materiali non riutilizzabili vengono conferiti ai centri di riciclo autorizzati della provincia di Catania.</p>
                                                </div>
                                            </div>
                                            <p><strong>Solo il 15% dei materiali</strong> finisce effettivamente in discarica, dimostrando l'efficacia del nostro approccio sostenibile.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-section">
                                <h3>Tipologie di Immobili e Situazioni che Gestiamo a Catania</h3>
                                <p>La nostra esperienza novennale nel territorio etneo ci ha permesso di sviluppare competenze specifiche per ogni tipologia di immobile e situazione. Ecco le principali categorie di interventi che realizziamo:</p>
                                
                                <div class="property-types">
                                    <div class="property-type">
                                        <h4>🏠 Appartamenti Residenziali</h4>
                                        <p>Sgombero completo di appartamenti nel centro di Catania e periferia, dalle monolocali alle grandi abitazioni familiari.</p>
                                        <ul>
                                            <li>Appartamenti in eredità</li>
                                            <li>Immobili da ristrutturare</li>
                                            <li>Cambi di residenza</li>
                                            <li>Separazioni e divorzi</li>
                                        </ul>
                                        <p class="success-rate">Tasso di successo servizio gratuito: <strong>80%</strong></p>
                                    </div>
                                    
                                    <div class="property-type">
                                        <h4>🏢 Uffici e Studi Professionali</h4>
                                        <p>Sgombero di uffici, studi medici, studi legali e attività commerciali nel territorio catanese.</p>
                                        <ul>
                                            <li>Chiusura attività</li>
                                            <li>Trasferimenti di sede</li>
                                            <li>Rinnovo arredamento</li>
                                            <li>Liquidazioni aziendali</li>
                                        </ul>
                                        <p class="success-rate">Tasso di successo servizio gratuito: <strong>70%</strong></p>
                                    </div>
                                    
                                    <div class="property-type">
                                        <h4>🏪 Negozi e Locali Commerciali</h4>
                                        <p>Specializzati nello sgombero di negozi, ristoranti, bar e altre attività commerciali a Catania.</p>
                                        <ul>
                                            <li>Cessazione attività</li>
                                            <li>Cambio gestione</li>
                                            <li>Restyling locali</li>
                                            <li>Fallimenti aziendali</li>
                                        </ul>
                                        <p class="success-rate">Tasso di successo servizio gratuito: <strong>65%</strong></p>
                                    </div>
                                    
                                    <div class="property-type">
                                        <h4>🏠 Cantine e Soffitte</h4>
                                        <p>Sgombero di cantine, soffitte, garage e spazi di deposito nelle zone etnee e nel centro di Catania.</p>
                                        <ul>
                                            <li>Pulizia spazi inutilizzati</li>
                                            <li>Recupero spazi abitabili</li>
                                            <li>Sgombero accumuli</li>
                                            <li>Preparazione vendita immobile</li>
                                        </ul>
                                        <p class="success-rate">Tasso di successo servizio gratuito: <strong>85%</strong></p>
                                    </div>
                                    
                                    <div class="property-type">
                                        <h4>🏭 Capannoni e Magazzini</h4>
                                        <p>Sgombero di grandi spazi industriali e magazzini nelle zone produttive di Catania.</p>
                                        <ul>
                                            <li>Dismissione attività industriali</li>
                                            <li>Sgombero magazzini</li>
                                            <li>Riorganizzazione spazi</li>
                                            <li>Bonifica aree produttive</li>
                                        </ul>
                                        <p class="success-rate">Tasso di successo servizio gratuito: <strong>60%</strong></p>
                                    </div>
                                    
                                    <div class="property-type">
                                        <h4>🏡 Ville e Case Indipendenti</h4>
                                        <p>Sgombero di ville, case indipendenti e proprietà di grandi dimensioni nel territorio etneo.</p>
                                        <ul>
                                            <li>Eredità immobiliari</li>
                                            <li>Vendite immobiliari</li>
                                            <li>Ristrutturazioni complete</li>
                                            <li>Cambio destinazione d'uso</li>
                                        </ul>
                                        <p class="success-rate">Tasso di successo servizio gratuito: <strong>90%</strong></p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-section">
                                <h3>Perché Scegliere STR Sgomberi per il Tuo Sgombero a Catania</h3>
                                <p>In un mercato saturo di aziende di sgomberi, STR Sgomberi si distingue per caratteristiche uniche che ci hanno reso leader nel territorio etneo:</p>
                                
                                <div class="competitive-advantages">
                                    <div class="advantage">
                                        <h4>🎯 Unici nel Servizio Gratuito Reale</h4>
                                        <p>Siamo gli unici a Catania a offrire un servizio di sgombero veramente gratuito basato sul valore della merce. Non è un trucco pubblicitario: è il nostro modello di business sostenibile che funziona da 9 anni.</p>
                                    </div>
                                    
                                    <div class="advantage">
                                        <h4>🏔️ Specializzazione Territoriale Etna</h4>
                                        <p>Conosciamo ogni strada, ogni sfida logistica, ogni normativa del territorio catanese. La nostra specializzazione nelle zone etnee ci permette di operare dove altri non riescono.</p>
                                    </div>
                                    
                                    <div class="advantage">
                                        <h4>♻️ Approccio 100% Eco-Sostenibile</h4>
                                        <p>Il nostro modello di economia circolare non è solo marketing: salviamo realmente l'85% dei materiali dalla discarica, contribuendo concretamente alla salvaguardia dell'ambiente siciliano.</p>
                                    </div>
                                    
                                    <div class="advantage">
                                        <h4>⚡ Rapidità di Intervento</h4>
                                        <p>Sopralluogo gratuito entro 24 ore in qualsiasi zona di Catania. Possibilità di intervento anche in giornata per situazioni urgenti nel territorio etneo.</p>
                                    </div>
                                    
                                    <div class="advantage">
                                        <h4>🛡️ Garanzie Complete</h4>
                                        <p>Assicurazione completa, personale qualificato, attrezzature professionali. Ogni intervento è coperto da garanzie che proteggono te e la tua proprietà catanese.</p>
                                    </div>
                                    
                                    <div class="advantage">
                                        <h4>💰 Trasparenza Totale</h4>
                                        <p>Nessun costo nascosto, preventivi chiari e dettagliati. Quello che ti diciamo è quello che paghi, senza sorprese dell'ultimo minuto.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-section">
                                <h3>Testimonianze Reali di Clienti Catanesi</h3>
                                <p>Le parole dei nostri clienti sono la migliore testimonianza della qualità del nostro servizio nel territorio etneo:</p>
                                
                                <div class="testimonials">
                                    <div class="testimonial">
                                        <div class="testimonial-content">
                                            <p>"Non credevo fosse possibile: sgombero completamente gratuito di tutto l'appartamento di mia nonna nel centro di Catania. I ragazzi di STR sono stati professionali, veloci e hanno trovato valore in oggetti che io consideravo da buttare. Servizio eccezionale!"</p>
                                        </div>
                                        <div class="testimonial-author">
                                            <strong>Maria R.</strong> - Catania Centro
                                            <span class="testimonial-date">Gennaio 2024</span>
                                        </div>
                                    </div>
                                    
                                    <div class="testimonial">
                                        <div class="testimonial-content">
                                            <p>"Dovevo sgomberare il mio ufficio in Via Etnea per trasferimento. STR Sgomberi ha valutato l'arredamento e mi ha fatto lo sgombero gratis, risparmiandomi oltre 1500 euro. Inoltre hanno donato parte del materiale a una scuola catanese. Fantastici!"</p>
                                        </div>
                                        <div class="testimonial-author">
                                            <strong>Giuseppe L.</strong> - Professionista Catanese
                                            <span class="testimonial-date">Dicembre 2023</span>
                                        </div>
                                    </div>
                                    
                                    <div class="testimonial">
                                        <div class="testimonial-content">
                                            <p>"Casa ereditata a Zafferana Etnea piena di mobili antichi. STR ha riconosciuto il valore di alcuni pezzi e ha fatto tutto gratis. Hanno anche aiutato una famiglia bisognosa con i mobili ancora buoni. Servizio umano oltre che professionale."</p>
                                        </div>
                                        <div class="testimonial-author">
                                            <strong>Antonio M.</strong> - Zafferana Etnea
                                            <span class="testimonial-date">Novembre 2023</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <p class="testimonials-note">Per leggere altre testimonianze complete e vedere foto dei nostri interventi, <a href="https://sgomberocatania.it/testimonianze-clienti-catania" target="_blank" rel="noopener">visita la sezione dedicata del nostro sito specializzato</a> dove troverai case study dettagliati e video-testimonianze dei nostri clienti catanesi.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            'trasporto': {
                title: 'Trasporti Professionali a Catania e Provincia',
                description: 'Servizi di trasporto sicuri, affidabili e specializzati per ogni esigenza nel territorio etneo',
                content: `
                    <div class="service-content-extended">
                        <div class="service-hero">
                            <div class="service-image">
                                <img src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" alt="Servizi di Trasporto Professionali Catania" loading="lazy">
                            </div>
                            <div class="service-intro">
                                <h3>Trasporti Professionali nel Territorio Etneo</h3>
                                <p class="service-lead">Con 9 anni di esperienza nel territorio catanese, <strong>STR Sgomberi</strong> offre servizi di trasporto completi e specializzati per privati e aziende. La nostra conoscenza approfondita del territorio etneo ci permette di garantire trasporti sicuri, puntuali e convenienti in ogni zona della provincia di Catania.</p>
                                
                                <div class="service-guarantee-box">
                                    <h4>🚛 La Nostra Garanzia di Trasporto</h4>
                                    <p>Flotta di veicoli attrezzati, personale qualificato, assicurazione completa e conoscenza territoriale unica per trasporti sicuri e affidabili in tutto il territorio etneo.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="service-detailed-content">
                            <div class="content-section">
                                <h3>I Nostri Servizi di Trasporto Specializzati a Catania</h3>
                                <p>Offriamo una gamma completa di servizi di trasporto, ognuno ottimizzato per le specifiche esigenze del territorio catanese e delle sue caratteristiche uniche.</p>
                                
                                <div class="transport-services">
                                    <div class="transport-service">
                                        <h4>🏠 Trasporto Mobili e Arredamento</h4>
                                        <p>Specializzati nel trasporto sicuro di mobili, divani, armadi, cucine e ogni tipo di arredamento nel territorio etneo.</p>
                                        <div class="service-details">
                                            <h5>Cosa Include:</h5>
                                            <ul>
                                                <li>Smontaggio e rimontaggio mobili</li>
                                                <li>Imballaggio professionale con materiali di qualità</li>
                                                <li>Protezione di pavimenti e pareti</li>
                                                <li>Trasporto con furgoni attrezzati</li>
                                                <li>Posizionamento nella destinazione finale</li>
                                            </ul>
                                            <h5>Specializzazioni:</h5>
                                            <ul>
                                                <li>Mobili antichi e di valore</li>
                                                <li>Cucine componibili</li>
                                                <li>Armadi a muro e cabine</li>
                                                <li>Divani e poltrone di grandi dimensioni</li>
                                            </ul>
                                        </div>
                                        <p class="service-note">Perfetto per traslochi parziali, acquisti di mobili nuovi, o trasferimenti temporanei nel territorio catanese.</p>
                                    </div>
                                    
                                    <div class="transport-service">
                                        <h4>⚡ Elettrodomestici e Grandi Volumi</h4>
                                        <p>Trasporto specializzato di elettrodomestici, lavatrici, frigoriferi, condizionatori e oggetti di grandi dimensioni.</p>
                                        <div class="service-details">
                                            <h5>Attrezzature Specifiche:</h5>
                                            <ul>
                                                <li>Carrelli per elettrodomestici</li>
                                                <li>Cinghie di sicurezza professionali</li>
                                                <li>Protezioni antiurto</li>
                                                <li>Sistemi di sollevamento</li>
                                            </ul>
                                            <h5>Servizi Aggiuntivi:</h5>
                                            <ul>
                                                <li>Disconnessione e riconnessione</li>
                                                <li>Trasporto in posizione verticale</li>
                                                <li>Installazione base (su richiesta)</li>
                                                <li>Smaltimento vecchio elettrodomestico</li>
                                            </ul>
                                        </div>
                                        <p class="service-note">Ideale per acquisti online, sostituzioni, riparazioni o trasferimenti di elettrodomestici a Catania.</p>
                                    </div>
                                    
                                    <div class="transport-service">
                                        <h4>🏢 Trasporti Commerciali e Aziendali</h4>
                                        <p>Servizi dedicati a negozi, uffici, ristoranti e aziende del territorio catanese con soluzioni personalizzate.</p>
                                        <div class="service-details">
                                            <h5>Settori Serviti:</h5>
                                            <ul>
                                                <li>Negozi e centri commerciali</li>
                                                <li>Ristoranti e bar</li>
                                                <li>Uffici e studi professionali</li>
                                                <li>Laboratori e officine</li>
                                                <li>Strutture sanitarie</li>
                                            </ul>
                                            <h5>Servizi Specializzati:</h5>
                                            <ul>
                                                <li>Trasporti fuori orario lavorativo</li>
                                                <li>Gestione merci delicate</li>
                                                <li>Trasporti urgenti in giornata</li>
                                                <li>Servizi di facchinaggio</li>
                                            </ul>
                                        </div>
                                        <p class="service-note">Orari flessibili per non interferire con l'attività commerciale nel territorio etneo.</p>
                                    </div>
                                    
                                    <div class="transport-service">
                                        <h4>🎨 Trasporti Delicati e di Valore</h4>
                                        <p>Specializzati nel trasporto di opere d'arte, antiquariato, strumenti musicali e oggetti di particolare valore.</p>
                                        <div class="service-details">
                                            <h5>Oggetti Trasportati:</h5>
                                            <ul>
                                                <li>Quadri e opere d'arte</li>
                                                <li>Mobili antichi e d'epoca</li>
                                                <li>Strumenti musicali (pianoforti, organi)</li>
                                                <li>Collezioni e oggetti da collezione</li>
                                                <li>Apparecchiature scientifiche</li>
                                            </ul>
                                            <h5>Precauzioni Speciali:</h5>
                                            <ul>
                                                <li>Imballaggio con materiali specifici</li>
                                                <li>Controllo temperatura e umidità</li>
                                                <li>Assicurazione valore dichiarato</li>
                                                <li>Personale specializzato</li>
                                            </ul>
                                        </div>
                                        <p class="service-note">Collaboriamo con gallerie d'arte, antiquari e collezionisti catanesi per trasporti di massima sicurezza.</p>
                                    </div>
                                    
                                    <div class="transport-service">
                                        <h4>🚨 Trasporti Urgenti ed Express</h4>
                                        <p>Servizio rapido per esigenze immediate nel territorio catanese, anche in giornata e nei weekend.</p>
                                        <div class="service-details">
                                            <h5>Quando Serve:</h5>
                                            <ul>
                                                <li>Emergenze domestiche</li>
                                                <li>Scadenze improvvise</li>
                                                <li>Sostituzioni urgenti</li>
                                                <li>Traslochi dell'ultimo minuto</li>
                                            </ul>
                                            <h5>I Nostri Tempi:</h5>
                                            <ul>
                                                <li>Intervento in giornata (se disponibile)</li>
                                                <li>Servizio weekend e festivi</li>
                                                <li>Orari serali (fino alle 22:00)</li>
                                                <li>Preventivo immediato via WhatsApp</li>
                                            </ul>
                                        </div>
                                        <p class="service-note">Tariffa maggiorata per servizi urgenti, ma sempre competitiva nel mercato catanese.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-section">
                                <h3>La Nostra Flotta e Attrezzature Professionali</h3>
                                <p>Investiamo costantemente in veicoli moderni e attrezzature professionali per garantire trasporti sicuri e efficienti nel territorio etneo.</p>
                                
                                <div class="fleet-details">
                                    <div class="vehicle-type">
                                        <h4>🚐 Furgoni Piccoli (fino a 3.5 ton)</h4>
                                        <div class="vehicle-specs">
                                            <div class="spec-item">
                                                <strong>Dimensioni:</strong> Lunghezza 3.5m, Altezza 2.1m
                                            </div>
                                            <div class="spec-item">
                                                <strong>Ideale per:</strong> Appartamenti, piccoli uffici, trasporti urbani Catania
                                            </div>
                                            <div class="spec-item">
                                                <strong>Vantaggi:</strong> Accesso ZTL, parcheggio facile, manovrabilità centro storico
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="vehicle-type">
                                        <h4>🚛 Furgoni Medi (fino a 7.5 ton)</h4>
                                        <div class="vehicle-specs">
                                            <div class="spec-item">
                                                <strong>Dimensioni:</strong> Lunghezza 6m, Altezza 2.5m
                                            </div>
                                            <div class="spec-item">
                                                <strong>Ideale per:</strong> Case grandi, uffici, negozi, trasporti provincia
                                            </div>
                                            <div class="spec-item">
                                                <strong>Vantaggi:</strong> Capacità elevata, sponda idraulica, attrezzature complete
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="vehicle-type">
                                        <h4>🚚 Camion Grandi (oltre 7.5 ton)</h4>
                                        <div class="vehicle-specs">
                                            <div class="spec-item">
                                                <strong>Dimensioni:</strong> Lunghezza 8m+, Altezza 3m
                                            </div>
                                            <div class="spec-item">
                                                <strong>Ideale per:</strong> Ville, capannoni, trasporti industriali, grandi volumi
                                            </div>
                                            <div class="spec-item">
                                                <strong>Vantaggi:</strong> Massima capacità, gru incorporata, trasporti pesanti
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="equipment-list">
                                    <h4>🛠️ Attrezzature Professionali Disponibili</h4>
                                    <div class="equipment-grid">
                                        <div class="equipment-category">
                                            <h5>Movimentazione</h5>
                                            <ul>
                                                <li>Carrelli per elettrodomestici</li>
                                                <li>Transpallet manuali</li>
                                                <li>Cinghie di sicurezza</li>
                                                <li>Ganci e fissaggi</li>
                                            </ul>
                                        </div>
                                        <div class="equipment-category">
                                            <h5>Protezione</h5>
                                            <ul>
                                                <li>Coperte da trasloco</li>
                                                <li>Pluriball e cartone</li>
                                                <li>Protezioni angolari</li>
                                                <li>Film plastico</li>
                                            </ul>
                                        </div>
                                        <div class="equipment-category">
                                            <h5>Sollevamento</h5>
                                            <ul>
                                                <li>Montacarichi portatili</li>
                                                <li>Paranchi manuali</li>
                                                <li>Scale telescopiche</li>
                                                <li>Piattaforme elevatrici</li>
                                            </ul>
                                        </div>
                                        <div class="equipment-category">
                                            <h5>Smontaggio</h5>
                                            <ul>
                                                <li>Utensili professionali</li>
                                                <li>Avvitatori elettrici</li>
                                                <li>Chiavi specifiche</li>
                                                <li>Kit smontaggio mobili</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-section">
                                <h3>Copertura Territoriale e Specializzazioni Locali</h3>
                                <p>La nostra esperienza novennale nel territorio etneo ci ha permesso di sviluppare competenze specifiche per ogni zona della provincia di Catania.</p>
                                
                                <div class="territorial-coverage">
                                    <div class="coverage-zone">
                                        <h4>🏛️ Centro Storico Catania</h4>
                                        <p><strong>Sfide:</strong> Strade strette, ZTL, vincoli architettonici, parcheggi limitati</p>
                                        <p><strong>Le Nostre Soluzioni:</strong></p>
                                        <ul>
                                            <li>Furgoni compatti per accesso ZTL</li>
                                            <li>Permessi speciali per carico/scarico</li>
                                            <li>Attrezzature per spazi ristretti</li>
                                            <li>Orari ottimizzati per traffico</li>
                                        </ul>
                                        <p><strong>Esperienza:</strong> Oltre 800 trasporti nel centro storico catanese</p>
                                    </div>
                                    
                                    <div class="coverage-zone">
                                        <h4>🌋 Zone Etnee</h4>
                                        <p><strong>Sfide:</strong> Strade in pendenza, terreni vulcanici, accessi difficili, condizioni meteo</p>
                                        <p><strong>Le Nostre Soluzioni:</strong></p>
                                        <ul>
                                            <li>Veicoli con trazione integrale</li>
                                            <li>Catene da neve sempre disponibili</li>
                                            <li>Conoscenza percorsi alternativi</li>
                                            <li>Attrezzature per terreni difficili</li>
                                        </ul>
                                        <p><strong>Esperienza:</strong> Specialisti riconosciuti per trasporti in quota fino a 1500m</p>
                                    </div>
                                    
                                    <div class="coverage-zone">
                                        <h4>🏖️ Costa Ionica</h4>
                                        <p><strong>Sfide:</strong> Traffico estivo, strutture turistiche, accessi stagionali</p>
                                        <p><strong>Le Nostre Soluzioni:</strong></p>
                                        <ul>
                                            <li>Pianificazione orari anti-traffico</li>
                                            <li>Servizi fuori stagione turistica</li>
                                            <li>Collaborazioni con strutture ricettive</li>
                                            <li>Trasporti notturni (su richiesta)</li>
                                        </ul>
                                        <p><strong>Esperienza:</strong> Partner di fiducia di hotel e B&B della costa catanese</p>
                                    </div>
                                    
                                    <div class="coverage-zone">
                                        <h4>🏭 Zone Industriali</h4>
                                        <p><strong>Sfide:</strong> Grandi volumi, orari specifici, normative di sicurezza</p>
                                        <p><strong>Le Nostre Soluzioni:</strong></p>
                                        <ul>
                                            <li>Veicoli di grande portata</li>
                                            <li>Personale formato sicurezza</li>
                                            <li>Orari flessibili aziendali</li>
                                            <li>Gestione documentazione trasporto</li>
                                        </ul>
                                        <p><strong>Esperienza:</strong> Contratti continuativi con aziende del territorio</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-section">
                                <h3>Processo di Prenotazione e Gestione del Trasporto</h3>
                                <p>Abbiamo ottimizzato ogni fase del processo per garantire un servizio efficiente e senza stress per i nostri clienti catanesi.</p>
                                
                                <div class="booking-process">
                                    <div class="process-step-detailed">
                                        <div class="step-header">
                                            <span class="step-number-large">1</span>
                                            <h4>Richiesta e Preventivo</h4>
                                        </div>
                                        <div class="step-content-detailed">
                                            <p>Contattaci per descrivere le tue esigenze di trasporto nel territorio catanese.</p>
                
                                            <h5>Informazioni Necessarie:</h5>
                                            <ul>
                                                <li>Cosa trasportare (tipologia, dimensioni, peso)</li>
                                                <li>Indirizzo di ritiro e consegna</li>
                                                <li>Data e orario preferiti</li>
                                                <li>Servizi aggiuntivi richiesti</li>
                                                <li>Eventuali difficoltà di accesso</li>
                                            </ul>
                                            <p><strong>Preventivo gratuito entro 2 ore</strong> via WhatsApp o telefono.</p>
                                        </div>
                                    </div>
                                    
                                    <div class="process-step-detailed">
                                        <div class="step-header">
                                            <span class="step-number-large">2</span>
                                            <h4>Pianificazione e Conferma</h4>
                                        </div>
                                        <div class="step-content-detailed">
                                            <p>Una volta accettato il preventivo, pianifichiamo nei dettagli il trasporto.</p>
                                            <h5>Cosa Organizziamo:</h5>
                                            <ul>
                                                <li>Scelta del veicolo più adatto</li>
                                                <li>Assegnazione team specializzato</li>
                                                <li>Pianificazione percorso ottimale</li>
                                                <li>Preparazione attrezzature necessarie</li>
                                                <li>Gestione permessi (se necessari)</li>
                                            </ul>
                                            <p><strong>Conferma definitiva 24h prima</strong> con dettagli operativi.</p>
                                        </div>
                                    </div>
                                    
                                    <div class="process-step-detailed">
                                        <div class="step-header">
                                            <span class="step-number-large">3</span>
                                            <h4>Esecuzione del Trasporto</h4>
                                        </div>
                                        <div class="step-content-detailed">
                                            <p>Il giorno del trasporto, il nostro team esegue il servizio con professionalità.</p>
                                            <h5>Fasi Operative:</h5>
                                            <ul>
                                                <li>Arrivo puntuale all'orario concordato</li>
                                                <li>Verifica oggetti da trasportare</li>
                                                <li>Imballaggio e protezione professionale</li>
                                                <li>Caricamento sicuro sul veicolo</li>
                                                <li>Trasporto con guida prudente</li>
                                                <li>Scaricamento e posizionamento finale</li>
                                            </ul>
                                            <p><strong>Aggiornamenti in tempo reale</strong> durante il trasporto.</p>
                                        </div>
                                    </div>
                                    
                                    <div class="process-step-detailed">
                                        <div class="step-header">
                                            <span class="step-number-large">4</span>
                                            <h4>Completamento e Follow-up</h4>
                                        </div>
                                        <div class="step-content-detailed">
                                            <p>Completiamo il servizio con attenzione ai dettagli e verifica soddisfazione.</p>
                                            <h5>Attività Finali:</h5>
                                            <ul>
                                                <li>Verifica integrità oggetti trasportati</li>
                                                <li>Posizionamento secondo indicazioni</li>
                                                <li>Pulizia area di lavoro</li>
                                                <li>Documentazione fotografica (se richiesta)</li>
                                                <li>Fatturazione e pagamento</li>
                                            </ul>
                                            <p><strong>Follow-up entro 48h</strong> per verificare soddisfazione.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        const service = services[slug];
        if (!service) return;

        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <section class="hero hero-etna">
                    <div class="hero-content">
                        <h1>${service.title}</h1>
                        <p>${service.description}</p>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
                        ${service.content}
                        
                        <div class="service-cta-enhanced">
                            <h3>Richiedi un Preventivo Personalizzato per ${service.title}</h3>
                            <p>Contattaci per una valutazione gratuita delle tue esigenze specifiche nel territorio etneo. I nostri esperti sono pronti a fornirti la soluzione più conveniente e professionale.</p>
                            <div class="cta-buttons">
                                <a href="tel:3497500613" class="btn btn-primary btn-large">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    Chiama Ora: 349 750 0613
                                </a>
                                <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary btn-large">
                                    <svg viewBox="0 0 32 32" fill="currentColor" width="24" height="24">
                                        <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                                    </svg>
                                    WhatsApp Immediato
                                </a>
                            </div>
                            <p class="service-additional-info">Per approfondimenti tecnici e case study dettagliati sui nostri servizi, <a href="https://sgomberocatania.it/servizi-dettagliati" target="_blank" rel="noopener">consulta la sezione specializzata del nostro sito partner</a> dove troverai informazioni complete sui nostri metodi di lavoro e le testimonianze dei clienti catanesi.</p>
                        </div>
                    </div>
                </section>
            `;
        }
    }

    loadDoveOperiamoPage() {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <section class="hero hero-etna">
                    <div class="hero-content">
                        <h1>Dove Operiamo: Copertura Completa del Territorio Etneo</h1>
                        <p>Serviamo Catania e tutti i 58 comuni della provincia con i nostri servizi professionali di sgombero gratuito e trasporti specializzati</p>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
                        <div class="section-header">
                            <h2>La Nostra Rete Capillare nel Territorio della Provincia di Catania</h2>
                            <p>Con 9 anni di esperienza esclusiva nel territorio etneo, STR Sgomberi ha sviluppato una copertura territoriale completa che ci permette di raggiungere ogni angolo della provincia di Catania, dalle pendici dell'Etna fino alla costa ionica, garantendo lo stesso livello di professionalità e qualità ovunque tu sia.</p>
                        </div>
                        
                        <div class="territorial-overview">
                            <div class="overview-stats">
                                <div class="stat-card">
                                    <div class="stat-number">58</div>
                                    <div class="stat-label">Comuni Serviti</div>
                                    <div class="stat-description">Intera provincia di Catania</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-number">3552</div>
                                    <div class="stat-label">Km² Coperti</div>
                                    <div class="stat-description">Tutto il territorio etneo</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-number">1.1M</div>
                                    <div class="stat-label">Abitanti Serviti</div>
                                    <div class="stat-description">Popolazione provinciale</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-number">2500+</div>
                                    <div class="stat-label">Interventi Realizzati</div>
                                    <div class="stat-description">Dal 2015 ad oggi</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="zones-detailed">
                            <h3>Zone di Specializzazione nel Territorio Etneo</h3>
                            <p>La nostra esperienza novennale ci ha permesso di sviluppare competenze specifiche per ogni area della provincia, affrontando le sfide uniche di ciascun territorio con soluzioni personalizzate.</p>
                            
                            <div class="zone-cards-detailed">
                                <div class="zone-card-detailed">
                                    <div class="zone-header">
                                        <h4>🏛️ Centro Storico di Catania</h4>
                                        <span class="zone-badge">Zona Specializzata</span>
                                    </div>
                                    <div class="zone-content">
                                        <p><strong>Caratteristiche del Territorio:</strong> Il centro storico di Catania presenta sfide uniche per i servizi di sgombero e trasporto. Strade strette di origine medievale, vincoli architettonici per i beni UNESCO, zone a traffico limitato e parcheggi riservati richiedono competenze specifiche che abbiamo sviluppato in anni di esperienza.</p>
                                        
                                        <div class="zone-challenges">
                                            <h5>Sfide Specifiche Affrontate:</h5>
                                            <ul>
                                                <li><strong>Accesso ZTL:</strong> Gestione permessi speciali per carico/scarico in zone a traffico limitato</li>
                                                <li><strong>Strade Storiche:</strong> Navigazione in vicoli stretti e strade acciottolate del centro</li>
                                                <li><strong>Vincoli UNESCO:</strong> Rispetto normative per edifici storici e beni culturali</li>
                                                <li><strong>Parcheggi Limitati:</strong> Ottimizzazione tempi per ridurre impatto su traffico urbano</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="zone-solutions">
                                            <h5>Le Nostre Soluzioni Specializzate:</h5>
                                            <ul>
                                                <li>Flotta di furgoni compatti per accesso in spazi ristretti</li>
                                                <li>Permessi comunali per operazioni in centro storico</li>
                                                <li>Attrezzature specifiche per scale strette e cortili interni</li>
                                                <li>Orari ottimizzati per evitare ore di punta</li>
                                                <li>Personale formato su normative beni culturali</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="zone-areas">
                                            <h5>Aree Principali Servite:</h5>
                                            <div class="areas-list">
                                                <span>Via Etnea</span>
                                                <span>Quartiere Duomo</span>
                                                <span>La Pescheria</span>
                                                <span>San Berillo</span>
                                                <span>Civita</span>
                                                <span>Castello Ursino</span>
                                                <span>Teatro Massimo</span>
                                                <span>Università</span>
                                            </div>
                                        </div>
                                        
                                        <p class="zone-experience"><strong>La Nostra Esperienza:</strong> Oltre 800 interventi completati nel centro storico catanese, con specializzazione in palazzi d'epoca, appartamenti storici e locali commerciali tradizionali. <a href="https://sgomberocatania.it/centro-storico-catania" target="_blank" rel="noopener">Scopri i nostri case study nel centro storico</a> per vedere come affrontiamo le sfide più complesse.</p>
                                    </div>
                                </div>
                                
                                <div class="zone-card-detailed">
                                    <div class="zone-header">
                                        <h4>🌋 Zone Etnee e Alta Quota</h4>
                                        <span class="zone-badge">Specializzazione Unica</span>
                                    </div>
                                    <div class="zone-content">
                                        <p><strong>Caratteristiche del Territorio:</strong> Le zone etnee rappresentano una delle nostre specializzazioni più distintive. Operare alle pendici del vulcano attivo più alto d'Europa richiede competenze tecniche specifiche, attrezzature adeguate e una conoscenza approfondita del territorio che poche aziende possiedono.</p>
                                        
                                        <div class="zone-challenges">
                                            <h5>Sfide Uniche del Territorio Etneo:</h5>
                                            <ul>
                                                <li><strong>Terreni Vulcanici:</strong> Strade su lava solidificata con aderenza variabile</li>
                                                <li><strong>Pendenze Estreme:</strong> Strade con inclinazioni fino al 20% in alcune zone</li>
                                                <li><strong>Condizioni Meteo:</strong> Neve, ghiaccio e nebbia frequenti sopra i 1000m</li>
                                                <li><strong>Accessi Difficili:</strong> Proprietà isolate e strade private non asfaltate</li>
                                                <li><strong>Altitudine:</strong> Interventi fino a 1500m di quota</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="zone-solutions">
                                            <h5>Le Nostre Soluzioni Tecniche:</h5>
                                            <ul>
                                                <li>Veicoli 4x4 e trazione integrale per terreni difficili</li>
                                                <li>Catene da neve e attrezzature invernali sempre disponibili</li>
                                                <li>GPS specializzati con mappe dettagliate sentieri etnei</li>
                                                <li>Attrezzature per movimentazione su terreni instabili</li>
                                                <li>Personale formato per lavoro in quota e condizioni estreme</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="zone-areas">
                                            <h5>Comuni Etnei Serviti:</h5>
                                            <div class="areas-list">
                                                <span>Nicolosi</span>
                                                <span>Zafferana Etnea</span>
                                                <span>Pedara</span>
                                                <span>Trecastagni</span>
                                                <span>Viagrande</span>
                                                <span>Sant'Alfio</span>
                                                <span>Milo</span>
                                                <span>Ragalna</span>
                                                <span>Belpasso</span>
                                                <span>Adrano</span>
                                                <span>Bronte</span>
                                                <span>Randazzo</span>
                                            </div>
                                        </div>
                                        
                                        <p class="zone-experience"><strong>Record di Quota:</strong> Abbiamo realizzato sgomberi fino a 1500m di altitudine, inclusi rifugi montani e case isolate nelle zone più remote dell'Etna. La nostra esperienza nelle zone etnee è riconosciuta come la più completa della provincia. <a href="https://sgomberocatania.it/specializzazione-zone-etnee" target="_blank" rel="noopener">Leggi i nostri interventi più spettacolari in quota</a>.</p>
                                    </div>
                                </div>
                                
                                <div class="zone-card-detailed">
                                    <div class="zone-header">
                                        <h4>🏖️ Costa Ionica e Località Balneari</h4>
                                        <span class="zone-badge">Servizi Stagionali</span>
                                    </div>
                                    <div class="zone-content">
                                        <p><strong>Caratteristiche del Territorio:</strong> La costa ionica catanese presenta dinamiche uniche legate al turismo stagionale, alle strutture ricettive e alle abitazioni estive. La nostra esperienza ci permette di gestire efficacemente le esigenze specifiche di questa zona strategica.</p>
                                        
                                        <div class="zone-challenges">
                                            <h5>Specificità della Costa Ionica:</h5>
                                            <ul>
                                                <li><strong>Stagionalità Turistica:</strong> Picchi di richieste in estate e periodi morti in inverno</li>
                                                <li><strong>Traffico Estivo:</strong> Congestione stradale nei mesi di alta stagione</li>
                                                <li><strong>Strutture Ricettive:</strong> Hotel, B&B e case vacanze con esigenze specifiche</li>
                                                <li><strong>Abitazioni Stagionali:</strong> Case utilizzate solo in estate che richiedono sgomberi periodici</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="zone-solutions">
                                            <h5>I Nostri Servizi Specializzati:</h5>
                                            <ul>
                                                <li>Pianificazione interventi fuori stagione turistica</li>
                                                <li>Servizi notturni per strutture ricettive (su richiesta)</li>
                                                <li>Contratti stagionali con hotel e villaggi turistici</li>
                                                <li>Sgomberi rapidi per cambio stagione case vacanze</li>
                                                <li>Collaborazioni con agenzie immobiliari costiere</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="zone-areas">
                                            <h5>Località Costiere Servite:</h5>
                                            <div class="areas-list">
                                                <span>Aci Castello</span>
                                                <span>Aci Trezza</span>
                                                <span>Acireale</span>
                                                <span>Santa Maria la Scala</span>
                                                <span>Torre Archirafi</span>
                                                <span>Riposto</span>
                                                <span>Giarre</span>
                                                <span>Mascali</span>
                                                <span>Fiumefreddo</span>
                                                <span>Calatabiano</span>
                                            </div>
                                        </div>
                                        
                                        <p class="zone-experience"><strong>Partnership Consolidate:</strong> Collaboriamo stabilmente con oltre 50 strutture ricettive della costa ionica per servizi di sgombero, rinnovo arredamenti e gestione depositi stagionali. <a href="https://sgomberocatania.it/servizi-costa-ionica" target="_blank" rel="noopener">Scopri le nostre partnership turistiche</a>.</p>
                                    </div>
                                </div>
                                
                                <div class="zone-card-detailed">
                                    <div class="zone-header">
                                        <h4>🏭 Zone Industriali e Produttive</h4>
                                        <span class="zone-badge">Servizi B2B</span>
                                    </div>
                                    <div class="zone-content">
                                        <p><strong>Caratteristiche del Territorio:</strong> Le aree industriali della provincia di Catania richiedono competenze specifiche per la gestione di grandi volumi, materiali industriali e normative di sicurezza particolari. La nostra esperienza nel settore B2B ci distingue nel mercato.</p>
                                        
                                        <div class="zone-challenges">
                                            <h5>Complessità del Settore Industriale:</h5>
                                            <ul>
                                                <li><strong>Grandi Volumi:</strong> Sgomberi di capannoni e magazzini di migliaia di m²</li>
                                                <li><strong>Materiali Speciali:</strong> Macchinari industriali, attrezzature tecniche, materiali pericolosi</li>
                                                <li><strong>Normative Sicurezza:</strong> Rispetto protocolli aziendali e normative HACCP</li>
                                                <li><strong>Orari Produttivi:</strong> Interventi senza interferire con attività aziendali</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="zone-solutions">
                                            <h5>Le Nostre Competenze Industriali:</h5>
                                            <ul>
                                                <li>Flotta di camion di grande portata e gru specializzate</li>
                                                <li>Personale formato su normative sicurezza industriale</li>
                                                <li>Gestione documentazione trasporto materiali speciali</li>
                                                <li>Orari flessibili per non interferire con produzione</li>
                                                <li>Valutazione e recupero macchinari industriali</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="zone-areas">
                                            <h5>Aree Industriali Servite:</h5>
                                            <div class="areas-list">
                                                <span>Zona Industriale Catania</span>
                                                <span>ASI Catania</span>
                                                <span>Zona Industriale Paternò</span>
                                                <span>Area Produttiva Adrano</span>
                                                <span>Zona Artigianale Belpasso</span>
                                                <span>Distretto Industriale Giarre</span>
                                                <span>Area Commerciale Misterbianco</span>
                                                <span>Zona Produttiva Caltagirone</span>
                                            </div>
                                        </div>
                                        
                                        <p class="zone-experience"><strong>Clienti Aziendali:</strong> Gestiamo contratti continuativi con oltre 30 aziende del territorio per servizi di sgombero, trasporti industriali e gestione dismissioni. <a href="https://sgomberocatania.it/servizi-industriali-catania" target="_blank" rel="noopener">Consulta i nostri case study aziendali</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="comuni-complete-section">
                            <h3>Elenco Completo dei 58 Comuni della Provincia di Catania Serviti</h3>
                            <p>La nostra copertura territoriale include tutti i comuni della provincia di Catania, garantendo lo stesso livello di professionalità e qualità del servizio ovunque tu sia nel territorio etneo. Ecco l'elenco completo organizzato per aree geografiche:</p>
                            
                            <div class="comuni-by-area">
                                <div class="area-section">
                                    <h4>🏛️ Catania e Hinterland Immediato</h4>
                                    <div class="comuni-grid-detailed">
                                        <div class="comune-card">
                                            <h5>Catania</h5>
                                            <p>Capoluogo - 315.000 abitanti</p>
                                            <span class="interventions">850+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Gravina di Catania</h5>
                                            <p>Hinterland - 27.000 abitanti</p>
                                            <span class="interventions">120+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>San Giovanni la Punta</h5>
                                            <p>Residenziale - 25.000 abitanti</p>
                                            <span class="interventions">95+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Tremestieri Etneo</h5>
                                            <p>Etneo - 22.000 abitanti</p>
                                            <span class="interventions">80+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Sant'Agata li Battiati</h5>
                                            <p>Residenziale - 9.000 abitanti</p>
                                            <span class="interventions">45+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>San Gregorio di Catania</h5>
                                            <p>Hinterland - 11.000 abitanti</p>
                                            <span class="interventions">55+ interventi</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="area-section">
                                    <h4>🌋 Versante Sud-Est Etna</h4>
                                    <div class="comuni-grid-detailed">
                                        <div class="comune-card">
                                            <h5>Acireale</h5>
                                            <p>Città barocca - 52.000 abitanti</p>
                                            <span class="interventions">180+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Giarre</h5>
                                            <p>Centro ionico - 27.000 abitanti</p>
                                            <span class="interventions">110+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Zafferana Etnea</h5>
                                            <p>Perla dell'Etna - 9.000 abitanti</p>
                                            <span class="interventions">65+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Nicolosi</h5>
                                            <p>Porta dell'Etna - 7.000 abitanti</p>
                                            <span class="interventions">50+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Pedara</h5>
                                            <p>Centro etneo - 12.000 abitanti</p>
                                            <span class="interventions">70+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Trecastagni</h5>
                                            <p>Tradizione etnea - 10.000 abitanti</p>
                                            <span class="interventions">60+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Viagrande</h5>
                                            <p>Zona collinare - 8.000 abitanti</p>
                                            <span class="interventions">45+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Aci Castello</h5>
                                            <p>Costa normanna - 18.000 abitanti</p>
                                            <span class="interventions">85+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Aci Catena</h5>
                                            <p>Centro agricolo - 28.000 abitanti</p>
                                            <span class="interventions">90+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Aci Sant'Antonio</h5>
                                            <p>Zona residenziale - 17.000 abitanti</p>
                                            <span class="interventions">75+ interventi</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="area-section">
                                    <h4>🏔️ Versante Ovest e Nord Etna</h4>
                                    <div class="comuni-grid-detailed">
                                        <div class="comune-card">
                                            <h5>Paternò</h5>
                                            <p>Centro storico - 47.000 abitanti</p>
                                            <span class="interventions">160+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Adrano</h5>
                                            <p>Versante ovest - 36.000 abitanti</p>
                                            <span class="interventions">130+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Belpasso</h5>
                                            <p>Centro etneo - 27.000 abitanti</p>
                                            <span class="interventions">100+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Mascalucia</h5>
                                            <p>Residenziale etneo - 31.000 abitanti</p>
                                            <span class="interventions">115+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Camporotondo Etneo</h5>
                                            <p>Piccolo centro - 4.500 abitanti</p>
                                            <span class="interventions">25+ interventi</span>
                                        </div>
                                        <div class="comune-card">
                                            <h5>Ragalna</h5>
                                            <p>Alta quota - 4.000 abitanti</p>
                                            <span class="interventions">20+ interventi</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="area-section">
                                    <h4>🌊 Altri Comuni della Provincia</h4>
                                    <p>Serviamo anche tutti gli altri comuni della provincia di Catania, inclusi:</p>
                                    <div class="altri-comuni-list">
                                        <div class="comuni-column">
                                            <ul>
                                                <li>Caltagirone</li>
                                                <li>Misterbianco</li>
                                                <li>Motta Sant'Anastasia</li>
                                                <li>Randazzo</li>
                                                <li>Riposto</li>
                                                <li>Scordia</li>
                                                <li>Valverde</li>
                                                <li>Bronte</li>
                                                <li>Calatabiano</li>
                                                <li>Castel di Judica</li>
                                                <li>Fiumefreddo di Sicilia</li>
                                                <li>Linguaglossa</li>
                                                <li>Maletto</li>
                                                <li>Mascali</li>
                                                <li>Militello in Val di Catania</li>
                                                <li>Milo</li>
                                            </ul>
                                        </div>
                                        <div class="comuni-column">
                                            <ul>
                                                <li>Mineo</li>
                                                <li>Mirabella Imbaccari</li>
                                                <li>Pietraperzia</li>
                                                <li>Raddusa</li>
                                                <li>Ramacca</li>
                                                <li>San Cono</li>
                                                <li>San Michele di Ganzaria</li>
                                                <li>San Pietro Clarenza</li>
                                                <li>Sant'Alfio</li>
                                                <li>Santa Maria di Licodia</li>
                                                <li>Santa Venerina</li>
                                                <li>Vizzini</li>
                                                <li>Grammichele</li>
                                                <li>Licodia Eubea</li>
                                                <li>Mazzarrone</li>
                                                <li>E tutti gli altri...</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="coverage-guarantees">
                            <h3>Le Nostre Garanzie di Servizio in Tutto il Territorio Etneo</h3>
                            <div class="guarantees-grid">
                                <div class="guarantee-item">
                                    <h4>⏱️ Tempi di Intervento Garantiti</h4>
                                    <ul>
                                        <li><strong>Catania città:</strong> Sopralluogo entro 24h</li>
                                        <li><strong>Hinterland (15km):</strong> Sopralluogo entro 48h</li>
                                        <li><strong>Provincia (fino 50km):</strong> Sopralluogo entro 72h</li>
                                        <li><strong>Zone remote:</strong> Sopralluogo programmato</li>
                                    </ul>
                                </div>
                                
                                <div class="guarantee-item">
                                    <h4>💰 Costi di Trasporto Trasparenti</h4>
                                    <ul>
                                        <li><strong>Catania e prima cintura:</strong> Nessun costo aggiuntivo</li>
                                        <li><strong>Provincia (fino 30km):</strong> Supplemento minimo</li>
                                        <li><strong>Zone remote/difficili:</strong> Preventivo personalizzato</li>
                                        <li><strong>Sempre comunicato in anticipo</strong></li>
                                    </ul>
                                </div>
                                
                                <div class="guarantee-item">
                                    <h4>🛡️ Stessi Standard di Qualità</h4>
                                    <ul>
                                        <li>Personale qualificato ovunque</li>
                                        <li>Attrezzature professionali sempre</li>
                                        <li>Assicurazione completa inclusa</li>
                                        <li>Stesso livello di servizio garantito</li>
                                    </ul>
                                </div>
                                
                                <div class="guarantee-item">
                                    <h4>📞 Supporto Locale Dedicato</h4>
                                    <ul>
                                        <li>Referente locale per ogni zona</li>
                                        <li>Conoscenza specifica del territorio</li>
                                        <li>Rete di partner locali consolidata</li>
                                        <li>Assistenza in dialetto siciliano</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="territory-cta">
                            <h3>Il Tuo Comune Non È Nell'Elenco? Contattaci Comunque!</h3>
                            <p>Anche se il tuo comune non è specificatamente menzionato, la nostra copertura territoriale è in continua espansione. Contattaci per verificare la disponibilità del servizio nella tua zona e per ricevere un preventivo personalizzato.</p>
                            <p>Per informazioni dettagliate sui nostri servizi in ogni comune della provincia e per consultare case study specifici per la tua zona, <a href="https://sgomberocatania.it/copertura-territoriale-dettagliata" target="_blank" rel="noopener">visita la sezione territoriale del nostro sito specializzato</a> dove troverai mappe interattive e testimonianze locali.</p>
                        </div>
                    </div>
                </section>
            `;
        }
    }

    loadFaqPage() {
        const faqs = [
            {
                question: "Come funziona esattamente il servizio di sgombero gratuito a Catania?",
                answer: "Il nostro servizio di sgombero gratuito si basa su un modello di business sostenibile: valutiamo la merce presente nell'immobile catanese e se il valore degli oggetti riutilizzabili copre i costi dell'operazione, offriamo il servizio completamente gratuito. Questo accade nel 75% dei casi! La valutazione è sempre gratuita e senza impegno. Se la merce non ha sufficiente valore, ti forniamo comunque un preventivo trasparente e competitivo."
            },
            {
                question: "In quanto tempo potete intervenire a Catania e provincia?",
                answer: "I nostri tempi di intervento variano in base alla zona: per Catania città garantiamo sopralluogo gratuito entro 24 ore, per l'hinterland entro 48 ore, per la provincia entro 72 ore. Per situazioni urgenti nel territorio etneo, offriamo anche servizi express in giornata con un piccolo sovrapprezzo. La nostra conoscenza del territorio ci permette di essere sempre puntuali."
            },
            {
                question: "Cosa succede agli oggetti sgomberati a Catania? Sono davvero eco-sostenibili?",
                answer: "Assolutamente sì! Il nostro approccio eco-sostenibile non è marketing: l'85% degli oggetti sgomberati viene effettivamente salvato dalla discarica. Gli oggetti in buone condizioni vengono riutilizzati o venduti nel mercato dell'usato catanese, quelli utilizzabili vengono donati a organizzazioni benefiche locali, i materiali riciclabili vengono portati ai centri autorizzati del territorio etneo. Solo il 15% finisce in discarica."
            },
            {
                question: "Fornite preventivi gratuiti a Catania? Ci sono costi nascosti?",
                answer: "Sì, tutti i nostri preventivi sono completamente gratuiti e senza impegno. Effettuiamo sopralluoghi per valutare accuratamente le vostre esigenze nel territorio catanese. Non ci sono mai costi nascosti: quello che ti diciamo è quello che paghi. La trasparenza è uno dei nostri valori fondamentali e tutti i costi aggiuntivi (se presenti) vengono sempre comunicati in anticipo."
            },
            {
                question: "Siete assicurati per gli interventi a Catania? Cosa copre l'assicurazione?",
                answer: "Sì, tutti i nostri interventi a Catania sono coperti da assicurazione completa che include: danni a terzi, danni alla proprietà durante le operazioni, copertura per la merce trasportata, responsabilità civile del personale. Questo garantisce la massima tranquillità ai nostri clienti catanesi. Possiamo fornire copia della polizza su richiesta."
            },
            {
                question: "Lavorate anche nei weekend e festivi a Catania?",
                answer: "Sì, offriamo servizi anche nei weekend e nei giorni festivi per adattarci alle esigenze dei clienti catanesi. I nostri orari sono flessibili: dal lunedì al sabato 8:00-20:00, domenica e festivi su appuntamento con piccolo sovrapprezzo. Per emergenze nel territorio etneo siamo disponibili anche in orari serali fino alle 22:00."
            },
            {
                question: "Quali tipi di immobili sgomberate a Catania? Ci sono limitazioni?",
                answer: "Sgomberiamo ogni tipo di immobile nel territorio catanese: appartamenti (da monolocali a ville), uffici e studi professionali, negozi e locali commerciali, cantine e soffitte, garage e magazzini, capannoni industriali, case vacanze. Non ci sono limitazioni di dimensione. La nostra esperienza nelle zone etnee ci permette di operare anche in località difficili da raggiungere."
            },
            {
                question: "Come fate a determinare se il servizio può essere gratuito?",
                answer: "I nostri esperti valutatori analizzano ogni oggetto presente considerando: condizioni e funzionalità, valore di mercato nel territorio catanese, richiesta nel mercato dell'usato locale, costi di recupero e trasporto. Utilizziamo un sistema di valutazione professionale sviluppato in 9 anni di esperienza. La valutazione tiene conto delle specificità del mercato etneo e delle nostre partnership locali."
            },
            {
                question: "Operate anche nelle zone difficili dell'Etna? Ci sono sovraprezzi?",
                answer: "Sì, siamo specializzati negli interventi nelle zone etnee, anche quelle più difficili da raggiungere. Abbiamo attrezzature specifiche per terreni vulcanici, veicoli 4x4, catene da neve sempre disponibili. Per zone particolarmente remote o difficili potrebbe esserci un piccolo sovrapprezzo per trasporto, sempre comunicato in anticipo. Abbiamo realizzato sgomberi fino a 1500m di quota!"
            },
            {
                question: "Quanto tempo richiede un sgombero completo a Catania?",
                answer: "I tempi dipendono dalle dimensioni e complessità: monolocale 2-4 ore, appartamento medio 4-8 ore, casa grande/villa 1-2 giorni, uffici/negozi 4-12 ore, capannoni 1-3 giorni. La nostra esperienza nel territorio catanese ci permette di ottimizzare i tempi. Per interventi urgenti possiamo aumentare il personale per ridurre i tempi."
            },
            {
                question: "Cosa devo fare per preparare l'immobile allo sgombero?",
                answer: "Molto poco! Devi solo: separare oggetti di valore personale che vuoi tenere, disconnettere elettrodomestici dalla corrente/gas, svuotare frigoriferi e congelatori, liberare i percorsi di accesso. Tutto il resto lo facciamo noi: smontaggio mobili, imballaggio, protezione ambienti, pulizia finale. Ti forniamo una checklist dettagliata dopo il sopralluogo."
            },
            {
                question: "Collaborate con agenzie immobiliari e amministratori di condominio?",
                answer: "Sì, abbiamo partnership consolidate con oltre 30 agenzie immobiliari catanesi e numerosi amministratori di condominio. Offriamo condizioni speciali per clienti business, fatturazione dedicata, tempi di intervento prioritari. Molte agenzie ci raccomandano ai loro clienti per la preparazione di immobili alla vendita o locazione."
            }
        ];

        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <section class="hero hero-etna">
                    <div class="hero-content">
                        <h1>Domande Frequenti sui Nostri Servizi a Catania</h1>
                        <p>Trova le risposte alle domande più comuni sui nostri servizi di sgombero gratuito e trasporti nel territorio etneo</p>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
                        <div class="faq-intro">
                            <h2>Tutto Quello Che Devi Sapere sui Nostri Servizi a Catania</h2>
                            <p>In 9 anni di attività nel territorio etneo abbiamo risposto a migliaia di domande dai nostri clienti catanesi. Qui trovi le risposte alle domande più frequenti sui nostri servizi di sgombero gratuito, trasporti e la nostra copertura territoriale nella provincia di Catania.</p>
                        </div>
                        
                        <div class="faq-list">
                            ${faqs.map((faq, index) => `
                                <div class="faq-item">
                                    <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
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
                        
                        <div class="faq-additional-info">
                            <h3>Altre Domande Specifiche sul Territorio Etneo</h3>
                            <p>Per domande più specifiche sui nostri servizi nelle diverse zone della provincia di Catania, <a href="https://sgomberocatania.it/faq-dettagliate-territorio" target="_blank" rel="noopener">consulta la sezione FAQ approfondita del nostro sito specializzato</a> dove troverai risposte specifiche per ogni comune del territorio etneo e situazioni particolari.</p>
                        </div>
                        
                        <div class="faq-contact">
                            <h2>Non hai trovato la risposta che cercavi?</h2>
                            <p>Il nostro team di esperti è sempre disponibile per rispondere a qualsiasi domanda specifica sui nostri servizi a Catania e provincia. Contattaci direttamente per chiarimenti personalizzati.</p>
                            <div class="cta-buttons">
                                <a href="tel:3497500613" class="btn btn-primary">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    Chiama Ora: 349 750 0613
                                </a>
                                <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary">
                                    <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
                                        <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                                    </svg>
                                    WhatsApp Immediato
                                </a>
                            </div>
                            <p class="contact-note">Siamo disponibili dal Lunedì al Sabato 8:00-20:00, domenica su appuntamento. Rispondiamo anche via WhatsApp per domande rapide!</p>
                        </div>
                    </div>
                </section>
            `;
        }
    }

    loadContatti() {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <section class="hero hero-etna">
                    <div class="hero-content">
                        <h1>Contatti STR Sgomberi Catania</h1>
                        <p>Mettiti in contatto con noi per preventivi gratuiti e informazioni sui nostri servizi di sgombero e trasporti nel territorio etneo</p>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
                        <div class="contact-intro">
                            <h2>Contatta i Professionali dello Sgombero a Catania</h2>
                            <p>Con 9 anni di esperienza nel territorio etneo, siamo sempre pronti ad aiutarti con i nostri servizi di sgombero gratuito e trasporti professionali. Contattaci per ricevere una consulenza personalizzata e un preventivo gratuito per le tue esigenze a Catania e provincia.</p>
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
                                        <h3>Telefono Diretto</h3>
                                        <p><a href="tel:3497500613">349 750 0613</a></p>
                                        <small>Disponibili dal Lunedì al Sabato, 8:00-20:00<br>Domenica su appuntamento per emergenze</small>
                                        <div class="contact-benefits">
                                            <span>✓ Risposta immediata</span>
                                            <span>✓ Preventivo telefonico</span>
                                            <span>✓ Consulenza gratuita</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <svg viewBox="0 0 32 32" fill="currentColor" width="24" height="24">
                                            <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>WhatsApp Business</h3>
                                        <p><a href="https://wa.me/393497500613" target="_blank">Chatta con noi</a></p>
                                        <small>Risposta rapida e preventivi immediati<br>Disponibile 7 giorni su 7</small>
                                        <div class="contact-benefits">
                                            <span>✓ Invio foto per valutazione</span>
                                            <span>✓ Preventivi via chat</span>
                                            <span>✓ Supporto continuo</span>
                                        </div>
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
                                        <h3>Area di Servizio Completa</h3>
                                        <p>Catania e Provincia - Territorio Etneo</p>
                                        <small>Serviamo tutti i 58 comuni della provincia di Catania<br>Dalle pendici dell'Etna alla costa ionica</small>
                                        <div class="contact-benefits">
                                            <span>✓ Copertura totale provincia</span>
                                            <span>✓ Specialisti zone etnee</span>
                                            <span>✓ Interventi anche in quota</span>
                                        </div>
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
                                        <h3>Orari di Lavoro Flessibili</h3>
                                        <p>Lunedì - Sabato: 8:00 - 20:00</p>
                                        <small>Domenica e festivi su appuntamento<br>Servizi urgenti anche in orario serale</small>
                                        <div class="contact-benefits">
                                            <span>✓ Orari flessibili</span>
                                            <span>✓ Weekend disponibili</span>
                                            <span>✓ Emergenze 24/7</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                            <polyline points="14,2 14,8 20,8"/>
                                            <line x1="16" y1="13" x2="8" y2="13"/>
                                            <line x1="16" y1="17" x2="8" y2="17"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>Preventivi e Sopralluoghi</h3>
                                        <p>Sempre Gratuiti e Senza Impegno</p>
                                        <small>Valutazione professionale in tutta la provincia<br>Sopralluogo entro 24-72h in base alla zona</small>
                                        <div class="contact-benefits">
                                            <span>✓ Valutazione gratuita</span>
                                            <span>✓ Preventivi trasparenti</span>
                                            <span>✓ Nessun costo nascosto</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="contact-form">
                                <h3>Richiedi un Preventivo Personalizzato</h3>
                                <p>Compila il form per ricevere un preventivo dettagliato per i tuoi servizi di sgombero o trasporto a Catania. Ti ricontatteremo entro 2 ore!</p>
                                
                                <form class="contact-form-detailed">
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label class="form-label">Nome e Cognome *</label>
                                            <input type="text" class="form-input" required placeholder="Il tuo nome completo">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label class="form-label">Telefono *</label>
                                            <input type="tel" class="form-input" required placeholder="349 750 0613">
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-input" placeholder="tua@email.it">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label class="form-label">Comune *</label>
                                            <select class="form-select" required>
                                                <option value="">Seleziona il tuo comune</option>
                                                <option value="catania">Catania</option>
                                                <option value="acireale">Acireale</option>
                                                <option value="giarre">Giarre</option>
                                                <option value="paterno">Paternò</option>
                                                <option value="adrano">Adrano</option>
                                                <option value="belpasso">Belpasso</option>
                                                <option value="mascalucia">Mascalucia</option>
                                                <option value="altro">Altro comune provincia CT</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">Servizio Richiesto *</label>
                                        <select class="form-select" required>
                                            <option value="">Seleziona il servizio</option>
                                            <option value="sgombero-gratuito">Sgombero Gratuito (valutazione merce)</option>
                                            <option value="sgombero-standard">Sgombero Standard</option>
                                            <option value="trasporto">Trasporti</option>
                                            <option value="valutazione">Solo Valutazione</option>
                                            <option value="altro">Altro servizio</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">Tipo di Immobile</label>
                                        <select class="form-select">
                                            <option value="">Seleziona tipologia</option>
                                            <option value="appartamento">Appartamento</option>
                                            <option value="casa-indipendente">Casa Indipendente</option>
                                            <option value="villa">Villa</option>
                                            <option value="ufficio">Ufficio</option>
                                            <option value="negozio">Negozio</option>
                                            <option value="cantina">Cantina/Soffitta</option>
                                            <option value="garage">Garage</option>
                                            <option value="magazzino">Magazzino</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">Descrizione Dettagliata</label>
                                        <textarea class="form-input form-textarea" placeholder="Descrivi cosa devi sgomberare, le dimensioni dell'immobile, eventuali difficoltà di accesso, urgenza dell'intervento, ecc. Più dettagli fornisci, più preciso sarà il nostro preventivo."></textarea>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">Quando Serve l'Intervento?</label>
                                        <select class="form-select">
                                            <option value="">Seleziona tempistica</option>
                                            <option value="urgente">Urgente (entro 48h)</option>
                                            <option value="settimana">Entro una settimana</option>
                                            <option value="mese">Entro un mese</option>
                                            <option value="flessibile">Tempi flessibili</option>
                                        </select>
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M22 2l-7 20-4-9-9-4z"/>
                                            <path d="M22 2l-10 10"/>
                                        </svg>
                                        Invia Richiesta Preventivo
                                    </button>
                                    
                                    <p class="form-note">Riceverai una risposta entro 2 ore negli orari lavorativi. Per richieste urgenti, chiamaci direttamente al 349 750 0613.</p>
                                </form>
                            </div>
                        </div>
                        
                        <div class="contact-additional-info">
                            <h3>Informazioni Aggiuntive sui Nostri Servizi</h3>
                            <div class="additional-info-grid">
                                <div class="info-card">
                                    <h4>🚀 Tempi di Risposta Garantiti</h4>
                                    <ul>
                                        <li>Telefono: Risposta immediata in orari lavorativi</li>
                                        <li>WhatsApp: Risposta entro 30 minuti</li>
                                        <li>Form contatti: Risposta entro 2 ore</li>
                                        <li>Sopralluogo: Entro 24-72h in base alla zona</li>
                                    </ul>
                                </div>
                                
                                <div class="info-card">
                                    <h4>💰 Politica Prezzi Trasparente</h4>
                                    <ul>
                                        <li>Preventivi sempre gratuiti e senza impegno</li>
                                        <li>Nessun costo nascosto o sorpresa</li>
                                        <li>Possibilità di servizio completamente gratuito</li>
                                        <li>Pagamento solo a lavoro completato</li>
                                    </ul>
                                </div>
                                
                                <div class="info-card">
                                    <h4>🛡️ Garanzie e Sicurezza</h4>
                                    <ul>
                                        <li>Assicurazione completa inclusa</li>
                                        <li>Personale qualificato e formato</li>
                                        <li>Attrezzature professionali certificate</li>
                                        <li>Rispetto normative sicurezza</li>
                                    </ul>
                                </div>
                                
                                <div class="info-card">
                                    <h4>🌱 Impegno Ambientale</h4>
                                    <ul>
                                        <li>85% materiali salvati dalla discarica</li>
                                        <li>Collaborazioni con enti benefici locali</li>
                                        <li>Riciclo responsabile nel territorio etneo</li>
                                        <li>Economia circolare applicata</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="contact-cta-final">
                            <h3>Pronto a Iniziare? Contattaci Subito!</h3>
                            <p>Non aspettare oltre: il nostro team di esperti è pronto ad aiutarti con il miglior servizio di sgombero e trasporti a Catania. Contattaci ora per una consulenza gratuita!</p>
                            
                            <div class="final-cta-buttons">
                                <a href="tel:3497500613" class="btn btn-primary btn-large">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    Chiama Ora: 349 750 0613
                                </a>
                                <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary btn-large">
                                    <svg viewBox="0 0 32 32" fill="currentColor" width="24" height="24">
                                        <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                                    </svg>
                                    WhatsApp Immediato
                                </a>
                            </div>
                            
                            <p class="final-note">Per informazioni ancora più dettagliate sui nostri servizi e per consultare case study specifici del territorio catanese, <a href="https://sgomberocatania.it/contatti-dettagliati" target="_blank" rel="noopener">visita anche la sezione contatti del nostro sito specializzato</a> dove troverai moduli di contatto specifici per ogni tipo di servizio.</p>
                        </div>
                    </div>
                </section>
            `;
        }
    }
}

// Initialize the router when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new Router();
});