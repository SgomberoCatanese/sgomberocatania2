document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay-bg');
    const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper'); // Wrapper for panels
    const openComuniBtn = document.getElementById('open-comuni-menu');
    const backToMainBtn = document.getElementById('back-to-main-menu');

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

    // 2. Mobile Menu Logic (iOS Style with Submenu)
    if (mobileMenuBtn && mobileMenuOverlay) {
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
            // Reset to main menu view when closing
            if (mobileMenuWrapper) {
                mobileMenuWrapper.classList.remove('show-comuni');
            }
        };

        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) closeMenu();
        });

        mobileMenuOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Submenu Navigation
        if (openComuniBtn && backToMainBtn && mobileMenuWrapper) {
            openComuniBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent menu from closing
                mobileMenuWrapper.classList.add('show-comuni');
            });
            backToMainBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent menu from closing
                mobileMenuWrapper.classList.remove('show-comuni');
            });
        }
    }
    
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

    // Other functionalities (Carousel, Pop-up, etc.) remain the same
});
