// Data
const comuniCatania = [
    { nome: 'Acireale', slug: 'acireale', descrizione: 'Servizio di sgombero professionale ad Acireale', popolazione: '52.000', distanza: '17 km da Catania' },
    { nome: 'Adrano', slug: 'adrano', descrizione: 'Sgombero gratuito e trasporti ad Adrano', popolazione: '35.000', distanza: '41 km da Catania' },
    { nome: 'Belpasso', slug: 'belpasso', descrizione: 'Servizio di sgombero appartamenti a Belpasso', popolazione: '27.000', distanza: '18 km da Catania' },
    { nome: 'Bronte', slug: 'bronte', descrizione: 'Sgombero case e cantine a Bronte', popolazione: '19.000', distanza: '65 km da Catania' },
    { nome: 'Caltagirone', slug: 'caltagirone', descrizione: 'Servizio sgombero professionale a Caltagirone', popolazione: '37.000', distanza: '70 km da Catania' },
    { nome: 'Catania', slug: 'catania', descrizione: 'Sgombero gratis in centro a Catania città', popolazione: '315.000', distanza: 'Centro città' },
    { nome: 'Giarre', slug: 'giarre', descrizione: 'Servizio di sgombero e traslochi a Giarre', popolazione: '28.000', distanza: '30 km da Catania' },
    { nome: 'Gravina di Catania', slug: 'gravina-di-catania', descrizione: 'Sgombero appartamenti Gravina di Catania', popolazione: '26.000', distanza: '12 km da Catania' },
    { nome: 'Lentini', slug: 'lentini', descrizione: 'Servizio sgombero e trasporti a Lentini', popolazione: '24.000', distanza: '44 km da Catania' },
    { nome: 'Mascalucia', slug: 'mascalucia', descrizione: 'Sgombero case e garage a Mascalucia', popolazione: '31.000', distanza: '8 km da Catania' },
    { nome: 'Misterbianco', slug: 'misterbianco', descrizione: 'Servizio professionale di sgombero a Misterbianco', popolazione: '48.000', distanza: '8 km da Catania' },
    { nome: 'Paternò', slug: 'paterno', descrizione: 'Sgombero gratuito e traslochi a Paternò', popolazione: '48.000', distanza: '28 km da Catania' },
    { nome: 'Pedara', slug: 'pedara', descrizione: 'Servizio sgombero appartamenti a Pedara', popolazione: '12.000', distanza: '15 km da Catania' },
    { nome: 'Riposto', slug: 'riposto', descrizione: 'Sgombero case e magazzini a Riposto', popolazione: '15.000', distanza: '35 km da Catania' },
    { nome: 'San Giovanni la Punta', slug: 'san-giovanni-la-punta', descrizione: 'Servizio di sgombero a San Giovanni la Punta', popolazione: '21.000', distanza: '10 km da Catania' },
    { nome: 'Sant\'Agata li Battiati', slug: 'sant-agata-li-battiati', descrizione: 'Sgombero professionale Sant\'Agata li Battiati', popolazione: '9.000', distanza: '6 km da Catania' },
    { nome: 'Trecastagni', slug: 'trecastagni', descrizione: 'Servizio sgombero e trasporti a Trecastagni', popolazione: '11.000', distanza: '18 km da Catania' },
    { nome: 'Viagrande', slug: 'viagrande', descrizione: 'Sgombero case e appartamenti a Viagrande', popolazione: '8.000', distanza: '20 km da Catania' }
];

const servizi = [
    { nome: 'Sgombero Gratuito', slug: 'sgombero', descrizione: 'Sgombero gratuito di case, appartamenti, cantine e garage in cambio di merce riutilizzabile' },
    { nome: 'Trasporti', slug: 'trasporto', descrizione: 'Servizio di trasporto professionale per mobili e oggetti voluminosi' },
    { nome: 'Traslochi', slug: 'trasloco', descrizione: 'Traslochi completi con servizio di imballaggio e montaggio mobili' }
];

const faqs = [
    {
        question: 'Il servizio di sgombero è davvero gratuito?',
        answer: 'Sì, il nostro servizio di sgombero è completamente gratuito quando recuperiamo oggetti riutilizzabili di valore (mobili, elettrodomestici funzionanti, oggetti d\'antiquariato, ecc.). Il valore di questi oggetti copre i costi del servizio.'
    },
    {
        question: 'In quali zone operate?',
        answer: 'Operiamo in tutta la provincia di Catania, inclusi tutti i comuni principali come Acireale, Paternò, Misterbianco, Gravina di Catania, Mascalucia, Belpasso, Giarre, Adrano, Bronte, Lentini e molti altri.'
    },
    {
        question: 'Quanto tempo ci vuole per uno sgombero?',
        answer: 'I tempi dipendono dalle dimensioni dello spazio e dalla quantità di oggetti. Generalmente, uno sgombero di un appartamento standard richiede 4-8 ore, mentre per case più grandi potrebbe essere necessaria un\'intera giornata.'
    },
    {
        question: 'Cosa succede agli oggetti che recuperate?',
        answer: 'Gli oggetti in buone condizioni vengono destinati al mercato dell\'usato, donati a enti benefici o rivenduti. Questo ci permette di offrire il servizio gratuitamente e contribuisce all\'economia circolare.'
    },
    {
        question: 'Devo essere presente durante lo sgombero?',
        answer: 'È preferibile la vostra presenza per indicarci cosa tenere e cosa sgomberare. Tuttavia, possiamo accordarci per lavorare anche in vostra assenza, previa visione preliminare e accordi chiari.'
    },
    {
        question: 'Sgomberate anche cantine e garage?',
        answer: 'Certamente! Sgomberiamo cantine, garage, soffitte, magazzini e qualsiasi altro tipo di locale. Ogni situazione viene valutata caso per caso.'
    },
    {
        question: 'Come posso richiedere un preventivo?',
        answer: 'Potete chiamarci al 349 007 3264 o contattarci via WhatsApp. Offriamo sopralluoghi gratuiti per valutare il lavoro e fornire un preventivo dettagliato.'
    },
    {
        question: 'Siete assicurati?',
        answer: 'Sì, siamo coperti da assicurazione per danni a terzi e responsabilità civile. Lavoriamo sempre in sicurezza e nel rispetto delle normative.'
    },
    {
        question: 'Cosa non ritirate?',
        answer: 'Non ritiriamo materiali pericolosi (amianto, vernici, sostanze chimiche), rifiuti sanitari, pneumatici e materiali da costruzione. Per questi materiali vi indirizzeremo verso i canali di smaltimento appropriati.'
    },
    {
        question: 'Offrite anche servizi di pulizia?',
        answer: 'Dopo lo sgombero, effettuiamo una pulizia di base dei locali. Per pulizie approfondite, possiamo mettervi in contatto con partner specializzati.'
    }
];

