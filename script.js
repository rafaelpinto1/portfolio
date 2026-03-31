// script.js - Funcionalidades completas

document.addEventListener('DOMContentLoaded', () => {
    // ==================== BARRA DE PROGRESSO ====================
    const progressBar = document.getElementById('progressBar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // ==================== MENU HAMBÚRGUER ====================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        navMenu.classList.toggle('active');
        const expanded = navMenu.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', expanded);
    }

    function closeMenu() {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // ==================== SCROLL SUAVE ====================
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                history.pushState(null, null, targetId);
            }
        });
    });

    // ==================== DARK MODE ====================
    const darkModeToggle = document.getElementById('darkModeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
        document.body.classList.add('dark');
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌙';
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        darkModeToggle.textContent = isDark ? '☀️' : '🌙';
    });

    // ==================== DESTAQUE DO MENU ATIVO (SCROLL SPY) ====================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveLink() {
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveLink);
    highlightActiveLink();

    // ==================== ANIMAÇÕES AO ROLAR (SCROLL REVEAL) ====================
    const animatedElements = document.querySelectorAll('.card, .project-card, .timeline-item, .about-text, .hero-content');
    animatedElements.forEach(el => {
        el.classList.add('fade-up');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

    animatedElements.forEach(el => observer.observe(el));

    // ==================== TYPEWRITER EFFECT ====================
    const typewriterElement = document.getElementById('typewriter');
    const texts = [
        "Analista de Dados",
        "AZ-900 Certificado",
        "Power BI & Data Visualization",
        "Python para Análise de Dados",
        "Business Intelligence",
        "SQL & Data Modeling"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeEffect, 500);
        } else {
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();
});