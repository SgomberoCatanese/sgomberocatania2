document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const desktopMenu = document.getElementById('desktop-menu');
    const navActions = document.querySelector('.nav-actions');

    // 1. Dark Mode Logic
    function applyTheme(theme) {
        body.classList.toggle('dark-mode', theme === 'dark');
    }
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
    darkModeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 2. Mobile Menu Logic
    function setupMobileMenu() {
        if (!desktopMenu || !navActions) return;
        mobileMenuOverlay.innerHTML = ''; // Clear previous clones
        mobileMenuOverlay.appendChild(desktopMenu.cloneNode(true));
        mobileMenuOverlay.appendChild(navActions.cloneNode(true));
        
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = mobileMenuOverlay.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            body.style.overflow = isActive ? 'hidden' : '';
        });

        const closeMenu = () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            body.style.overflow = '';
        };

        mobileMenuOverlay.addEventListener('click', (e) => { if (e.target === mobileMenuOverlay) closeMenu(); });
        mobileMenuOverlay.querySelectorAll('a, button').forEach(el => el.addEventListener('click', closeMenu));
    }
    if (mobileMenuBtn && mobileMenuOverlay) setupMobileMenu();
    
    // 3. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        
        if (window.scrollY > lastScrollY && window.scrollY > 100) navbar.style.transform = 'translateY(-120%)';
        else navbar.style.transform = 'translateY(0)';
        
        lastScrollY = window.scrollY;
    }, { passive: true });

    // 4. Carousel Logic
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-btn.next');
        const prevButton = document.querySelector('.carousel-btn.prev');
        const slideWidth = slides[0].getBoundingClientRect().width;
        let currentIndex = 0;

        const moveToSlide = (targetIndex) => {
            track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
            currentIndex = targetIndex;
        };

        nextButton.addEventListener('click', () => {
            const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
            moveToSlide(nextIndex);
        });

        prevButton.addEventListener('click', () => {
            const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
            moveToSlide(prevIndex);
        });
        
        // Auto-advance
        setInterval(() => {
             const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
            moveToSlide(nextIndex);
        }, 5000);
    }
    
    // 5. Cronoshop Popup Logic
    const cronoPopup = document.getElementById('cronoshop-small-popup');
    const closePopupBtn = document.getElementById('small-popup-close');
    
    if(cronoPopup && closePopupBtn) {
        setTimeout(() => {
            cronoPopup.classList.add('active');
        }, 30000); // Show after 30 seconds
        
        closePopupBtn.addEventListener('click', () => {
            cronoPopup.classList.remove('active');
        });
    }
});
