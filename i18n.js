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
            'nav.testimonials': 'Depoimentos',
            'nav.contact': 'Contato',
            'brand.title': 'Portfólio Profissional',
            'footer.copyright': '&copy; 2026 Rafael Pinto – Portfólio de dados. Todos os direitos reservados.',
            'hero.greeting': 'Olá, eu sou',
            'hero.bio1': 'Especialista em Dados, Microsoft Fabric & IA Generativa. Trabalho com <strong>Microsoft Fabric</strong>, <strong>Power BI</strong>, <strong>Python</strong> e <strong>PostgreSQL</strong> para construir pipelines de dados eficientes e modelos de IA em produção.',
            'hero.bio2': 'Mestrando em Ciência da Computação com pesquisa em <strong>TinyML</strong> no CEFET/RJ — investigando eficiência em hardware limitado. Essa pesquisa conecta-se diretamente com meu trabalho de produção: otimizar custo, latência e consumo de recursos em sistemas de dados e IA.',
            'hero.bio3': 'Atuo na interseção entre dados, Microsoft Fabric e IA, construindo tanto os modelos quanto os pipelines que os colocam em produção.',
            'hero.badge1': 'Dados, Fabric & IA',
            'hero.badge2': 'Mestrando · CEFET/RJ',
            'hero.badge3': 'Microsoft Fabric',
            'hero.ctaProjects': 'Ver projetos →',
            'hero.ctaLinkedin': 'LinkedIn →',
            'hero.ctaContact': 'Contato →',
            'research.title': 'Pesquisa Acadêmica',
            'research.cardTitle': 'Mestrado em Ciência da Computação — CEFET/RJ',
            'research.cardLine': 'Linha de pesquisa: TinyML (Tiny Machine Learning)',
            'research.badge': 'Cursando · conclusão prevista 2028',
            'research.body': 'Minha pesquisa em TinyML investiga como comprimir e otimizar modelos de Machine Learning para rodar em hardware extremamente limitado: microcontroladores com poucos kilobytes de RAM e sensores IoT sem GPU, sem nuvem, com consumo mínimo de energia. Aplico a mesma disciplina de eficiência no trabalho: reduzir tokens em chamadas a LLMs, processar embeddings mais rápido, rodar modelos com poucos recursos. As técnicas de otimização que estudo no mestrado são as mesmas que uso para resolver esses problemas em produção.',
            'research.tag1': 'TinyML',
            'research.tag2': 'ML Embarcado',
            'research.tag3': 'IoT',
            'research.tag4': 'Aprendizado de Máquina',
            'research.cta': 'Ver Currículo Lattes →',
            'experience.title': 'Experiência',
            'exp1.role': 'Analista de Dados',
            'exp1.company': 'Multipla Tecnologia da Informação Ltda',
            'exp1.date': 'Janeiro 2023 – Atual',
            'exp1.b0': 'Entrei como <strong>Técnico de Suporte de TI</strong> em Janeiro de 2023 e evoluí para <strong>Analista de Dados</strong> em Setembro de 2025, migrando o foco do trabalho para dados e IA.',
            'exp1.b1': 'Colaboração no desenvolvimento de soluções de <strong>IA Generativa</strong> com <strong>LLMs</strong>, <strong>RAG</strong>, <strong>LangSmith</strong> e <strong>AI Agents</strong> usando <strong>Node.js 18/20</strong> e <strong>Azure Functions</strong>.',
            'exp1.b2': 'Contribuição em pipelines backend com <strong>PostgreSQL 18 + pgvector</strong>, embeddings e <strong>Azure AD B2C</strong>, aplicações <strong>Python</strong> com <strong>Git/GitHub</strong> e <strong>Azure DevOps</strong>.',
            'exp1.b3': 'Implementação de pipelines de dados e integrações em <strong>Microsoft Fabric</strong> (Capacities, Lakehouses, Data Pipelines, Semantic Models, Direct Lake) com APIs REST e <strong>Microsoft Graph API</strong>.',
            'exp1.b4': 'Administração de Capacities, Lakehouses, Data Pipelines e Semantic Models no <strong>Microsoft Fabric</strong> em ambiente de produção multi-tenant.',
            'exp1.b5': 'Desenvolvimento de motor de observabilidade com <strong>LangSmith</strong>, <strong>Sentry</strong>, <strong>Redis/ioredis</strong> para rastreamento de chamadas de IA e erros em produção.',
            'exp1.b6': 'Integração de dados corporativos provenientes de <strong>SQL Server</strong>, <strong>Oracle</strong> e outras fontes.',
            'exp1.b7': 'Monitoramento e observabilidade de ambientes de dados com <strong>Zabbix</strong>, <strong>Grafana</strong> e múltiplos ambientes (dev/beta/staging/production).',
            'exp1.b8': 'Desenvolvimento de features de <strong>IA</strong> para sistema de dados proprietário (arquitetura de monorepo, 4 subprojetos) que ingere e exibe dados de <strong>Power BI</strong>, <strong>Grafana</strong> e documentos do <strong>SharePoint</strong>, usado por múltiplos clientes em varejo, serviços e tecnologia.',
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
            'resume.view': 'Visualizar Currículo',
            'resume.download': 'Baixar Currículo (PDF)',
            'resume.lattes': 'Currículo Lattes CNPq',
            'projects.title': 'Projetos',
            'projects.lgpd': '⚠️ Todos os projetos utilizam dados sintéticos e anonimizados em conformidade com a LGPD.',
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
            'edu5.title': 'Oracle Data Platform 2025 Certified Foundations Associate',
            'edu5.subtitle': 'Oracle<br>(Concluído, 2025)',
            'edu6.title': 'AWS Academy Graduate — Cloud Foundations',
            'edu6.subtitle': 'AWS Academy',
            'edu7.title': 'Introduction to Cybersecurity',
            'edu7.subtitle': 'Cisco Networking Academy',
            'skills.subtitle': 'Tecnologias & Ferramentas',
            'skills.cat1': 'Inteligência Artificial & Engenharia de IA',
            'skills.cat2': 'Engenharia de Dados & Analytics',
            'skills.cat3': 'Integração de Sistemas & APIs',
            'skills.cat4': 'Automação & Integração de Processos',
            'skill.genAi': 'IA Generativa',
            'skill.promptEng': 'Eng. de Prompts',
            'skill.computerVision': 'Visão Computacional',
            'skill.advancedDax': 'DAX Avançado',
            'skill.advancedSql': 'SQL Avançado',
            'skill.english': 'Inglês B1',
            'testimonials.title': 'O que dizem sobre mim',
            'testimonials.linkedinCta': 'Ver no LinkedIn',
            'contact.title': 'Contato',
            'contact.phoneLabel': 'Telefone',
            'contact.emailLabel': 'E-mail',
            'contact.whatsapp': 'Falar no WhatsApp',
            'contact.lattes': 'Acesse meu Currículo Lattes CNPq',
            'project.openNewTab': 'Abrir em nova aba',
        },
        en: {
            'nav.home': 'Home',
            'nav.experience': 'Experience',
            'nav.projects': 'Projects',
            'nav.education': 'Education',
            'nav.skills': 'Skills',
            'nav.testimonials': 'Testimonials',
            'nav.contact': 'Contact',
            'brand.title': 'Professional Portfolio',
            'footer.copyright': '&copy; 2026 Rafael Pinto – Data portfolio. All rights reserved.',
            'hero.greeting': 'Hi, I\'m',
            'hero.bio1': 'Specialist in Data, Microsoft Fabric & Generative AI. I work with <strong>Microsoft Fabric</strong>, <strong>Power BI</strong>, <strong>Python</strong>, and <strong>PostgreSQL</strong> to build efficient data pipelines and production AI models.',
            'hero.bio2': 'M.Sc. candidate in Computer Science researching <strong>TinyML</strong> at CEFET/RJ — investigating efficiency in constrained hardware. This research connects directly to my production work: optimizing cost, latency, and resource consumption in data and AI systems.',
            'hero.bio3': 'I work at the intersection of data, Microsoft Fabric, and AI, building both the models and the pipelines that put them into production.',
            'hero.badge1': 'Data, Fabric & AI',
            'hero.badge2': 'M.Sc. candidate · CEFET/RJ',
            'hero.badge3': 'Microsoft Fabric',
            'hero.ctaProjects': 'View projects →',
            'hero.ctaLinkedin': 'LinkedIn →',
            'hero.ctaContact': 'Contact →',
            'research.title': 'Academic Research',
            'research.cardTitle': 'M.Sc. in Computer Science — CEFET/RJ',
            'research.cardLine': 'Research line: TinyML (Tiny Machine Learning)',
            'research.badge': 'In progress · expected completion 2028',
            'research.body': 'My research in TinyML investigates how to compress and optimize ML models to run on extremely constrained hardware: microcontrollers with just kilobytes of RAM, IoT sensors without GPU or cloud access, minimal power draw. I apply the same efficiency discipline at work: cutting token costs on LLM calls, processing embeddings faster, running models on limited resources. The optimization techniques I study in my master\'s are the same ones I use to solve those problems in production.',
            'research.tag1': 'TinyML',
            'research.tag2': 'Embedded ML',
            'research.tag3': 'IoT',
            'research.tag4': 'Machine Learning',
            'research.cta': 'View Lattes CV →',
            'experience.title': 'Experience',
            'exp1.role': 'Data Analyst',
            'exp1.company': 'Multipla Tecnologia da Informação Ltda',
            'exp1.date': 'January 2023 – Present',
            'exp1.b0': 'Joined as <strong>IT Support Technician</strong> in January 2023 and progressed to <strong>Data Analyst</strong> in September 2025, shifting the focus of my work toward data and AI.',
            'exp1.b1': 'Collaborated on <strong>Generative AI</strong> solutions with <strong>LLMs</strong>, <strong>RAG</strong>, <strong>LangSmith</strong>, and <strong>AI Agents</strong> using <strong>Node.js 18/20</strong> and <strong>Azure Functions</strong>.',
            'exp1.b2': 'Contributed to backend pipelines with <strong>PostgreSQL 18 + pgvector</strong>, embeddings, and <strong>Azure AD B2C</strong>, <strong>Python</strong> applications with <strong>Git/GitHub</strong> and <strong>Azure DevOps</strong>.',
            'exp1.b3': 'Implemented data pipelines and integrations in <strong>Microsoft Fabric</strong> (Capacities, Lakehouses, Data Pipelines, Semantic Models, Direct Lake) with REST APIs and <strong>Microsoft Graph API</strong>.',
            'exp1.b4': 'Administered Capacities, Lakehouses, Data Pipelines, and Semantic Models in <strong>Microsoft Fabric</strong> in multi-tenant production environments.',
            'exp1.b5': 'Developed observability engine with <strong>LangSmith</strong>, <strong>Sentry</strong>, <strong>Redis/ioredis</strong> for tracing AI calls and production errors.',
            'exp1.b6': 'Integrated corporate data from <strong>SQL Server</strong>, <strong>Oracle</strong>, and other sources.',
            'exp1.b7': 'Implemented monitoring and observability for data environments with <strong>Zabbix</strong>, <strong>Grafana</strong> across dev/beta/staging/production environments.',
            'exp1.b8': 'Developed <strong>AI</strong> features for a proprietary data platform (monorepo architecture, 4 sub-projects) that ingests and displays data from <strong>Power BI</strong>, <strong>Grafana</strong>, and <strong>SharePoint</strong> documents, used by multiple clients across retail, services, and technology sectors.',
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
            'resume.view': 'View Resume',
            'resume.download': 'Download Resume (PDF)',
            'resume.lattes': 'Lattes CV (CNPq)',
            'projects.title': 'Projects',
            'projects.lgpd': '⚠️ All projects use synthetic, anonymized data in compliance with Brazil\'s LGPD (data protection law).',
            'education.title': 'Education & Certifications',
            'edu1.title': 'M.Sc. in Computer Science',
            'edu1.subtitle': 'CEFET/RJ — see the Research section for details',
            'edu1.badge': 'In progress · expected completion 2028',
            'edu2.title': 'Postgraduate Degree in Data Science and Artificial Intelligence',
            'edu2.subtitle': 'UNISUAM – Centro Universitário Augusto Motta<br>(Completed, Dec/2025)',
            'edu3.title': 'Bachelor\'s in Systems Analysis and Development',
            'edu3.subtitle': 'UNISUAM – Centro Universitário Augusto Motta<br>(Completed, Dec/2024)',
            'edu4.title': 'Microsoft Azure AZ-900 Certification',
            'edu4.subtitle': 'Microsoft Corporation<br>(Completed, 2026)',
            'edu5.title': 'Oracle Data Platform 2025 Certified Foundations Associate',
            'edu5.subtitle': 'Oracle<br>(Completed, 2025)',
            'edu6.title': 'AWS Academy Graduate — Cloud Foundations',
            'edu6.subtitle': 'AWS Academy',
            'edu7.title': 'Introduction to Cybersecurity',
            'edu7.subtitle': 'Cisco Networking Academy',
            'skills.subtitle': 'Technologies & Tools',
            'skills.cat1': 'Artificial Intelligence & AI Engineering',
            'skills.cat2': 'Data Engineering & Analytics',
            'skills.cat3': 'Systems Integration & APIs',
            'skills.cat4': 'Automation & Process Integration',
            'skill.genAi': 'Generative AI',
            'skill.promptEng': 'Prompt Engineering',
            'skill.computerVision': 'Computer Vision',
            'skill.advancedDax': 'Advanced DAX',
            'skill.advancedSql': 'Advanced SQL',
            'skill.english': 'English B1',
            'testimonials.title': 'What people say about me',
            'testimonials.linkedinCta': 'View on LinkedIn',
            'contact.title': 'Contact',
            'contact.phoneLabel': 'Phone',
            'contact.emailLabel': 'Email',
            'contact.whatsapp': 'Chat on WhatsApp',
            'contact.lattes': 'View my Lattes CV (CNPq)',
            'project.openNewTab': 'Open in new tab',
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
