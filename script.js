// Mobile-First iOS-style interactions

document.addEventListener('DOMContentLoaded', function() {

    // ========== DARK MODE ==========
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            // Haptic feedback simulation
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        });
    }

    // ========== MOBILE MENU ==========
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isActive = navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');

            // Prevent body scroll when menu open
            if (isActive) {
                document.body.style.overflow = 'hidden';
                // Haptic feedback
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu on escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu on link click (but not dropdown toggles)
        const navLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // ========== DROPDOWN MENUS ==========
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const dropdown = this.parentElement;
            const isActive = dropdown.classList.contains('active');

            // On mobile, close other dropdowns
            if (window.innerWidth < 768) {
                dropdownToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        otherToggle.parentElement.classList.remove('active');
                    }
                });
            }

            dropdown.classList.toggle('active');

            // Haptic feedback on mobile
            if (navigator.vibrate && window.innerWidth < 768) {
                navigator.vibrate(10);
            }
        });
    });

    // Close dropdowns on click outside (desktop)
    document.addEventListener('click', function(e) {
        if (window.innerWidth >= 768) {
            if (!e.target.closest('.nav-dropdown')) {
                dropdownToggles.forEach(toggle => {
                    toggle.parentElement.classList.remove('active');
                });
            }
        }
    });

    // ========== FLOATING BUTTONS ==========
    const phoneBtn = document.querySelector('.phone-btn');
    const whatsappBtn = document.querySelector('.whatsapp-btn');

    [phoneBtn, whatsappBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function() {
                if (navigator.vibrate) {
                    navigator.vibrate(15);
                }
            });
        }
    });

    // ========== CAROUSEL ==========
    const track = document.querySelector('.carousel-track');
    const slides = track ? Array.from(track.children) : [];
    const nextBtn = document.querySelector('.carousel-btn.next');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    function updateCarousel() {
        if (!track || slides.length === 0) return;

        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });

        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Touch swipe support
    if (track) {
        track.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Auto-play carousel
    let autoPlayInterval;

    function startAutoPlay() {
        if (slides.length > 1) {
            autoPlayInterval = setInterval(nextSlide, 5000);
        }
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }

    startAutoPlay();

    // Pause on interaction
    [nextBtn, prevBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function() {
                stopAutoPlay();
                setTimeout(startAutoPlay, 10000); // Resume after 10s
            });
        }
    });

    // Initialize carousel
    if (slides.length > 0) {
        updateCarousel();
    }

    // ========== CRONOSHOP POPUP ==========
    const cronoshopPopup = document.getElementById('cronoshop-small-popup');
    const closePopupBtn = document.getElementById('small-popup-close');

    // Show popup after 30 seconds
    setTimeout(() => {
        if (cronoshopPopup) {
            cronoshopPopup.classList.add('show');
        }
    }, 30000);

    if (closePopupBtn && cronoshopPopup) {
        closePopupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            cronoshopPopup.classList.remove('show');
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        });
    }

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length <= 1) return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // ========== NAVBAR HIDE ON SCROLL (Mobile) ==========
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.innerWidth < 768 && navbar) {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 60) {
                navbar.style.transform = 'translateY(0)';
            } else if (currentScroll > lastScroll && !navMenu.classList.contains('active')) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        }
    }, { passive: true });

    // ========== INTERSECTION OBSERVER ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll(
        '.service-card, .stat-item, .comune-card, .testimonial-item, .feature-item'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(el);
    });

    // ========== ACTIVE STATES ==========
    // Add visual feedback for all interactive elements
    const interactiveElements = document.querySelectorAll(
        '.btn, .service-card, .comune-card, .nav-link, .dropdown-item, .floating-btn'
    );

    interactiveElements.forEach(el => {
        el.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        }, { passive: true });

        el.addEventListener('touchend', function() {
            this.style.opacity = '1';
        }, { passive: true });

        el.addEventListener('touchcancel', function() {
            this.style.opacity = '1';
        }, { passive: true });
    });

    // ========== RESIZE HANDLER ==========
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Close mobile menu on resize to desktop
            if (window.innerWidth >= 768 && navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            }

            // Close all dropdowns on mobile to desktop transition
            dropdownToggles.forEach(toggle => {
                toggle.parentElement.classList.remove('active');
            });
        }, 250);
    });

    // ========== PREVENT DOUBLE TAP ZOOM ==========
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // ========== LOADING STATE ==========
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');

        // Trigger initial animations
        setTimeout(() => {
            animatedElements.forEach(el => {
                if (el.getBoundingClientRect().top < window.innerHeight) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        }, 100);
    });

});

// ========== SERVICE WORKER (Optional) ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}