// State Management
class AppState {
    constructor() {
        this.currentPage = 'home';
        this.currentSlug = null;
        this.user = this.loadUser();
        this.theme = this.loadTheme();
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
        this.populateComuni();
        this.loadPage('home');
        this.clearCacheOnExit();
    }

    loadUser() {
        const saved = localStorage.getItem('sgombero-user');
        return saved ? JSON.parse(saved) : null;
    }

    saveUser(user) {
        this.user = user;
        if (user) {
            localStorage.setItem('sgombero-user', JSON.stringify(user));
        } else {
            localStorage.removeItem('sgombero-user');
        }
    }

    loadTheme() {
        const saved = localStorage.getItem('sgombero-theme');
        return saved ? JSON.parse(saved) : {
            mode: 'light',
            backgroundColor: '#ffffff',
            textColor: '#000000',
            buttonColor: '#007AFF',
            glassEffect: false
        };
    }

    saveTheme(theme) {
        this.theme = { ...this.theme, ...theme };
        localStorage.setItem('sgombero-theme', JSON.stringify(this.theme));
        this.applyTheme();
    }

    applyTheme() {
        const root = document.documentElement;
        
        if (this.theme.mode === 'custom') {
            root.style.setProperty('--custom-bg', this.theme.backgroundColor);
            root.style.setProperty('--custom-text', this.theme.textColor);
            root.style.setProperty('--custom-button', this.theme.buttonColor);
        }
        
        root.setAttribute('data-theme', this.theme.mode);
        
        // Apply glass effect
        const glassElements = document.querySelectorAll('.navbar, .dropdown-menu, .modal-content');
        glassElements.forEach(el => {
            if (this.theme.glassEffect) {
                el.classList.add('glass');
            } else {
                el.classList.remove('glass');
            }
        });
    }

