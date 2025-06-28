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
                <!-- Hero Section -->
                <section class="hero">
                    <div class="hero-content">
                        <h1>STR Sgomberi Catania</h1>
                        <p>Sgomberi gratuiti, trasporti e traslochi professionali a Catania e provincia</p>
                        
                        <a href="tel:3497500613" class="hero-phone">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            349 750 0613
                        </a>
                        
                        <div class="hero-actions">
                            <a href="#" class="btn btn-outline" data-page="contatti">Preventivo Gratuito</a>
                            <a href="https://wa.me/393497500613" target="_blank" class="btn btn-secondary">
                                <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
                                    <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </section>

                <!-- Services Section -->
                <section class="section section-light">
                    <div class="container">
                        <div class="section-header">
                            <h2>I Nostri Servizi</h2>
                            <p>Soluzioni complete per ogni esigenza di sgombero, trasporto e trasloco</p>
                        </div>
                        
                        <div class="cards-grid">
                            <div class="card">
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                        <polyline points="9,22 9,12 15,12 15,22"/>
                                    </svg>
                                </div>
                                <h3>Sgombero Gratuito</h3>
                                <p>Sgomberiamo gratuitamente case, uffici e cantine in cambio di merce riutilizzabile. Servizio rapido e professionale.</p>
                                <a href="#" class="card-link" data-page="servizio" data-slug="sgombero">Scopri di più →</a>
                            </div>
                            
                            <div class="card">
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14,2 14,8 20,8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                        <polyline points="10,9 9,9 8,9"/>
                                    </svg>
                                </div>
                                <h3>Trasporti</h3>
                                <p>Servizi di trasporto sicuri e affidabili per merci, mobili ed elettrodomestici. Furgoni attrezzati e personale qualificato.</p>
                                <a href="#" class="card-link" data-page="servizio" data-slug="trasporto">Scopri di più →</a>
                            </div>
                            
                            <div class="card">
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                                    </svg>
                                </div>
                                <h3>Traslochi</h3>
                                <p>Traslochi completi per abitazioni e uffici. Imballaggio professionale, trasporto sicuro e montaggio mobili.</p>
                                <a href="#" class="card-link" data-page="servizio" data-slug="trasloco">Scopri di più →</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Features Section -->
                <section class="section section-gray">
                    <div class="container">
                        <div class="section-header">
                            <h2>Perché Scegliere STR Sgomberi</h2>
                            <p>Professionalità, affidabilità e convenienza per tutti i tuoi progetti</p>
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
                                <p>Interventi programmabili anche in giornata con orari flessibili</p>
                            </div>
                            
                            <div class="feature">
                                <div class="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M9 12l2 2 4-4"/>
                                        <circle cx="12" cy="12" r="10"/>
                                    </svg>
                                </div>
                                <h3>Preventivi Gratuiti</h3>
                                <p>Valutazione gratuita e preventivi trasparenti senza sorprese</p>
                            </div>
                            
                            <div class="feature">
                                <div class="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <h3>Qualità Garantita</h3>
                                <p>Personale qualificato e attrezzature professionali per ogni intervento</p>
                            </div>
                            
                            <div class="feature">
                                <div class="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <h3>Copertura Totale</h3>
                                <p>Serviamo Catania e tutti i comuni della provincia</p>
                            </div>
                            
                            <div class="feature">
                                <div class="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                                    </svg>
                                </div>
                                <h3>Eco-Sostenibile</h3>
                                <p>Massimizziamo il riutilizzo e il riciclo per rispettare l'ambiente</p>
                            </div>
                            
                            <div class="feature">
                                <div class="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                        <circle cx="9" cy="7" r="4"/>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                    </svg>
                                </div>
                                <h3>Assistenza Clienti</h3>
                                <p>Supporto dedicato e comunicazione costante durante tutto il processo</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- CTA Section -->
                <section class="section section-light">
                    <div class="container">
                        <div class="cta-section">
                            <h2>Hai Bisogno di un Preventivo?</h2>
                            <p>Contattaci per una valutazione gratuita e scopri come possiamo aiutarti</p>
                            <div class="cta-buttons">
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
            `;
        }
    }

    loadServicePage(slug) {
        const services = {
            'sgombero': {
                title: 'Sgombero Gratuito',
                description: 'Servizio di sgombero gratuito in cambio di merce riutilizzabile',
                content: `
                    <div class="service-content">
                        <div class="service-image">
                            <img src="https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg" alt="Sgombero Gratuito">
                        </div>
                        <div class="service-text">
                            <h3>Sgombero Gratuito a Catania</h3>
                            <p>STR Sgomberi offre un servizio innovativo di sgombero completamente gratuito quando la merce presente ha un valore che copre i costi dell'operazione. Questo approccio sostenibile ci permette di offrire un servizio conveniente mentre promuoviamo il riutilizzo e il riciclo.</p>
                            
                            <h4>Come Funziona</h4>
                            <ol>
                                <li><strong>Sopralluogo Gratuito:</strong> Valutiamo la merce presente nell'immobile</li>
                                <li><strong>Preventivo Trasparente:</strong> Ti comunichiamo se il servizio può essere gratuito</li>
                                <li><strong>Sgombero Professionale:</strong> Rimuoviamo tutto con cura e professionalità</li>
                                <li><strong>Pulizia Finale:</strong> Lasciamo l'ambiente pulito e pronto</li>
                            </ol>
                            
                            <h4>Cosa Sgomberiamo</h4>
                            <ul>
                                <li>Appartamenti e case</li>
                                <li>Uffici e negozi</li>
                                <li>Cantine e soffitte</li>
                                <li>Garage e magazzini</li>
                                <li>Locali commerciali</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'trasporto': {
                title: 'Trasporti',
                description: 'Servizi di trasporto sicuri e affidabili per ogni esigenza',
                content: `
                    <div class="service-content">
                        <div class="service-image">
                            <img src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg" alt="Servizi di Trasporto">
                        </div>
                        <div class="service-text">
                            <h3>Trasporti Professionali</h3>
                            <p>Offriamo servizi di trasporto completi per privati e aziende, con furgoni attrezzati e personale qualificato per garantire la massima sicurezza della tua merce.</p>
                            
                            <h4>I Nostri Servizi di Trasporto</h4>
                            <ul>
                                <li>Trasporto mobili ed elettrodomestici</li>
                                <li>Ritiro e consegna merci</li>
                                <li>Trasporti per negozi e uffici</li>
                                <li>Servizi di facchinaggio</li>
                                <li>Trasporti urgenti in giornata</li>
                            </ul>
                            
                            <h4>Vantaggi del Nostro Servizio</h4>
                            <ul>
                                <li><strong>Sicurezza:</strong> Imballaggio professionale e fissaggio sicuro</li>
                                <li><strong>Puntualità:</strong> Rispettiamo sempre gli orari concordati</li>
                                <li><strong>Flessibilità:</strong> Orari adattabili alle tue esigenze</li>
                                <li><strong>Assicurazione:</strong> Copertura completa per la tua tranquillità</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'trasloco': {
                title: 'Traslochi',
                description: 'Traslochi completi per abitazioni e uffici',
                content: `
                    <div class="service-content">
                        <div class="service-image">
                            <img src="https://images.pexels.com/photos/7464005/pexels-photo-7464005.jpeg" alt="Servizi di Trasloco">
                        </div>
                        <div class="service-text">
                            <h3>Traslochi Completi</h3>
                            <p>Gestiamo ogni aspetto del tuo trasloco, dall'imballaggio al montaggio dei mobili nella nuova destinazione. Un servizio completo per rendere il tuo trasloco semplice e senza stress.</p>
                            
                            <h4>Servizi Inclusi</h4>
                            <ul>
                                <li>Sopralluogo e preventivo gratuito</li>
                                <li>Imballaggio professionale</li>
                                <li>Smontaggio e rimontaggio mobili</li>
                                <li>Trasporto sicuro e assicurato</li>
                                <li>Posizionamento nella nuova casa</li>
                                <li>Pulizia finale (su richiesta)</li>
                            </ul>
                            
                            <h4>Tipologie di Trasloco</h4>
                            <ul>
                                <li><strong>Traslochi Residenziali:</strong> Per case e appartamenti</li>
                                <li><strong>Traslochi Uffici:</strong> Per aziende e studi professionali</li>
                                <li><strong>Traslochi Parziali:</strong> Solo alcuni ambienti o oggetti specifici</li>
                                <li><strong>Traslochi Internazionali:</strong> Verso altre città e regioni</li>
                            </ul>
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
                <section class="hero">
                    <div class="hero-content">
                        <h1>${service.title}</h1>
                        <p>${service.description}</p>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
                        ${service.content}
                        
                        <div class="service-cta">
                            <h3>Richiedi un Preventivo Gratuito</h3>
                            <p>Contattaci per una valutazione personalizzata delle tue esigenze</p>
                            <div class="cta-buttons">
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
            `;
        }
    }

    loadDoveOperiamoPage() {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <section class="hero">
                    <div class="hero-content">
                        <h1>Dove Operiamo</h1>
                        <p>Serviamo Catania e tutti i comuni della provincia con i nostri servizi professionali</p>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
                        <div class="section-header">
                            <h2>La Nostra Area di Servizio</h2>
                            <p>STR Sgomberi opera in tutta la provincia di Catania, garantendo lo stesso livello di professionalità e qualità in ogni comune</p>
                        </div>
                        
                        <div class="cards-grid">
                            ${this.comuni.map(comune => `
                                <div class="card">
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                    </div>
                                    <h3>${comune}</h3>
                                    <p>Servizi di sgombero, trasporti e traslochi disponibili</p>
                                    <a href="#" class="card-link" data-page="comune" data-slug="${comune.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}">Scopri di più →</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
        }
    }

    loadFaqPage() {
        const faqs = [
            {
                question: "Come funziona il servizio di sgombero gratuito?",
                answer: "Valutiamo la merce presente nell'immobile e se il valore degli oggetti riutilizzabili copre i costi dell'operazione, offriamo il servizio gratuitamente. Questo ci permette di promuovere il riutilizzo e offrire un servizio conveniente."
            },
            {
                question: "In quanto tempo potete intervenire?",
                answer: "Generalmente riusciamo a programmare un intervento entro 24-48 ore dalla richiesta. Per urgenze, offriamo anche servizi in giornata con un piccolo sovrapprezzo."
            },
            {
                question: "Cosa succede agli oggetti sgomberati?",
                answer: "Gli oggetti in buone condizioni vengono riutilizzati o donati a organizzazioni benefiche. I materiali riciclabili vengono portati ai centri di raccolta appropriati. Solo ciò che non può essere recuperato viene smaltito."
            },
            {
                question: "Fornite preventivi gratuiti?",
                answer: "Sì, tutti i nostri preventivi sono completamente gratuiti e senza impegno. Effettuiamo sopralluoghi per valutare accuratamente le vostre esigenze."
            },
            {
                question: "Siete assicurati?",
                answer: "Sì, tutti i nostri interventi sono coperti da assicurazione per danni a terzi e per la merce trasportata, garantendo la massima tranquillità ai nostri clienti."
            },
            {
                question: "Lavorate anche nei weekend?",
                answer: "Sì, offriamo servizi anche nei weekend e nei giorni festivi per adattarci alle vostre esigenze, con orari flessibili concordabili."
            }
        ];

        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <section class="hero">
                    <div class="hero-content">
                        <h1>Domande Frequenti</h1>
                        <p>Trova le risposte alle domande più comuni sui nostri servizi</p>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
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
                        
                        <div class="faq-contact">
                            <h2>Non hai trovato la risposta che cercavi?</h2>
                            <p>Contattaci direttamente per qualsiasi domanda o chiarimento</p>
                            <div class="cta-buttons">
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
            `;
        }
    }

    loadContatti() {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <section class="hero">
                    <div class="hero-content">
                        <h1>Contatti</h1>
                        <p>Mettiti in contatto con noi per preventivi gratuiti e informazioni</p>
                    </div>
                </section>

                <section class="section section-light">
                    <div class="container">
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
                                        <small>Disponibili dal Lunedì al Sabato, 8:00-20:00</small>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <svg viewBox="0 0 32 32" fill="currentColor" width="24" height="24">
                                            <path d="M19.11 17.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.65-1.55-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.26.5 1.7.63.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 3a13 13 0 0 0-11.34 19.43L3 29l6.75-1.77A13 13 0 1 0 16 3zm0 23.4c-1.96 0-3.79-.57-5.33-1.55l-.38-.24-4.01 1.05 1.07-3.91-.25-.4a10.42 10.42 0 1 1 8.9 4.05z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>WhatsApp</h3>
                                        <p><a href="https://wa.me/393497500613" target="_blank">Chatta con noi</a></p>
                                        <small>Risposta rapida e preventivi immediati</small>
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
                                        <small>Serviamo tutti i comuni della provincia di Catania</small>
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
                                        <h3>Orari di Lavoro</h3>
                                        <p>Lunedì - Sabato: 8:00 - 20:00</p>
                                        <small>Disponibili anche nei weekend su appuntamento</small>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="contact-form">
                                <h3>Richiedi un Preventivo</h3>
                                <form>
                                    <div class="form-group">
                                        <label class="form-label">Nome *</label>
                                        <input type="text" class="form-input" required>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">Telefono *</label>
                                        <input type="tel" class="form-input" required>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">Servizio Richiesto</label>
                                        <select class="form-select">
                                            <option>Sgombero Gratuito</option>
                                            <option>Trasporti</option>
                                            <option>Traslochi</option>
                                            <option>Altro</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label">Messaggio</label>
                                        <textarea class="form-input form-textarea" placeholder="Descrivi le tue esigenze..."></textarea>
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                                        Invia Richiesta
                                    </button>
                                </form>
                            </div>
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