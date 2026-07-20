function resolveInitialTheme(stored, prefersDarkMatches) {
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return !!prefersDarkMatches;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { resolveInitialTheme };
}

typeof document !== 'undefined' && document.addEventListener('DOMContentLoaded', () => {

    // ==================== MENU HAMBÚRGUER ====================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu    = document.getElementById('navMenu');
    const navLinks   = document.querySelectorAll('.nav-link');

    function closeMenu() {
        navMenu.classList.remove('active');
        menuToggle && menuToggle.setAttribute('aria-expanded', 'false');
    }

    menuToggle && menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    navLinks.forEach(l => l.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 768) closeMenu(); });

    // ==================== SCROLL SUAVE ====================
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const el = document.querySelector(id);
            if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); history.pushState(null, null, id); }
        });
    });

    // ==================== DARK MODE ====================
    const toggle     = document.getElementById('darkModeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved      = localStorage.getItem('theme');

    function applyTheme(dark) {
        document.body.classList.toggle('dark', dark);
        if (toggle) toggle.checked = dark;
    }

    applyTheme(resolveInitialTheme(saved, prefersDark));

    toggle && toggle.addEventListener('change', () => {
        applyTheme(toggle.checked);
        localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
    });

    // ==================== IDIOMA (PT/EN) ====================
    const langPt = document.getElementById('langPt');
    const langEn = document.getElementById('langEn');
    const savedLang = localStorage.getItem('lang');
    const initialLang = I18N.resolveInitialLanguage(savedLang);

    function updateContactAriaLabels(lang) {
        const phoneLink = document.getElementById('contactPhone');
        const emailLink = document.getElementById('contactEmail');
        if (phoneLink) phoneLink.setAttribute('aria-label', I18N.getText(I18N.I18N_DICT, lang, 'contact.phoneLabel'));
        if (emailLink) emailLink.setAttribute('aria-label', I18N.getText(I18N.I18N_DICT, lang, 'contact.emailLabel'));
    }

    I18N.applyLanguage(initialLang, I18N.I18N_DICT);
    updateContactAriaLabels(initialLang);

    langPt && langPt.addEventListener('click', () => { I18N.applyLanguage('pt', I18N.I18N_DICT); updateContactAriaLabels('pt'); });
    langEn && langEn.addEventListener('click', () => { I18N.applyLanguage('en', I18N.I18N_DICT); updateContactAriaLabels('en'); });

    // ==================== SCROLL SPY ====================
    const sections = document.querySelectorAll('section[id]');

    function spy() {
        const pos = window.scrollY + 110;
        sections.forEach(s => {
            const link = document.querySelector(`.nav-link[href="#${s.id}"]`);
            if (link && pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', spy, { passive: true });
    spy();

    // ==================== SCROLL REVEAL ====================
    document.querySelectorAll(
        '.card, .project-card, .timeline-item, .about-text, .hero-content, .skill-badge, .skills-category'
    ).forEach(el => {
        el.classList.add('fade-up');
        new IntersectionObserver((entries, obs) => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }).observe(el);
    });


    // ==================== PROJECTS: título/descrição/status por idioma ====================
    function renderProjectCardsText(lang) {
        document.querySelectorAll('.project-card').forEach((card) => {
            const id = card.dataset.projectId;
            const project = ProjectsData.PROJECTS.find((p) => p.id === id);
            if (!project) return;
            const content = project[lang] || project.pt;
            card.querySelector('.project-card-title').textContent = content.title;
            card.querySelector('.project-card-desc').textContent = content.desc || content.context;
            card.querySelector('.project-status').textContent = lang === 'en' ? project.statusEn : project.statusPt;
            const tagsContainer = card.querySelector('.project-tags');
            if (tagsContainer) {
                tagsContainer.innerHTML = project.tags
                    .map((tag) => `<span class="project-tag">${ProjectsData.translateTag(tag, lang)}</span>`)
                    .join('');
            }
        });
        const modalCloseBtn = document.getElementById('projectModalClose');
        const prevBtn = document.getElementById('projectsPrev');
        const nextBtn = document.getElementById('projectsNext');
        const isEn = lang === 'en';
        if (modalCloseBtn) modalCloseBtn.setAttribute('aria-label', isEn ? 'Close project' : 'Fechar projeto');
        if (prevBtn) prevBtn.setAttribute('aria-label', isEn ? 'Previous' : 'Anterior');
        if (nextBtn) nextBtn.setAttribute('aria-label', isEn ? 'Next' : 'Próximo');
    }
    renderProjectCardsText(I18N.resolveInitialLanguage(localStorage.getItem('lang')));
    langPt && langPt.addEventListener('click', () => renderProjectCardsText('pt'));
    langEn && langEn.addEventListener('click', () => renderProjectCardsText('en'));

    // ==================== PROJECT MODAL (case study nativo, sem iframe) ====================
    const projectModal     = document.getElementById('projectModal');
    const projectModalBody = document.getElementById('projectModalBody');
    const projectModalTitle = document.getElementById('projectModalTitle');
    const projectModalClose = document.getElementById('projectModalClose');

    function currentLang() {
        return document.getElementById('langEn')?.classList.contains('active') ? 'en' : 'pt';
    }

    function openProjectModal(project) {
        const lang = currentLang();
        const content = project[lang] || project.pt;
        projectModalTitle.textContent = content.title;
        projectModalBody.innerHTML = ProjectsData.renderCaseStudyHTML(project, lang);
        projectModal.removeAttribute('inert');
        projectModal.classList.add('open');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        if (document.activeElement && projectModal.contains(document.activeElement)) {
            document.activeElement.blur();
        }
        projectModal.classList.remove('open');
        projectModal.setAttribute('aria-hidden', 'true');
        projectModal.setAttribute('inert', '');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.project-card').forEach((card) => {
        const id = card.dataset.projectId;
        const project = ProjectsData.PROJECTS.find((p) => p.id === id);
        if (!project) return;

        if (project.type === 'external') {
            // Projeto real: o link já abre em nova aba via href/target no HTML; não usa modal.
            return;
        }

        card.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal(project);
        });
    });

    projectModalClose.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (e) => { if (e.target === projectModal) closeProjectModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectModal(); });

    // ==================== CARROSSEL DE PROJETOS (mobile) ====================
    const projectsGrid   = document.querySelector('.projects-grid');
    const projectsPrev   = document.getElementById('projectsPrev');
    const projectsNext   = document.getElementById('projectsNext');
    const projectsDotsEl = document.getElementById('projectsDots');

    if (projectsPrev && projectsNext && projectsGrid && projectsDotsEl) {
        const cards = Array.from(projectsGrid.querySelectorAll('.project-card'));
        let currentIdx = 0;

        cards.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'projects-dot' + (i === 0 ? ' active' : '');
            projectsDotsEl.appendChild(dot);
        });

        function updateDots(idx) {
            projectsDotsEl.querySelectorAll('.projects-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
        }

        function scrollToCard(idx) {
            currentIdx = Math.max(0, Math.min(idx, cards.length - 1));
            const card = cards[currentIdx];
            const gridLeft = projectsGrid.getBoundingClientRect().left;
            const cardLeft = card.getBoundingClientRect().left;
            projectsGrid.style.scrollSnapType = 'none';
            projectsGrid.scrollBy({ left: cardLeft - gridLeft, behavior: 'smooth' });
            setTimeout(() => { projectsGrid.style.scrollSnapType = ''; }, 450);
            updateDots(currentIdx);
        }

        projectsPrev.addEventListener('click', () => scrollToCard(currentIdx - 1));
        projectsNext.addEventListener('click', () => scrollToCard(currentIdx + 1));

        projectsGrid.addEventListener('scroll', () => {
            const gridLeft = projectsGrid.getBoundingClientRect().left;
            let closest = 0, minDist = Infinity;
            cards.forEach((card, i) => {
                const dist = Math.abs(card.getBoundingClientRect().left - gridLeft);
                if (dist < minDist) { minDist = dist; closest = i; }
            });
            if (closest !== currentIdx) { currentIdx = closest; updateDots(currentIdx); }
        }, { passive: true });
    }
});
