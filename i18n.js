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
            'brand.title': 'Portfólio Profissional',
            'footer.copyright': '&copy; 2026 Rafael Pinto – Portfólio de dados. Todos os direitos reservados.',
            'hero.greeting': 'Olá, eu sou',
            'hero.bio1': 'Atuo com Dados e Inteligência Artificial, unindo <strong>Microsoft Fabric</strong>, <strong>Python</strong> e <strong>IA Generativa</strong> (LLMs, RAG, AI Agents) para transformar dados corporativos em decisões e produtos inteligentes.',
            'hero.bio2': 'Pesquisador em <strong>TinyML (Tiny Machine Learning)</strong> no CEFET/RJ, com pós-graduação em Ciência de Dados & IA e certificações Microsoft Azure e Oracle AI.',
            'hero.bio3': 'Meu foco é uma posição de mercado em Dados & IA, com a pesquisa em TinyML como diferencial competitivo.',
            'hero.badge1': '3+ anos em Dados & IA',
            'hero.badge2': 'Mestrando · CEFET/RJ',
            'hero.badge3': 'Microsoft Fabric',
            'hero.stat1Num': '3+',
            'hero.stat1Label': 'Anos de experiência',
            'hero.stat2Num': '2',
            'hero.stat2Label': 'Certificações',
            'hero.ctaProjects': 'Ver projetos →',
            'hero.ctaLinkedin': 'LinkedIn →',
            'hero.ctaContact': 'Contato →',
            'research.eyebrow': 'Pesquisa',
            'research.title': 'Pesquisa Acadêmica',
            'research.cardTitle': 'Mestrado em Ciência da Computação — CEFET/RJ',
            'research.cardLine': 'Linha de pesquisa: TinyML (Tiny Machine Learning)',
            'research.badge': 'Cursando · conclusão prevista 2028',
            'research.body': 'Minha pesquisa em TinyML investiga como comprimir e otimizar modelos de Machine Learning para rodar em hardware com memória extremamente limitada — microcontroladores com poucos kilobytes de RAM e sensores IoT sem GPU, sem nuvem e com baixíssimo consumo de energia. É a mesma disciplina de eficiência que aplico no mercado: pipelines de dados e modelos de IA mais leves, rápidos e baratos de operar em produção.',
            'research.tag1': 'TinyML',
            'research.tag2': 'ML Embarcado',
            'research.tag3': 'IoT',
            'research.tag4': 'Aprendizado de Máquina',
            'research.cta': 'Ver Currículo Lattes →',
        },
        en: {
            'nav.home': 'Home',
            'nav.research': 'Research',
            'nav.experience': 'Experience',
            'nav.projects': 'Projects',
            'nav.education': 'Education',
            'nav.skills': 'Skills',
            'nav.contact': 'Contact',
            'brand.title': 'Professional Portfolio',
            'footer.copyright': '&copy; 2026 Rafael Pinto – Data portfolio. All rights reserved.',
            'hero.greeting': 'Hi, I\'m',
            'hero.bio1': 'I work with Data and Artificial Intelligence, combining <strong>Microsoft Fabric</strong>, <strong>Python</strong>, and <strong>Generative AI</strong> (LLMs, RAG, AI Agents) to turn corporate data into decisions and intelligent products.',
            'hero.bio2': 'I research <strong>TinyML (Tiny Machine Learning)</strong> at CEFET/RJ, hold a postgraduate degree in Data Science & AI, and am certified in Microsoft Azure and Oracle AI.',
            'hero.bio3': 'My focus is a market role in Data & AI, with TinyML research as a competitive edge.',
            'hero.badge1': '3+ years in Data & AI',
            'hero.badge2': 'Master\'s student · CEFET/RJ',
            'hero.badge3': 'Microsoft Fabric',
            'hero.stat1Num': '3+',
            'hero.stat1Label': 'Years of experience',
            'hero.stat2Num': '2',
            'hero.stat2Label': 'Certifications',
            'hero.ctaProjects': 'View projects →',
            'hero.ctaLinkedin': 'LinkedIn →',
            'hero.ctaContact': 'Contact →',
            'research.eyebrow': 'Research',
            'research.title': 'Academic Research',
            'research.cardTitle': 'Master\'s in Computer Science — CEFET/RJ',
            'research.cardLine': 'Research line: TinyML (Tiny Machine Learning)',
            'research.badge': 'In progress · expected completion 2028',
            'research.body': 'My research in TinyML investigates how to compress and optimize Machine Learning models to run on hardware with extremely limited memory — microcontrollers with just kilobytes of RAM and IoT sensors with no GPU, no cloud, and very low power consumption. It\'s the same discipline of efficiency I apply in industry: leaner, faster, and cheaper data pipelines and AI models to run in production.',
            'research.tag1': 'TinyML',
            'research.tag2': 'Embedded ML',
            'research.tag3': 'IoT',
            'research.tag4': 'Machine Learning',
            'research.cta': 'View Lattes CV →',
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
