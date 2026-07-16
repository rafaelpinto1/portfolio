// i18n.js — dicionário PT/EN e funções de internacionalização.
// Carregado via <script src="i18n.js"> antes de script.js.
(function (root) {
    'use strict';

    const I18N_DICT = {
        pt: {
            'nav.home': 'Início',
            'nav.research': 'Pesquisa',
            'nav.experience': 'Experiência',
            'nav.projects': 'Projetos',
            'nav.education': 'Formação',
            'nav.skills': 'Tecnologias',
            'nav.contact': 'Contato',
        },
        en: {
            'nav.home': 'Home',
            'nav.research': 'Research',
            'nav.experience': 'Experience',
            'nav.projects': 'Projects',
            'nav.education': 'Education',
            'nav.skills': 'Skills',
            'nav.contact': 'Contact',
        },
    };

    function getText(dict, lang, key) {
        if (dict[lang] && Object.prototype.hasOwnProperty.call(dict[lang], key)) {
            return dict[lang][key];
        }
        if (dict.pt && Object.prototype.hasOwnProperty.call(dict.pt, key)) {
            return dict.pt[key];
        }
        return key;
    }

    function resolveInitialLanguage(stored) {
        return stored === 'en' ? 'en' : 'pt';
    }

    function applyLanguage(lang, dict) {
        document.documentElement.lang = lang === 'en' ? 'en' : 'pt-br';
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const text = getText(dict, lang, key);
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        });
        document.querySelectorAll('.lang-toggle-btn').forEach((btn) => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });
        localStorage.setItem('lang', lang);
    }

    const api = { I18N_DICT, getText, resolveInitialLanguage, applyLanguage };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        root.I18N = api;
    }
})(typeof window !== 'undefined' ? window : globalThis);