    clearCacheOnExit() {
        window.addEventListener('beforeunload', () => {
            // Clear cache but keep user data and theme
            const userData = localStorage.getItem('sgombero-user');
            const themeData = localStorage.getItem('sgombero-theme');
            const usersData = localStorage.getItem('sgombero-users');
            
            localStorage.clear();
            sessionStorage.clear();
            
            if (userData) localStorage.setItem('sgombero-user', userData);
            if (themeData) localStorage.setItem('sgombero-theme', themeData);
            if (usersData) localStorage.setItem('sgombero-users', usersData);
        });
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                const slug = e.target.getAttribute('data-slug');
                this.loadPage(page, slug);
            });
        });

        // Modals
        document.getElementById('user-btn').addEventListener('click', () => this.openAuthModal());
        document.getElementById('settings-btn').addEventListener('click', () => this.openSettingsModal());
        document.getElementById('close-auth').addEventListener('click', () => this.closeModal('auth-modal'));
        document.getElementById('close-settings').addEventListener('click', () => this.closeModal('settings-modal'));

        // Close modals on backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id);
                }
            });
        });
    }

    populateComuni() {
        const grid = document.getElementById('comuni-grid');
        grid.innerHTML = comuniCatania.map(comune => 
            `<a href="#" class="dropdown-item" data-page="comune" data-slug="${comune.slug}">${comune.nome}</a>`
        ).join('');

        // Add event listeners to new elements
        grid.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                const slug = e.target.getAttribute('data-slug');
                this.loadPage(page, slug);
            });
        });
    }

    loadPage(page, slug = null) {
        this.currentPage = page;
        this.currentSlug = slug;
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`[data-page="${page}"]`);
        if (activeLink && !slug) {
            activeLink.classList.add('active');
        }

        // Load page content
        const content = this.getPageContent(page, slug);
        document.getElementById('main-content').innerHTML = content;
        
        // Setup page-specific event listeners
        this.setupPageEventListeners(page);
        
        // Update page title and meta
        this.updatePageMeta(page, slug);
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    getPageContent(page, slug) {
        switch (page) {
            case 'home':
                return this.getHomeContent();
            case 'servizio':
                return this.getServizioContent(slug);
            case 'comune':
                return this.getComuneContent(slug);
            case 'faq':
                return this.getFAQContent();
            case 'contatti':
                return this.getContattiContent();
            default:
                return this.get404Content();
        }
    }

    getHomeContent() {
        return `
            <section class="hero">
                <div class="hero-content">
                    <h1>Sgombero <span style="color: rgba(255,255,255,0.8);">Gratuito</span><br>a Catania e Provincia</h1>
                    <p>Liberiamo il tuo spazio in cambio di oggetti riutilizzabili. Servizio professionale, veloce e completamente gratuito.</p>
                    
                    <a href="tel:3490073264" class="hero-phone">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        349 007 3264
                    </a>

                    <div class="hero-actions">
                        <button class="btn btn-secondary" onclick="openWhatsApp()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            Scrivi su WhatsApp
                        </button>
                        <a href="#" class="btn btn-outline" data-page="contatti">Richiedi Preventivo</a>
                    </div>
                </div>
            </section>

            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h2>I Nostri Servizi</h2>
                        <p>Offriamo soluzioni complete per lo sgombero e il trasporto nella provincia di Catania</p>
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
                            <p>Svuotiamo case, appartamenti, cantine e garage completamente gratis in cambio di oggetti riutilizzabili.</p>
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
                            <p>Servizio di trasporto professionale per mobili e oggetti voluminosi in tutta la provincia.</p>
                            <a href="#" class="card-link" data-page="servizio" data-slug="trasporto">Scopri di più →</a>
                        </div>

                        <div class="card">
                            <div class="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M16 16h6v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"/>
                                    <polyline points="15,10 20,5 15,0"/>
                                    <line x1="4" y1="7" x2="4" y2="7"/>
                                    <line x1="6" y1="7" x2="6" y2="7"/>
                                    <line x1="8" y1="7" x2="8" y2="7"/>
                                </svg>
                            </div>
                            <h3>Traslochi</h3>
                            <p>Traslochi completi con servizio di imballaggio, trasporto e montaggio mobili.</p>
                            <a href="#" class="card-link" data-page="servizio" data-slug="trasloco">Scopri di più →</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-gray">
                <div class="container">
                    <div class="section-header">
                        <h2>Perché Scegliere Noi</h2>
                    </div>
                    
                    <div class="features-grid">
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22,4 12,14.01 9,11.01"/>
                                </svg>
                            </div>
                            <h3>100% Gratuito</h3>
                            <p>Il servizio è completamente gratuito in cambio di merce</p>
                        </div>

                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <h3>Tutta la Provincia</h3>
                            <p>Operiamo in tutti i comuni di Catania e provincia</p>
                        </div>

                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                            </div>
                            <h3>Servizio Rapido</h3>
                            <p>Intervento veloce e programmato secondo le tue esigenze</p>
                        </div>

                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                            </div>
                            <h3>Professionale</h3>
                            <p>Team esperto e attrezzature professionali</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-light" style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white;">
                <div class="container">
                    <div class="section-header">
                        <h2>Pronto per Liberare il Tuo Spazio?</h2>
                        <p style="color: rgba(255,255,255,0.9);">Contattaci oggi per un sopralluogo gratuito e senza impegno</p>
                    </div>
                    
                    <div class="hero-actions">
                        <a href="tel:3490073264" class="btn" style="background: white; color: var(--primary-color);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Chiama Subito
                        </a>
                        <button class="btn btn-secondary" onclick="openWhatsApp()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            WhatsApp
                        </button>
                    </div>
                </div>
            </section>
        `;
    }

    getServizioContent(slug) {
        const servizio = servizi.find(s => s.slug === slug);
        if (!servizio) return this.get404Content();

        const content = this.getServiceDetails(slug);
        
        return `
            <section class="hero">
                <div class="hero-content">
                    <h1>${content.title}<br><span style="color: rgba(255,255,255,0.8);">${content.subtitle}</span></h1>
                    <p>${content.description}</p>
                    
                    <div class="hero-actions">
                        <a href="tel:3490073264" class="btn" style="background: white; color: var(--primary-color);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            349 007 3264
                        </a>
                        <button class="btn btn-secondary" onclick="openWhatsApp('${servizio.nome.toLowerCase()}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            WhatsApp
                        </button>
                    </div>
                </div>
            </section>

            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h2>Vantaggi del Nostro Servizio</h2>
                    </div>
                    
                    <div class="cards-grid">
                        ${content.features.map(feature => `
                            <div class="card">
                                <div class="card-icon">
                                    ${feature.icon}
                                </div>
                                <h3>${feature.title}</h3>
                                <p>${feature.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section class="section section-gray">
                <div class="container">
                    <div class="section-header">
                        <h2>${content.detailsTitle}</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto;">
                        ${content.details.map((item, index) => `
                            <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px;">
                                <div style="width: 24px; height: 24px; background: rgba(0, 122, 255, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 4px;">
                                    <span style="color: var(--primary-color); font-weight: 600; font-size: 14px;">${index + 1}</span>
                                </div>
                                <p style="color: var(--text-color); font-size: 18px; margin: 0;">${item}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section class="section section-light" style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white;">
                <div class="container">
                    <div class="section-header">
                        <h2>Richiedi il Tuo Preventivo Gratuito</h2>
                        <p style="color: rgba(255,255,255,0.9);">Contattaci per ricevere un preventivo personalizzato senza impegno</p>
                    </div>
                    
                    <div class="hero-actions">
                        <a href="tel:3490073264" class="btn" style="background: white; color: var(--primary-color);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Chiama 349 007 3264
                        </button>
                        <button class="btn btn-secondary" onclick="openWhatsApp('${servizio.nome.toLowerCase()}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            Scrivi su WhatsApp
                        </button>
                    </div>
                </div>
            </section>
        `;
    }

    getServiceDetails(slug) {
        const details = {
            sgombero: {
                title: 'Sgombero Gratuito',
                subtitle: 'In Cambio di Merce Riutilizzabile',
                description: 'Liberiamo il tuo spazio senza costi: appartamenti, case, cantine e garage. Recuperiamo tutto ciò che può avere una seconda vita.',
                features: [
                    {
                        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>`,
                        title: 'Completamente Gratuito',
                        description: 'Il servizio non ha costi per te, recuperiamo valore dalla merce riutilizzabile'
                    },
                    {
                        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`,
                        title: 'Servizio Rapido',
                        description: 'Interventi veloci, spesso completati in una sola giornata'
                    },
                    {
                        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
                        title: 'Assicurati e Protetti',
                        description: 'Lavoriamo con tutte le assicurazioni e protezioni necessarie'
                    }
                ],
                detailsTitle: 'Come Funziona il Nostro Sgombero',
                details: [
                    'Sopralluogo gratuito per valutare gli oggetti recuperabili',
                    'Pianificazione dell\'intervento secondo le tue esigenze',
                    'Sgombero completo con recupero di mobili, elettrodomestici e oggetti',
                    'Pulizia finale degli spazi liberati',
                    'Smaltimento ecologico dei materiali non recuperabili'
                ]
            },
            trasporto: {
                title: 'Servizio Trasporti',
                subtitle: 'Professionali e Sicuri',
                description: 'Trasportiamo mobili, elettrodomestici e oggetti voluminosi in tutta la provincia di Catania con mezzi adeguati e personale specializzato.',
                features: [
                    {
                        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>`,
                        title: 'Mezzi Professionali',
                        description: 'Furgoni e camion attrezzati per ogni tipo di trasporto'
                    },
                    {
                        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
                        title: 'Trasporti Sicuri',
                        description: 'Imballaggio professionale e assicurazione merci'
                    },
                    {
                        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
                        title: 'Personale Esperto',
                        description: 'Team specializzato nel trasporto di oggetti delicati'
                    }
                ],
                detailsTitle: 'Tipologie di Trasporto',
                details: [
                    'Trasporto mobili e arredamento',
                    'Trasporto elettrodomestici di ogni dimensione',
                    'Trasporto pianoforti e oggetti pesanti',
                    'Trasporto opere d\'arte e oggetti fragili',
                    'Servizio di montaggio e smontaggio mobili'
                ]
            },
            trasloco: {
                title: 'Traslochi Completi',
                subtitle: 'Dalla A alla Z',
                description: 'Gestiamo ogni aspetto del tuo trasloco: dall\'imballaggio al trasporto, dal montaggio alla sistemazione nella nuova casa.',
                features: [
                    {
                        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>`,
                        title: 'Servizio Completo',
                        description: 'Ci occupiamo di tutto: imballaggio, trasporto e montaggio'
                    },
                    {
                        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`,
                        title: 'Pianificazione Precisa',
                        description: 'Organizziamo il trasloco nei minimi dettagli'
                    },
                    {
                        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
                        title: 'Protezione Totale',
                        description: 'Assicurazione completa su tutti i beni trasportati'
                    }
                ],
                detailsTitle: 'Servizi Inclusi nel Trasloco',
                details: [
                    'Sopralluogo e preventivo gratuito dettagliato',
                    'Fornitura di scatole e materiali per l\'imballaggio',
                    'Smontaggio mobili e protezione oggetti fragili',
                    'Trasporto con mezzi professionali assicurati',
                    'Rimontaggio mobili e sistemazione nella nuova casa'
                ]
            }
        };

        return details[slug] || details.sgombero;
    }

    getComuneContent(slug) {
        const comune = comuniCatania.find(c => c.slug === slug);
        if (!comune) return this.get404Content();

        return `
            <section class="hero">
                <div class="hero-content">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px; justify-content: center;">
                        <svg style="width: 24px; height: 24px; color: rgba(255,255,255,0.8);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span style="color: rgba(255,255,255,0.8); font-weight: 500;">Catania, Sicilia</span>
                    </div>
                    
                    <h1>Sgombero Gratuito a <span style="color: rgba(255,255,255,0.8);">${comune.nome}</span></h1>
                    <p>${comune.descrizione}. Servizio professionale e completamente gratuito in cambio di oggetti riutilizzabili.</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 32px 0; max-width: 400px; margin-left: auto; margin-right: auto;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <svg style="width: 20px; height: 20px; color: rgba(255,255,255,0.8);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                            <span style="color: rgba(255,255,255,0.9);">${comune.popolazione} abitanti</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <svg style="width: 20px; height: 20px; color: rgba(255,255,255,0.8);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="3,11 22,2 13,21 11,13 3,11"/>
                            </svg>
                            <span style="color: rgba(255,255,255,0.9);">${comune.distanza}</span>
                        </div>
                    </div>

                    <div class="hero-actions">
                        <a href="tel:3490073264" class="btn" style="background: white; color: var(--primary-color);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            349 007 3264
                        </a>
                        <button class="btn btn-secondary" onclick="openWhatsApp('${comune.nome}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            WhatsApp
                        </button>
                    </div>
                </div>
            </section>

            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h2>Servizi di Sgombero a ${comune.nome}</h2>
                        <p>Offriamo soluzioni complete per ogni esigenza di sgombero nella zona</p>
                    </div>
                    
                    <div class="cards-grid">
                        <div class="card">
                            <div class="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22,4 12,14.01 9,11.01"/>
                                </svg>
                            </div>
                            <h3>Sgombero Appartamenti</h3>
                            <p>Svuotamento completo di appartamenti, case e abitazioni a ${comune.nome}. Recuperiamo tutto ciò che può essere riutilizzato.</p>
                        </div>

                        <div class="card">
                            <div class="card-icon" style="background-color: rgba(52, 199, 89, 0.1);">
                                <svg style="color: var(--success-color);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
                                    <path d="M15 18H9"/>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
                                    <circle cx="17" cy="18" r="2"/>
                                    <circle cx="7" cy="18" r="2"/>
                                </svg>
                            </div>
                            <h3>Sgombero Cantine e Garage</h3>
                            <p>Pulizia e svuotamento di cantine, garage, magazzini e depositi. Servizio rapido e professionale.</p>
                        </div>

                        <div class="card">
                            <div class="card-icon" style="background-color: rgba(255, 149, 0, 0.1);">
                                <svg style="color: var(--warning-color);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                            </div>
                            <h3>Interventi Rapidi</h3>
                            <p>Interventi programmati secondo le tue esigenze. Raggiungiamo ${comune.nome} in tempi rapidi.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-gray">
                <div class="container">
                    <div class="section-header">
                        <h2>Perché Sceglierci a ${comune.nome}</h2>
                    </div>
                    
                    <div class="features-grid">
                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22,4 12,14.01 9,11.01"/>
                                </svg>
                            </div>
                            <h3>Conoscenza del Territorio</h3>
                            <p>Conosciamo perfettamente ${comune.nome} e sappiamo come muoverci efficacemente nella zona.</p>
                        </div>

                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                            </div>
                            <h3>Tempi di Intervento Ridotti</h3>
                            <p>Grazie alla nostra presenza capillare, raggiungiamo rapidamente ogni zona di ${comune.nome}.</p>
                        </div>

                        <div class="feature">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2l3.09 6.26L22 9l-5.91 5.74L18.18 22 12 18.27 5.82 22l2.09-7.26L2 9l6.91-1.74L12 2z"/>
                                </svg>
                            </div>
                            <h3>Rispetto dell'Ambiente</h3>
                            <p>Tutto ciò che recuperiamo viene destinato al riuso, contribuendo alla sostenibilità ambientale.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h2>Testimonianza Cliente</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto; text-align: center; padding: 40px;">
                        <p style="font-size: 1.25rem; font-style: italic; color: var(--text-secondary); margin-bottom: 24px;">
                            "Servizio eccellente! Hanno svuotato completamente il nostro appartamento a ${comune.nome} 
                            in una giornata, recuperando mobili e oggetti che pensavamo di dover buttare. 
                            Professionali e puntuali, lo consiglio vivamente!"
                        </p>
                        <div style="font-weight: 600; color: var(--text-color);">
                            Marco R. - Cliente di ${comune.nome}
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-light" style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white;">
                <div class="container">
                    <div class="section-header">
                        <h2>Hai Bisogno di Sgombero a ${comune.nome}?</h2>
                        <p style="color: rgba(255,255,255,0.9);">Contattaci ora per un sopralluogo gratuito e senza impegno</p>
                    </div>
                    
                    <div class="hero-actions">
                        <a href="tel:3490073264" class="btn" style="background: white; color: var(--primary-color);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Chiama 349 007 3264
                        </a>
                        <button class="btn btn-secondary" onclick="openWhatsApp('${comune.nome}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            Scrivi su WhatsApp
                        </button>
                    </div>
                </div>
            </section>
        `;
    }

    getFAQContent() {
        return `
            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h1>Domande Frequenti</h1>
                        <p>Trova le risposte alle domande più comuni sui nostri servizi di sgombero</p>
                    </div>
                    
                    <div style="max-width: 800px; margin: 0 auto;">
                        ${faqs.map((faq, index) => `
                            <div class="faq-item" data-faq="${index}">
                                <button class="faq-question">
                                    <span>${faq.question}</span>
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
                </div>
            </section>

            <section class="section section-light" style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white;">
                <div class="container">
                    <div class="section-header">
                        <h2>Non Hai Trovato la Risposta?</h2>
                        <p style="color: rgba(255,255,255,0.9);">Contattaci direttamente per ricevere assistenza personalizzata</p>
                    </div>
                    
                    <div class="hero-actions">
                        <a href="tel:3490073264" class="btn" style="background: white; color: var(--primary-color);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Chiama 349 007 3264
                        </a>
                        <button class="btn btn-secondary" onclick="openWhatsApp()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            Scrivi su WhatsApp
                        </button>
                    </div>
                </div>
            </section>
        `;
    }

    getContattiContent() {
        return `
            <section class="section section-light">
                <div class="container">
                    <div class="section-header">
                        <h1>Contattaci</h1>
                        <p>Siamo qui per aiutarti con tutti i tuoi servizi di sgombero, trasporti e traslochi</p>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start;">
                        <!-- Informazioni di Contatto -->
                        <div>
                            <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 32px;">Informazioni di Contatto</h2>
                            
                            <div style="display: flex; flex-direction: column; gap: 24px;">
                                <!-- Telefono -->
                                <div style="display: flex; align-items: flex-start; gap: 16px;">
                                    <div style="width: 48px; height: 48px; background: rgba(0, 122, 255, 0.1); border-radius: var(--border-radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                        <svg style="width: 24px; height: 24px; color: var(--primary-color);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 8px;">Telefono</h3>
                                        <a href="tel:3490073264" style="font-size: 2rem; font-weight: 700; color: var(--primary-color); text-decoration: none;">349 007 3264</a>
                                        <p style="color: var(--text-secondary); margin-top: 4px;">Chiamate e SMS sempre attivi</p>
                                    </div>
                                </div>

                                <!-- WhatsApp -->
                                <div style="display: flex; align-items: flex-start; gap: 16px;">
                                    <div style="width: 48px; height: 48px; background: rgba(52, 199, 89, 0.1); border-radius: var(--border-radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                        <svg style="width: 24px; height: 24px; color: var(--success-color);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 8px;">WhatsApp</h3>
                                        <button onclick="openWhatsApp()" style="font-size: 1.25rem; font-weight: 600; color: var(--success-color); background: none; border: none; cursor: pointer; padding: 0;">Chatta con noi</button>
                                        <p style="color: var(--text-secondary); margin-top: 4px;">Risposta rapida e preventivi istantanei</p>
                                    </div>
                                </div>

                                <!-- Area Operativa -->
                                <div style="display: flex; align-items: flex-start; gap: 16px;">
                                    <div style="width: 48px; height: 48px; background: rgba(88, 86, 214, 0.1); border-radius: var(--border-radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                        <svg style="width: 24px; height: 24px; color: var(--secondary-color);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 8px;">Area Operativa</h3>
                                        <p style="font-weight: 500; margin-bottom: 4px;">Catania e tutta la provincia</p>
                                        <p style="color: var(--text-secondary);">Interventi in tutti i comuni</p>
                                    </div>
                                </div>

                                <!-- Orari -->
                                <div style="display: flex; align-items: flex-start; gap: 16px;">
                                    <div style="width: 48px; height: 48px; background: rgba(255, 149, 0, 0.1); border-radius: var(--border-radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                        <svg style="width: 24px; height: 24px; color: var(--warning-color);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <polyline points="12,6 12,12 16,14"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 8px;">Orari di Contatto</h3>
                                        <div style="margin-bottom: 4px;">
                                            <p><strong>Lun - Sab:</strong> 8:00 - 19:00</p>
                                            <p><strong>Domenica:</strong> 9:00 - 17:00</p>
                                        </div>
                                        <p style="color: var(--text-secondary);">WhatsApp attivo 24/7</p>
                                    </div>
                                </div>
                            </div>

                            <!-- CTA Rapide -->
                            <div style="margin-top: 32px;">
                                <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 16px;">Contattaci Subito</h3>
                                <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                                    <a href="tel:3490073264" class="btn btn-primary">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                        </svg>
                                        Chiama Ora
                                    </a>
                                    <button class="btn btn-secondary" onclick="openWhatsApp()">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                        </svg>
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Form di Contatto -->
                        <div class="card">
                            <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 24px;">Richiedi un Preventivo</h2>
                            
                            <form id="contact-form">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                                    <div class="form-group">
                                        <label class="form-label">Nome *</label>
                                        <input type="text" name="name" class="form-input" placeholder="Il tuo nome" required>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Telefono *</label>
                                        <input type="tel" name="phone" class="form-input" placeholder="Il tuo numero" required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label">Email</label>
                                    <input type="email" name="email" class="form-input" placeholder="email@esempio.com">
                                </div>

                                <div class="form-group">
                                    <label class="form-label">Servizio Richiesto</label>
                                    <select name="service" class="form-select">
                                        <option value="">Seleziona un servizio</option>
                                        <option value="sgombero">Sgombero Gratuito</option>
                                        <option value="trasporto">Trasporto</option>
                                        <option value="trasloco">Trasloco Completo</option>
                                        <option value="altro">Altro</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label class="form-label">Messaggio *</label>
                                    <textarea name="message" class="form-input form-textarea" placeholder="Descrivi il servizio di cui hai bisogno..." required></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="22" y1="2" x2="11" y2="13"/>
                                        <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                                    </svg>
                                    Invia Richiesta via WhatsApp
                                </button>

                                <p style="font-size: 0.875rem; color: var(--text-secondary); text-align: center; margin-top: 12px;">
                                    Cliccando "Invia Richiesta" si aprirà WhatsApp con il messaggio precompilato
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Emergency Contact -->
            <section class="section" style="background: rgba(255, 59, 48, 0.1);">
                <div class="container">
                    <div class="section-header">
                        <h2>Emergenze e Interventi Urgenti</h2>
                        <p>Per situazioni urgenti che richiedono intervento immediato</p>
                        
                        <a href="tel:3490073264" class="btn" style="background: var(--error-color); color: white; margin-top: 24px;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Chiamata di Emergenza
                        </a>
                    </div>
                </div>
            </section>
        `;
    }

    get404Content() {
        return `
            <section class="section section-light" style="min-height: 60vh; display: flex; align-items: center;">
                <div class="container">
                    <div class="section-header">
                        <div style="width: 96px; height: 96px; background: rgba(0, 122, 255, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
                            <span style="font-size: 2.5rem; font-weight: 700; color: var(--primary-color);">404</span>
                        </div>
                        
                        <h1>Pagina Non Trovata</h1>
                        <p>La pagina che stai cercando non esiste o è stata spostata.</p>
                        
                        <div style="display: flex; gap: 16px; justify-content: center; margin-top: 32px; flex-wrap: wrap;">
                            <a href="#" class="btn btn-primary" data-page="home">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                    <polyline points="9,22 9,12 15,12 15,22"/>
                                </svg>
                                Torna alla Home
                            </a>
                            <button class="btn btn-outline" onclick="history.back()">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="m12 19-7-7 7-7"/>
                                    <path d="M19 12H5"/>
                                </svg>
                                Torna Indietro
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    setupPageEventListeners(page) {
        // Re-add navigation event listeners for dynamically loaded content
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                const slug = e.target.getAttribute('data-slug');
                this.loadPage(page, slug);
            });
        });

        // FAQ specific listeners
        if (page === 'faq') {
            document.querySelectorAll('.faq-question').forEach(question => {
                question.addEventListener('click', (e) => {
                    const faqItem = e.target.closest('.faq-item');
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

        // Contact form listener
        if (page === 'contatti') {
            const form = document.getElementById('contact-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData);
                    
                    const message = `Ciao, sono ${data.name}
Email: ${data.email}
Telefono: ${data.phone}
Servizio richiesto: ${data.service}
Messaggio: ${data.message}`;
                    
                    openWhatsApp('', message);
                });
            }
        }
    }

    updatePageMeta(page, slug) {
        let title = 'Sgombero Gratis Catania - Servizio Professionale';
        let description = 'Servizio di sgombero gratuito in cambio di merce a Catania e provincia. Trasporti e traslochi professionali.';

        switch (page) {
            case 'servizio':
                const servizio = servizi.find(s => s.slug === slug);
                if (servizio) {
                    title = `${servizio.nome} Professionale a Catania - Servizio Completo`;
                    description = `${servizio.descrizione}. Servizio professionale a Catania e provincia. Chiama 349 007 3264 per un preventivo gratuito.`;
                }
                break;
            case 'comune':
                const comune = comuniCatania.find(c => c.slug === slug);
                if (comune) {
                    title = `Sgombero Gratuito a ${comune.nome} - Servizio Professionale`;
                    description = `${comune.descrizione}. Servizio gratuito in cambio di merce riutilizzabile. Chiama 349 007 3264 per un preventivo.`;
                }
                break;
            case 'faq':
                title = 'FAQ - Domande Frequenti | Sgombero Catania';
                description = 'Risposte alle domande più frequenti sui nostri servizi di sgombero gratuito a Catania. Scopri come funziona il servizio e le zone operative.';
                break;
            case 'contatti':
                title = 'Contatti - Sgombero Catania | Chiamaci 349 007 3264';
                description = 'Contatta Sgombero Catania per servizi gratuiti. Telefono 349 007 3264, WhatsApp disponibile. Preventivi gratuiti per sgombero, trasporti e traslochi.';
                break;
        }

        document.title = title;
        
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }
    }

    // Auth Modal Methods
    openAuthModal() {
        const modal = document.getElementById('auth-modal');
        const content = document.getElementById('auth-content');
        
        if (this.user) {
            // Show user profile
            document.getElementById('auth-title').textContent = 'Profilo Utente';
            content.innerHTML = this.getUserProfileContent();
        } else {
            // Show login form
            document.getElementById('auth-title').textContent = 'Accedi';
            content.innerHTML = this.getAuthFormContent();
        }
        
        modal.classList.add('active');
        this.setupAuthEventListeners();
    }

    getUserProfileContent() {
        return `
            <div style="text-align: center; margin-bottom: 32px;">
                <div style="width: 80px; height: 80px; background: rgba(0, 122, 255, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                    <svg style="width: 40px; height: 40px; color: var(--primary-color);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                </div>
                <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 8px;">${this.user.name}</h3>
                <p style="color: var(--text-secondary); margin-bottom: 4px;">${this.user.email}</p>
                ${this.user.phone ? `<p style="color: var(--text-secondary);">${this.user.phone}</p>` : ''}
            </div>
            
            <button onclick="app.logout()" class="btn" style="width: 100%; background: var(--error-color); color: white; justify-content: center;">
                Esci
            </button>
        `;
    }

    getAuthFormContent() {
        return `
            <div id="auth-error" class="hidden" style="padding: 12px; background: rgba(255, 59, 48, 0.1); border: 1px solid var(--error-color); border-radius: var(--border-radius); color: var(--error-color); margin-bottom: 20px; font-size: 14px;"></div>

            <form id="auth-form">
                <div id="name-group" class="form-group hidden">
                    <label class="form-label">Nome completo</label>
                    <input type="text" name="name" class="form-input" placeholder="Il tuo nome">
                </div>

                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-input" placeholder="email@esempio.com" required>
                </div>

                <div id="phone-group" class="form-group hidden">
                    <label class="form-label">Telefono (opzionale)</label>
                    <input type="tel" name="phone" class="form-input" placeholder="333 123 4567">
                </div>

                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" name="password" class="form-input" placeholder="Password" required>
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;" id="auth-submit">
                    Accedi
                </button>

                <div style="text-align: center; margin-top: 16px;">
                    <button type="button" id="auth-toggle" style="background: none; border: none; color: var(--primary-color); cursor: pointer; font-weight: 500;">
                        Non hai un account? Registrati
                    </button>
                </div>
            </form>
        `;
    }

    setupAuthEventListeners() {
        const form = document.getElementById('auth-form');
        const toggle = document.getElementById('auth-toggle');
        const nameGroup = document.getElementById('name-group');
        const phoneGroup = document.getElementById('phone-group');
        const submitBtn = document.getElementById('auth-submit');
        const title = document.getElementById('auth-title');
        let isLogin = true;

        if (toggle) {
            toggle.addEventListener('click', () => {
                isLogin = !isLogin;
                
                if (isLogin) {
                    title.textContent = 'Accedi';
                    nameGroup.classList.add('hidden');
                    phoneGroup.classList.add('hidden');
                    submitBtn.textContent = 'Accedi';
                    toggle.textContent = 'Non hai un account? Registrati';
                } else {
                    title.textContent = 'Registrati';
                    nameGroup.classList.remove('hidden');
                    phoneGroup.classList.remove('hidden');
                    submitBtn.textContent = 'Registrati';
                    toggle.textContent = 'Hai già un account? Accedi';
                }
            });
        }

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                if (isLogin) {
                    this.login(data.email, data.password);
                } else {
                    this.register(data.name, data.email, data.password, data.phone);
                }
            });
        }
    }

    login(email, password) {
        const users = JSON.parse(localStorage.getItem('sgombero-users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            const { password: _, ...userWithoutPassword } = user;
            this.saveUser(userWithoutPassword);
            this.closeModal('auth-modal');
        } else {
            this.showAuthError('Email o password non corretti');
        }
    }

    register(name, email, password, phone) {
        const users = JSON.parse(localStorage.getItem('sgombero-users') || '[]');
        
        if (users.find(u => u.email === email)) {
            this.showAuthError('Utente già registrato con questa email');
            return;
        }

        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            phone,
            password,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('sgombero-users', JSON.stringify(users));

        const { password: _, ...userWithoutPassword } = newUser;
        this.saveUser(userWithoutPassword);
        this.closeModal('auth-modal');
    }

    logout() {
        this.saveUser(null);
        this.closeModal('auth-modal');
    }

    showAuthError(message) {
        const errorDiv = document.getElementById('auth-error');
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.classList.remove('hidden');
        }
    }

    // Settings Modal Methods
    openSettingsModal() {
        const modal = document.getElementById('settings-modal');
        const content = document.getElementById('settings-content');
        
        content.innerHTML = this.getSettingsContent();
        modal.classList.add('active');
        this.setupSettingsEventListeners();
    }

    getSettingsContent() {
        return `
            <div class="settings-section">
                <h3>Tema</h3>
                <div class="theme-options">
                    <div class="theme-option ${this.theme.mode === 'light' ? 'active' : ''}" data-theme="light">
                        <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="5"/>
                            <line x1="12" y1="1" x2="12" y2="3"/>
                            <line x1="12" y1="21" x2="12" y2="23"/>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                            <line x1="1" y1="12" x2="3" y2="12"/>
                            <line x1="21" y1="12" x2="23" y2="12"/>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                        </svg>
                        <div style="font-weight: 500;">Chiaro</div>
                    </div>

                    <div class="theme-option ${this.theme.mode === 'dark' ? 'active' : ''}" data-theme="dark">
                        <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        </svg>
                        <div style="font-weight: 500;">Scuro</div>
                    </div>

                    <div class="theme-option ${this.theme.mode === 'custom' ? 'active' : ''}" data-theme="custom">
                        <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="13.5" cy="6.5" r=".5"/>
                            <circle cx="17.5" cy="10.5" r=".5"/>
                            <circle cx="8.5" cy="7.5" r=".5"/>
                            <circle cx="6.5" cy="12.5" r=".5"/>
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                        </svg>
                        <div style="font-weight: 500;">Personalizzato</div>
                    </div>
                </div>
            </div>

            <div class="settings-section ${this.theme.mode === 'custom' ? '' : 'hidden'}" id="custom-colors">
                <h3>Personalizza Colori</h3>
                
                <div class="color-input-group">
                    <input type="color" class="color-input" id="bg-color" value="${this.theme.backgroundColor}">
                    <div style="flex: 1;">
                        <label class="form-label">Colore Sfondo</label>
                        <input type="text" class="form-input" id="bg-text" value="${this.theme.backgroundColor}">
                    </div>
                </div>

                <div class="color-input-group">
                    <input type="color" class="color-input" id="text-color" value="${this.theme.textColor}">
                    <div style="flex: 1;">
                        <label class="form-label">Colore Testo</label>
                        <input type="text" class="form-input" id="text-text" value="${this.theme.textColor}">
                    </div>
                </div>

                <div class="color-input-group">
                    <input type="color" class="color-input" id="button-color" value="${this.theme.buttonColor}">
                    <div style="flex: 1;">
                        <label class="form-label">Colore Pulsanti</label>
                        <input type="text" class="form-input" id="button-text" value="${this.theme.buttonColor}">
                    </div>
                </div>
            </div>

            <div class="settings-section">
                <h3>Effetti Visivi</h3>
                
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <svg style="width: 24px; height: 24px; color: var(--primary-color);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2l3.09 6.26L22 9l-5.91 5.74L18.18 22 12 18.27 5.82 22l2.09-7.26L2 9l6.91-1.74L12 2z"/>
                        </svg>
                        <div>
                            <div style="font-weight: 500;">Effetto Vetro</div>
                            <div style="font-size: 14px; color: var(--text-secondary);">Rende trasparenti dialog e menu</div>
                        </div>
                    </div>
                    
                    <div class="toggle-switch ${this.theme.glassEffect ? 'active' : ''}" id="glass-toggle"></div>
                </div>
            </div>

            <div class="settings-section">
                <h3>Cache e Dati</h3>
                
                <button onclick="app.resetCache()" class="btn" style="width: 100%; background: var(--error-color); color: white; justify-content: center;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        
                        <polyline points="1,4 1,10 7,10"/>
                        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
                    </svg>
                    Resetta Cache e Ricarica
                </button>
                
                <p style="font-size: 12px; color: var(--text-secondary); margin-top: 8px; text-align: center;">
                    Elimina tutti i dati salvati e ricarica il sito per avere sempre la versione più aggiornata.
                </p>
            </div>
        `;
    }

    setupSettingsEventListeners() {
        // Theme selection
        document.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.getAttribute('data-theme');
                this.changeTheme(theme);
                
                // Update active state
                document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Show/hide custom colors
                const customColors = document.getElementById('custom-colors');
                if (theme === 'custom') {
                    customColors.classList.remove('hidden');
                } else {
                    customColors.classList.add('hidden');
                }
            });
        });

        // Custom color inputs
        const colorInputs = [
            { color: 'bg-color', text: 'bg-text', prop: 'backgroundColor' },
            { color: 'text-color', text: 'text-text', prop: 'textColor' },
            { color: 'button-color', text: 'button-text', prop: 'buttonColor' }
        ];

        colorInputs.forEach(({ color, text, prop }) => {
            const colorInput = document.getElementById(color);
            const textInput = document.getElementById(text);

            if (colorInput && textInput) {
                colorInput.addEventListener('change', (e) => {
                    textInput.value = e.target.value;
                    this.saveTheme({ [prop]: e.target.value, mode: 'custom' });
                });

                textInput.addEventListener('change', (e) => {
                    colorInput.value = e.target.value;
                    this.saveTheme({ [prop]: e.target.value, mode: 'custom' });
                });
            }
        });

        // Glass effect toggle
        const glassToggle = document.getElementById('glass-toggle');
        if (glassToggle) {
            glassToggle.addEventListener('click', () => {
                const newValue = !this.theme.glassEffect;
                this.saveTheme({ glassEffect: newValue });
                glassToggle.classList.toggle('active', newValue);
            });
        }
    }

    changeTheme(mode) {
        const themes = {
            light: {
                mode: 'light',
                backgroundColor: '#ffffff',
                textColor: '#000000',
                buttonColor: '#007AFF'
            },
            dark: {
                mode: 'dark',
                backgroundColor: '#000000',
                textColor: '#ffffff',
                buttonColor: '#007AFF'
            },
            custom: {
                mode: 'custom'
            }
        };

        this.saveTheme(themes[mode]);
    }

    resetCache() {
        // Clear all caches but keep user data and theme
        const userData = localStorage.getItem('sgombero-user');
        const themeData = localStorage.getItem('sgombero-theme');
        const usersData = localStorage.getItem('sgombero-users');
        
        localStorage.clear();
        sessionStorage.clear();
        
        if (userData) localStorage.setItem('sgombero-user', userData);
        if (themeData) localStorage.setItem('sgombero-theme', themeData);
        if (usersData) localStorage.setItem('sgombero-users', usersData);
        
        // Force reload
        window.location.reload();
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('active');
    }
}

// Global functions
function openWhatsApp(context = '', customMessage = '') {
    let message = customMessage;
    
    if (!message) {
        if (context) {
            message = `Ciao, vorrei informazioni sul servizio di ${context}`;
        } else {
            message = 'Ciao, vorrei informazioni sui vostri servizi';
        }
    }
    
    window.open(`https://wa.me/393490073264?text=${encodeURIComponent(message)}`, '_blank');
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new AppState();
});