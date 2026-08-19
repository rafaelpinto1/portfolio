function resolveInitialTheme(stored) {
    return stored !== 'light';
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
    const toggle = document.getElementById('darkModeToggle');
    const saved  = localStorage.getItem('theme');

    function applyTheme(dark) {
        document.body.classList.toggle('dark', dark);
        if (toggle) toggle.checked = dark;
    }

    applyTheme(resolveInitialTheme(saved));

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

    // ==================== SCROLL REVEAL (com stagger por grupo) ====================
    const revealGroupCounts = new Map();
    function applyScrollReveal(elements) {
        elements.forEach(el => {
            if (el.classList.contains('fade-up')) return;
            const groupIdx = revealGroupCounts.get(el.parentElement) || 0;
            revealGroupCounts.set(el.parentElement, groupIdx + 1);
            el.classList.add('fade-up');
            el.style.transitionDelay = `${Math.min(groupIdx, 8) * 45}ms`;
            new IntersectionObserver((entries, obs) => {
                entries.forEach(e => {
                    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
                });
            }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }).observe(el);
        });
    }
    applyScrollReveal(document.querySelectorAll(
        '.card, .timeline-item, .about-text, .hero-content, .skill-badge, .skills-category'
    ));


    // ==================== PROJECTS: grid montado dinamicamente a partir de ProjectsData ====================
    function buildProjectCards(lang) {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;
        grid.innerHTML = ProjectsData.PROJECTS.map((p) => ProjectsData.renderProjectCardHTML(p, lang)).join('');
        applyScrollReveal(grid.querySelectorAll('.project-card'));
    }

    function updateProjectCardsText(lang) {
        document.querySelectorAll('.project-card').forEach((card) => {
            const id = card.dataset.projectId;
            const project = ProjectsData.PROJECTS.find((p) => p.id === id);
            if (!project) return;
            const content = project[lang] || project.pt;
            card.querySelector('.project-card-title').textContent = content.title;
            card.querySelector('.project-card-desc').textContent = content.desc || content.context;
            card.querySelector('.project-status').textContent = content.status;
            const tagsContainer = card.querySelector('.project-tags');
            if (tagsContainer) {
                tagsContainer.innerHTML = content.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join('');
            }
            const link = card.querySelector('.project-link');
            if (link) link.textContent = lang === 'en' ? 'View project →' : 'Ver projeto →';
        });
        const modalCloseBtn = document.getElementById('projectModalClose');
        const prevBtn = document.getElementById('projectsPrev');
        const nextBtn = document.getElementById('projectsNext');
        const isEn = lang === 'en';
        if (modalCloseBtn) modalCloseBtn.setAttribute('aria-label', isEn ? 'Close project' : 'Fechar projeto');
        if (prevBtn) prevBtn.setAttribute('aria-label', isEn ? 'Previous' : 'Anterior');
        if (nextBtn) nextBtn.setAttribute('aria-label', isEn ? 'Next' : 'Próximo');
    }

    const initialProjectsLang = I18N.resolveInitialLanguage(localStorage.getItem('lang'));
    buildProjectCards(initialProjectsLang);
    langPt && langPt.addEventListener('click', () => updateProjectCardsText('pt'));
    langEn && langEn.addEventListener('click', () => updateProjectCardsText('en'));

    // ==================== PROJECT MODAL (case study nativo, sem iframe) ====================
    const projectModal     = document.getElementById('projectModal');
    const projectModalBody = document.getElementById('projectModalBody');
    const projectModalFooter = document.getElementById('projectModalFooter');
    const projectModalTitle = document.getElementById('projectModalTitle');
    const projectModalClose = document.getElementById('projectModalClose');

    function currentLang() {
        return document.getElementById('langEn')?.classList.contains('active') ? 'en' : 'pt';
    }

    function clearModalFooter() {
        if (!projectModalFooter) return;
        projectModalFooter.innerHTML = '';
        projectModalFooter.classList.remove('active');
    }

    function renderCaseStudyModalContent(project, lang) {
        const content = project[lang] || project.pt;
        projectModalTitle.textContent = content.title;
        projectModalBody.classList.remove('project-modal-body--iframe');
        projectModalBody.innerHTML = ProjectsData.renderCaseStudyHTML(project, lang);
        clearModalFooter();
    }

    function renderDemoIntroModalContent(project, lang) {
        const content = project[lang] || project.pt;
        projectModalTitle.textContent = content.title;
        projectModalBody.classList.remove('project-modal-body--iframe');
        projectModalBody.innerHTML = ProjectsData.renderDemoIntroHTML(project, lang);
        // Botão de abrir a demo fica fixo no rodapé do modal (fora da área
        // que rola), então nunca fica escondido atrás de scroll.
        if (projectModalFooter) {
            projectModalFooter.innerHTML = ProjectsData.renderDemoFooterHTML(lang);
            projectModalFooter.classList.add('active');
            const demoBtn = projectModalFooter.querySelector('.cs-open-demo-btn');
            if (demoBtn) {
                demoBtn.addEventListener('click', () => renderDemoViewerModalContent(project, lang));
            }
        }
    }

    function renderDemoViewerModalContent(project, lang) {
        const content = project[lang] || project.pt;
        const demoUrl = ProjectsData.getDemoUrl(project);
        const openLabel = I18N.getText(I18N.I18N_DICT, lang, 'project.openNewTab');
        projectModalTitle.textContent = content.title;
        projectModalBody.classList.add('project-modal-body--iframe');
        projectModalBody.innerHTML = `
            <div class="browser-chrome">
                <span class="browser-chrome-dot browser-chrome-dot--red"></span>
                <span class="browser-chrome-dot browser-chrome-dot--yellow"></span>
                <span class="browser-chrome-dot browser-chrome-dot--green"></span>
                <span class="browser-chrome-url">${demoUrl}</span>
                <a href="${demoUrl}" target="_blank" rel="noopener noreferrer" class="browser-chrome-open-link">${openLabel}</a>
            </div>
            <iframe class="demo-viewer-iframe" src="${demoUrl}" title="${content.title}"></iframe>
        `;
        clearModalFooter();
    }

    // ==================== RESUME VIEWER (reaproveita o modal de projetos) ====================
    let modalShowingResume = false;

    function getResumeUrl(lang) {
        return lang === 'en'
            ? 'Rafael%20A.%20S.%20Pinto%20(EN).pdf'
            : 'Rafael%20A.%20S.%20Pinto.pdf';
    }

    function updateResumeDownloadLink(lang) {
        const link = document.getElementById('resumeDownloadLink');
        if (!link) return;
        link.setAttribute('href', getResumeUrl(lang));
        link.setAttribute('download', lang === 'en' ? 'Rafael_Pinto_Resume_EN.pdf' : 'Rafael_Pinto_Curriculo.pdf');
    }

    function renderResumeViewerModalContent(lang) {
        const resumeUrl = getResumeUrl(lang);
        const viewUrl = resumeUrl + '#view=FitV';
        const title = lang === 'en' ? 'Resume' : 'Currículo';
        const openLabel = I18N.getText(I18N.I18N_DICT, lang, 'project.openNewTab');
        const downloadName = lang === 'en' ? 'Rafael_Pinto_Resume_EN.pdf' : 'Rafael_Pinto_Curriculo.pdf';
        const downloadLabel = lang === 'en' ? 'Download PDF' : 'Baixar PDF';
        projectModalTitle.textContent = title;
        projectModalBody.classList.add('project-modal-body--iframe');
        projectModalBody.innerHTML = `
            <div class="browser-chrome">
                <span class="browser-chrome-dot browser-chrome-dot--red"></span>
                <span class="browser-chrome-dot browser-chrome-dot--yellow"></span>
                <span class="browser-chrome-dot browser-chrome-dot--green"></span>
                <span class="browser-chrome-url">${resumeUrl}</span>
                <a href="${viewUrl}" target="_blank" rel="noopener noreferrer" class="browser-chrome-open-link">${openLabel}</a>
            </div>
            <iframe class="demo-viewer-iframe" src="${viewUrl}" title="${title}"></iframe>
        `;
        if (projectModalFooter) {
            projectModalFooter.innerHTML = `<a href="${resumeUrl}" download="${downloadName}" class="cs-open-demo-btn"><i class="fas fa-file-pdf"></i> ${downloadLabel}</a>`;
            projectModalFooter.classList.add('active');
        }
    }

    function openResumeModal() {
        modalShowingResume = true;
        renderResumeViewerModalContent(currentLang());
        document.getElementById('projectModalBox')?.classList.add('project-modal-box--fullscreen');
        projectModal.removeAttribute('inert');
        projectModal.classList.add('open');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    const btnViewResume = document.getElementById('btnViewResume');
    if (btnViewResume) btnViewResume.addEventListener('click', openResumeModal);

    updateResumeDownloadLink(initialProjectsLang);
    langPt && langPt.addEventListener('click', () => {
        updateResumeDownloadLink('pt');
        if (modalShowingResume && projectModal.classList.contains('open')) renderResumeViewerModalContent('pt');
    });
    langEn && langEn.addEventListener('click', () => {
        updateResumeDownloadLink('en');
        if (modalShowingResume && projectModal.classList.contains('open')) renderResumeViewerModalContent('en');
    });

    function openProjectModal(project) {
        modalShowingResume = false;
        const lang = currentLang();
        if (project.type === 'case-study') {
            renderCaseStudyModalContent(project, lang);
        } else {
            renderDemoIntroModalContent(project, lang);
        }
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

        card.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal(project);
        });
    });

    projectModalClose.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (e) => { if (e.target === projectModal) closeProjectModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectModal(); });

    // Arrastar/swipe (touch) para trocar de slide — usado no carrossel de
    // projetos (mobile) e no de depoimentos.
    function addSwipeNav(el, onSwipeLeft, onSwipeRight) {
        let startX = 0;
        let startY = 0;
        let tracking = false;
        el.addEventListener('touchstart', (e) => {
            if (e.touches.length !== 1) return;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            tracking = true;
        }, { passive: true });
        el.addEventListener('touchend', (e) => {
            if (!tracking) return;
            tracking = false;
            const dx = e.changedTouches[0].clientX - startX;
            const dy = e.changedTouches[0].clientY - startY;
            if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
            if (dx < 0) onSwipeLeft(); else onSwipeRight();
        }, { passive: true });
    }

    // No mobile só um card fica visível por vez (a mesma ideia dos
    // Depoimentos); no desktop os cards aparecem lado a lado normalmente
    // e essa navegação por dots/setas fica sem efeito visual (CSS não usa
    // .active pra layout acima de 768px).
    function initProjectsSingleView() {
        const grid = document.getElementById('projectsGrid');
        const dotsEl = document.getElementById('projectsDots');
        const prevBtn = document.getElementById('projectsPrev');
        const nextBtn = document.getElementById('projectsNext');
        if (!grid || !dotsEl) return;
        const cards = Array.from(grid.querySelectorAll('.project-card'));
        if (cards.length === 0) return;
        let idx = 0;

        dotsEl.innerHTML = '';
        cards.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dotsEl.appendChild(dot);
        });

        function show(i) {
            idx = ((i % cards.length) + cards.length) % cards.length;
            cards.forEach((c, ci) => c.classList.toggle('active', ci === idx));
            dotsEl.querySelectorAll('.carousel-dot').forEach((d, di) => d.classList.toggle('active', di === idx));
        }

        if (prevBtn) prevBtn.onclick = () => show(idx - 1);
        if (nextBtn) nextBtn.onclick = () => show(idx + 1);
        addSwipeNav(grid, () => show(idx + 1), () => show(idx - 1));
        show(0);
    }
    initProjectsSingleView();

    // ==================== DEPOIMENTOS: carrossel montado a partir de TestimonialsData ====================
    function renderTestimonialCardHTML(t, lang) {
        const role = (t.role && (t.role[lang] || t.role.pt)) || '';
        const relationship = (t.relationship && (t.relationship[lang] || t.relationship.pt)) || '';
        const quote = (t.quote && (t.quote[lang] || t.quote.pt)) || '';
        const linkedinLabel = I18N.getText(I18N.I18N_DICT, lang, 'testimonials.linkedinCta');
        const dateLabel = t.date ? new Date(t.date + 'T00:00:00').toLocaleDateString(lang === 'en' ? 'en-US' : 'pt-BR', { year: 'numeric', month: 'long' }) : '';
        return `
            <div class="testimonial-card">
                <div class="testimonial-quote-col">
                    <span class="testimonial-quote-mark">&ldquo;</span>
                    <p class="testimonial-quote">${quote}</p>
                </div>
                <div class="testimonial-author">
                    <div class="testimonial-name">${t.name}</div>
                    <div class="testimonial-role">${role}</div>
                    <div class="testimonial-meta">${relationship}${dateLabel ? ' · ' + dateLabel : ''}</div>
                    <a href="${t.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="testimonial-linkedin">
                        <i class="fab fa-linkedin"></i> ${linkedinLabel}
                    </a>
                </div>
            </div>
        `.trim();
    }

    let testimonialsIdx = 0;
    let testimonialsAutoplayId = null;

    function buildTestimonialCards(lang) {
        const track = document.getElementById('testimonialsTrack');
        const dotsEl = document.getElementById('testimonialsDots');
        const prevBtn = document.getElementById('testimonialsPrev');
        const nextBtn = document.getElementById('testimonialsNext');
        if (!track || !dotsEl || typeof TestimonialsData === 'undefined') return;
        const items = TestimonialsData.TESTIMONIALS;

        track.innerHTML = items.map((t) => renderTestimonialCardHTML(t, lang)).join('');
        applyScrollReveal([track]);
        const cards = Array.from(track.querySelectorAll('.testimonial-card'));

        dotsEl.innerHTML = '';
        cards.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dotsEl.appendChild(dot);
        });

        function showSlide(idx) {
            testimonialsIdx = ((idx % cards.length) + cards.length) % cards.length;
            cards.forEach((c, i) => c.classList.toggle('active', i === testimonialsIdx));
            dotsEl.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === testimonialsIdx));
        }

        function stopAutoplay() {
            if (testimonialsAutoplayId) { clearInterval(testimonialsAutoplayId); testimonialsAutoplayId = null; }
        }

        function startAutoplay() {
            stopAutoplay();
            if (cards.length < 2) return;
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            testimonialsAutoplayId = setInterval(() => showSlide(testimonialsIdx + 1), 6000);
        }

        if (prevBtn) prevBtn.onclick = () => { showSlide(testimonialsIdx - 1); startAutoplay(); };
        if (nextBtn) nextBtn.onclick = () => { showSlide(testimonialsIdx + 1); startAutoplay(); };
        addSwipeNav(track, () => { showSlide(testimonialsIdx + 1); startAutoplay(); }, () => { showSlide(testimonialsIdx - 1); startAutoplay(); });
        track.addEventListener('mouseenter', stopAutoplay);
        track.addEventListener('mouseleave', startAutoplay);

        showSlide(Math.min(testimonialsIdx, cards.length - 1));
        startAutoplay();
    }

    buildTestimonialCards(initialProjectsLang);
    langPt && langPt.addEventListener('click', () => buildTestimonialCards('pt'));
    langEn && langEn.addEventListener('click', () => buildTestimonialCards('en'));
});
