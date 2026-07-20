// projects-data.js — GERADO AUTOMATICAMENTE por scripts/build-projects.js a partir de projetos/**/project.json.
// NÃO EDITE ESTE ARQUIVO À MÃO — as mudanças serão sobrescritas no próximo build.
// Para adicionar/editar um projeto, edite a pasta correspondente em projetos/ e rode:
//   node scripts/build-projects.js
(function (root) {
    'use strict';

    const CASE_STUDY_LABELS = {
        pt: { context: 'Contexto', approach: 'Abordagem', result: 'Resultado', stack: 'Stack', mediaPlaceholder: 'Prints em breve' },
        en: { context: 'Context', approach: 'Approach', result: 'Result', stack: 'Stack', mediaPlaceholder: 'Screenshots coming soon' },
    };

    const PROJECTS = [
    {
        "id": "dashboard-vendas",
        "type": "case-study",
        "order": 1,
        "icon": "fas fa-chart-bar",
        "thumbClass": "project-thumbnail--bi",
        "pt": {
            "title": "Dashboard de Vendas Interativo",
            "status": "Power BI · DAX",
            "context": "Times comerciais dependiam da área de TI para relatórios de vendas atualizados, atrasando decisões.",
            "approach": [
                "Modelagem de dados em estrela com DAX avançado",
                "Segmentação dinâmica de clientes via Power Query M",
                "Análise de tendências e previsão de demanda",
                "Controle de acesso por linha (RLS)"
            ],
            "result": "[Métrica a confirmar — ex.: reduziu em X% o tempo de geração de relatórios]",
            "tags": [
                "Power BI",
                "SQL",
                "DAX Avançado",
                "KPIs",
                "LGPD"
            ]
        },
        "en": {
            "title": "Interactive Sales Dashboard",
            "status": "Power BI · DAX",
            "context": "Sales teams depended on the IT department for updated sales reports, delaying decisions.",
            "approach": [
                "Star-schema data modeling with advanced DAX",
                "Dynamic customer segmentation via Power Query M",
                "Trend analysis and demand forecasting",
                "Row-level security (RLS) access control"
            ],
            "result": "[Metric to confirm — e.g., reduced report turnaround time by X%]",
            "tags": [
                "Power BI",
                "SQL",
                "Advanced DAX",
                "KPIs",
                "LGPD"
            ]
        }
    },
    {
        "id": "churn-model",
        "type": "case-study",
        "order": 2,
        "icon": "fas fa-brain",
        "thumbClass": "project-thumbnail--ml",
        "pt": {
            "title": "Modelo Preditivo de Churn",
            "status": "Python · ML",
            "context": "Alta rotatividade de clientes sem sinal de alerta antecipado para a equipe comercial.",
            "approach": [
                "Pré-processamento e engenharia de atributos com Pandas",
                "Treinamento de classificador com Scikit-learn",
                "Análise de importância de variáveis (feature importance)",
                "Validação com métricas de negócio, não só técnicas"
            ],
            "result": "[Métrica a confirmar — ex.: identificou X% dos casos de risco de evasão antes do cancelamento]",
            "tags": [
                "Python",
                "Scikit-learn",
                "Pandas",
                "Machine Learning",
                "LGPD"
            ]
        },
        "en": {
            "title": "Customer Churn Prediction Model",
            "status": "Python · ML",
            "context": "High customer turnover with no early warning signal for the sales team.",
            "approach": [
                "Preprocessing and feature engineering with Pandas",
                "Classifier training with Scikit-learn",
                "Feature importance analysis",
                "Validation against business metrics, not just technical ones"
            ],
            "result": "[Metric to confirm — e.g., identified X% of at-risk customers before cancellation]",
            "tags": [
                "Python",
                "Scikit-learn",
                "Pandas",
                "Machine Learning",
                "LGPD"
            ]
        }
    },
    {
        "id": "etl-pipeline",
        "type": "case-study",
        "order": 3,
        "icon": "fas fa-cogs",
        "thumbClass": "project-thumbnail--etl",
        "pt": {
            "title": "Pipeline ETL Automatizado",
            "status": "Python · SQLite",
            "context": "Ingestão de logs feita manualmente, sem rastreabilidade nem alerta de falha.",
            "approach": [
                "Ingestão, transformação e carga estruturada em SQLite",
                "Logs estruturados com rastreabilidade ponta a ponta",
                "Alertas automáticos de falha no pipeline"
            ],
            "result": "[Métrica a confirmar — ex.: reduziu em X% a intervenção manual no pipeline]",
            "tags": [
                "Python",
                "SQLite",
                "ETL",
                "Automação",
                "LGPD"
            ]
        },
        "en": {
            "title": "Automated ETL Pipeline",
            "status": "Python · SQLite",
            "context": "Log ingestion done manually, with no traceability or failure alerts.",
            "approach": [
                "Structured ingestion, transformation, and load into SQLite",
                "Structured logs with end-to-end traceability",
                "Automatic pipeline failure alerts"
            ],
            "result": "[Metric to confirm — e.g., reduced manual pipeline intervention by X%]",
            "tags": [
                "Python",
                "SQLite",
                "ETL",
                "Automation",
                "LGPD"
            ]
        }
    },
    {
        "id": "numero-secreto",
        "type": "demo-external",
        "order": 4,
        "icon": "fab fa-git-alt",
        "thumbClass": "project-thumbnail--git",
        "demoUrl": "https://rafaelpinto1.github.io/numero-secreto/",
        "pt": {
            "title": "Número Secreto",
            "status": "Git · Aprendizado",
            "desc": "Jogo simples de adivinhar número utilizado como repositório de prática de versionamento com Git e GitHub. O projeto em si veio pronto — o foco foi o fluxo de commits, branches e publicação via GitHub Pages.",
            "tags": [
                "Git",
                "GitHub",
                "GitHub Pages"
            ]
        },
        "en": {
            "title": "Secret Number Game",
            "status": "Git · Learning",
            "desc": "A simple number-guessing game used as a practice repository for Git and GitHub versioning. The project itself was provided — the focus was the commit/branch workflow and publishing via GitHub Pages.",
            "tags": [
                "Git",
                "GitHub",
                "GitHub Pages"
            ]
        }
    }
];

    function getDemoUrl(project) {
        if (project.type === 'demo-external') return project.demoUrl;
        if (project.type === 'demo-local') return 'projetos/' + project.id + '/demo/' + (project.demoEntry || 'index.html');
        return null;
    }

    function renderCaseStudyHTML(project, lang) {
        const l = CASE_STUDY_LABELS[lang] || CASE_STUDY_LABELS.pt;
        const content = project[lang] || project.pt;
        const approachItems = content.approach.map((step) => '<li>' + step + '</li>').join('');
        const tagItems = content.tags.map((tag) => '<span class="project-tag">' + tag + '</span>').join('');
        return `
            <div class="case-study">
                <section class="cs-block">
                    <h4 class="cs-label">${l.context}</h4>
                    <p>${content.context}</p>
                </section>
                <section class="cs-block">
                    <h4 class="cs-label">${l.approach}</h4>
                    <ul class="cs-approach-list">${approachItems}</ul>
                </section>
                <section class="cs-block">
                    <h4 class="cs-label">${l.result}</h4>
                    <p class="cs-result-placeholder">${content.result}</p>
                </section>
                <section class="cs-block">
                    <h4 class="cs-label">${l.stack}</h4>
                    <div class="project-tags">${tagItems}</div>
                </section>
                <div class="cs-media-placeholder">📷 ${l.mediaPlaceholder}</div>
            </div>
        `.trim();
    }

    function renderProjectCardHTML(project, lang) {
        const content = project[lang] || project.pt;
        const tagItems = content.tags.map((tag) => '<span class="project-tag">' + tag + '</span>').join('');
        const linkLabel = lang === 'en' ? 'View project →' : 'Ver projeto →';
        const desc = content.desc || content.context || '';
        let linkHref = '#';
        let linkAttrs = '';
        if (project.type !== 'case-study') {
            linkHref = getDemoUrl(project);
            linkAttrs = ' target="_blank" rel="noopener noreferrer"';
        }
        return `
            <div class="project-card" data-project-id="${project.id}">
                <div class="project-thumbnail ${project.thumbClass}"><i class="${project.icon}"></i></div>
                <div class="project-body">
                    <div class="project-header">
                        <h3 class="project-card-title">${content.title}</h3>
                        <span class="project-status">${content.status}</span>
                    </div>
                    <p class="project-card-desc">${desc}</p>
                    <div class="project-tags">${tagItems}</div>
                    <a href="${linkHref}" class="project-link"${linkAttrs}>${linkLabel}</a>
                </div>
            </div>
        `.trim();
    }

    const api = { PROJECTS, CASE_STUDY_LABELS, renderCaseStudyHTML, renderProjectCardHTML, getDemoUrl };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        root.ProjectsData = api;
    }
})(typeof window !== 'undefined' ? window : globalThis);
