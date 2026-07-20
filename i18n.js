// i18n.js — dicionário PT/EN e funções de internacionalização.
// Carregado via <script src="i18n.js"> antes de script.js.
(function (root) {
    'use strict';

    const I18N_DICT = {
        pt: {
            'nav.home': 'Início',
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
            'experience.title': 'Experiência',
            'exp1.role': 'Analista de Dados',
            'exp1.company': 'Multipla Tecnologia da Informação Ltda',
            'exp1.date': 'Fevereiro 2023 – Atual',
            'exp1.b1': 'Desenvolvimento de soluções de <strong>IA Generativa</strong> utilizando <strong>LLMs</strong>, <strong>RAG</strong> e <strong>AI Agents</strong>.',
            'exp1.b2': 'Desenvolvimento de aplicações e automações em <strong>Python</strong> com <strong>Git/GitHub</strong> e <strong>Azure DevOps</strong>.',
            'exp1.b3': 'Implementação de pipelines de dados e integrações utilizando <strong>Microsoft Fabric</strong>, APIs REST e <strong>Microsoft Graph API</strong>.',
            'exp1.b4': 'Administração de Capacities, Lakehouses, Data Pipelines e Semantic Models no <strong>Microsoft Fabric</strong>.',
            'exp1.b5': 'Desenvolvimento de soluções para monitoramento, governança e análise de consumo de ambientes Fabric.',
            'exp1.b6': 'Integração de dados corporativos provenientes de <strong>SQL Server</strong>, <strong>Oracle</strong> e outras fontes.',
            'exp1.b7': 'Monitoramento e observabilidade de ambientes de dados com <strong>Zabbix</strong> e <strong>Grafana</strong>.',
            'exp1.b8': 'Participação em projetos de Dados, Inteligência Artificial e Analytics para múltiplos clientes.',
            'exp2.role': 'Técnico de Suporte de TI',
            'exp2.company': 'LMG Bonfim Serviço e Apoio Administrativo Ltda',
            'exp2.date': 'Dezembro 2017 – Janeiro 2023',
            'exp2.b1': 'Elaboração de relatórios técnicos e acompanhamento de indicadores operacionais.',
            'exp2.b2': 'Suporte e integração de sistemas de PDV e infraestrutura remota.',
            'exp2.b3': 'Análise e tratamento de chamados técnicos em ambientes corporativos.',
            'exp3.role': 'Auxiliar Administrativo',
            'exp3.company': 'Inbrands S.A.',
            'exp3.date': 'Agosto 2015 – Dezembro 2017',
            'exp3.b1': 'Controle de inventário e emissão de relatórios em sistema ERP.',
            'exp3.b2': 'Apoio na manutenção de ativos e suporte básico de TI.',
            'resume.download': 'Baixar Currículo (PDF)',
            'resume.lattes': 'Currículo Lattes CNPq',
            'projects.title': 'Projetos',
            'projects.lgpd': '⚠️ Todos os projetos utilizam dados sintéticos e anonimizados em conformidade com a LGPD.',
            'projects.link': 'Ver projeto →',
            'education.title': 'Formação & Certificações',
            'edu1.title': 'Mestrado em Ciência da Computação',
            'edu1.subtitle': 'CEFET/RJ — ver detalhes na seção Pesquisa',
            'edu1.badge': 'Cursando · conclusão prevista 2028',
            'edu2.title': 'Pós-graduação em Ciência de Dados e Inteligência Artificial',
            'edu2.subtitle': 'UNISUAM – Centro Universitário Augusto Motta<br>(Concluído, Dez/2025)',
            'edu3.title': 'Graduação em Análise e Desenvolvimento de Sistemas',
            'edu3.subtitle': 'UNISUAM – Centro Universitário Augusto Motta<br>(Concluído, Dez/2024)',
            'edu4.title': 'Certificação Microsoft Azure AZ-900',
            'edu4.subtitle': 'Microsoft Corporation<br>(Concluído, 2026)',
            'edu5.title': 'Oracle AI Foundations Associate (1Z0-1195)',
            'edu5.subtitle': 'Oracle<br>(Concluído, 2025)',
            'skills.subtitle': 'Tecnologias & Ferramentas',
            'skills.cat1': 'Inteligência Artificial & Engenharia de IA',
            'skills.cat2': 'Engenharia de Dados & Analytics',
            'skills.cat3': 'Desenvolvimento & Integração de Sistemas',
            'skills.cat4': 'Automação & Integração de Processos',
            'skill.genAi': 'IA Generativa',
            'skill.promptEng': 'Eng. de Prompts',
            'skill.computerVision': 'Visão Computacional',
            'skill.advancedDax': 'DAX Avançado',
            'skill.advancedSql': 'SQL Avançado',
            'skill.english': 'Inglês B1',
            'contact.title': 'Contato',
            'contact.phoneLabel': 'Telefone',
            'contact.emailLabel': 'E-mail',
            'contact.whatsapp': 'Falar no WhatsApp',
            'contact.lattes': 'Acesse meu Currículo Lattes CNPq',
        },
        en: {
            'nav.home': 'Home',
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
            'experience.title': 'Experience',
            'exp1.role': 'Data Analyst',
            'exp1.company': 'Multipla Tecnologia da Informação Ltda',
            'exp1.date': 'February 2023 – Present',
            'exp1.b1': 'Development of <strong>Generative AI</strong> solutions using <strong>LLMs</strong>, <strong>RAG</strong>, and <strong>AI Agents</strong>.',
            'exp1.b2': 'Development of <strong>Python</strong> applications and automations with <strong>Git/GitHub</strong> and <strong>Azure DevOps</strong>.',
            'exp1.b3': 'Implementation of data pipelines and integrations using <strong>Microsoft Fabric</strong>, REST APIs, and <strong>Microsoft Graph API</strong>.',
            'exp1.b4': 'Administration of Capacities, Lakehouses, Data Pipelines, and Semantic Models in <strong>Microsoft Fabric</strong>.',
            'exp1.b5': 'Development of solutions for monitoring, governance, and consumption analysis of Fabric environments.',
            'exp1.b6': 'Integration of corporate data from <strong>SQL Server</strong>, <strong>Oracle</strong>, and other sources.',
            'exp1.b7': 'Monitoring and observability of data environments with <strong>Zabbix</strong> and <strong>Grafana</strong>.',
            'exp1.b8': 'Participation in Data, AI, and Analytics projects for multiple clients.',
            'exp2.role': 'IT Support Technician',
            'exp2.company': 'LMG Bonfim Serviço e Apoio Administrativo Ltda',
            'exp2.date': 'December 2017 – January 2023',
            'exp2.b1': 'Preparation of technical reports and tracking of operational indicators.',
            'exp2.b2': 'Support and integration of POS systems and remote infrastructure.',
            'exp2.b3': 'Analysis and handling of technical support tickets in corporate environments.',
            'exp3.role': 'Administrative Assistant',
            'exp3.company': 'Inbrands S.A.',
            'exp3.date': 'August 2015 – December 2017',
            'exp3.b1': 'Inventory control and reporting in ERP system.',
            'exp3.b2': 'Support for asset maintenance and basic IT support.',
            'resume.download': 'Download Resume (PDF)',
            'resume.lattes': 'Lattes CV (CNPq)',
            'projects.title': 'Projects',
            'projects.lgpd': '⚠️ All projects use synthetic, anonymized data in compliance with Brazil\'s LGPD (data protection law).',
            'projects.link': 'View project →',
            'education.title': 'Education & Certifications',
            'edu1.title': 'Master\'s in Computer Science',
            'edu1.subtitle': 'CEFET/RJ — see the Research section for details',
            'edu1.badge': 'In progress · expected completion 2028',
            'edu2.title': 'Postgraduate Degree in Data Science and Artificial Intelligence',
            'edu2.subtitle': 'UNISUAM – Centro Universitário Augusto Motta<br>(Completed, Dec/2025)',
            'edu3.title': 'Bachelor\'s in Systems Analysis and Development',
            'edu3.subtitle': 'UNISUAM – Centro Universitário Augusto Motta<br>(Completed, Dec/2024)',
            'edu4.title': 'Microsoft Azure AZ-900 Certification',
            'edu4.subtitle': 'Microsoft Corporation<br>(Completed, 2026)',
            'edu5.title': 'Oracle AI Foundations Associate (1Z0-1195)',
            'edu5.subtitle': 'Oracle<br>(Completed, 2025)',
            'skills.subtitle': 'Technologies & Tools',
            'skills.cat1': 'Artificial Intelligence & AI Engineering',
            'skills.cat2': 'Data Engineering & Analytics',
            'skills.cat3': 'Development & Systems Integration',
            'skills.cat4': 'Automation & Process Integration',
            'skill.genAi': 'Generative AI',
            'skill.promptEng': 'Prompt Engineering',
            'skill.computerVision': 'Computer Vision',
            'skill.advancedDax': 'Advanced DAX',
            'skill.advancedSql': 'Advanced SQL',
            'skill.english': 'English B1',
            'contact.title': 'Contact',
            'contact.phoneLabel': 'Phone',
            'contact.emailLabel': 'Email',
            'contact.whatsapp': 'Chat on WhatsApp',
            'contact.lattes': 'View my Lattes CV (CNPq)',
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
