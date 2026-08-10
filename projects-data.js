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
            "desc": "Dashboard em Power BI com DAX avançado, segmentação dinâmica e controle de acesso por linha.",
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
            "desc": "Power BI dashboard with advanced DAX, dynamic segmentation, and row-level security.",
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
            "desc": "Modelo de Machine Learning para prever risco de evasão de clientes com Scikit-learn.",
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
            "desc": "Machine Learning model to predict customer churn risk using Scikit-learn.",
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
            "desc": "Pipeline ETL em Python com logs estruturados e alertas automáticos de falha.",
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
            "desc": "Python ETL pipeline with structured logs and automatic failure alerts.",
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
            "desc": "Jogo de adivinhar número usado como repositório de prática de Git e GitHub.",
            "context": "Repositório de prática para consolidar o fluxo de versionamento com Git e GitHub. O jogo em si (adivinhar um número) veio pronto — o foco não era a lógica da aplicação, e sim o processo de trabalho em volta dela.",
            "approach": [
                "Organização do histórico em commits pequenos e descritivos",
                "Uso de branches para isolar mudanças antes de integrar",
                "Publicação do resultado via GitHub Pages"
            ],
            "result": "Repositório publicado e funcional, servindo como referência prática do fluxo de commits/branches/deploy usado nos demais projetos.",
            "tags": [
                "Git",
                "GitHub",
                "GitHub Pages"
            ]
        },
        "en": {
            "title": "Secret Number Game",
            "status": "Git · Learning",
            "desc": "A number-guessing game used as a Git/GitHub practice repository.",
            "context": "A practice repository for consolidating the Git and GitHub versioning workflow. The game itself (guess a number) was provided — the focus wasn't the app logic, but the working process around it.",
            "approach": [
                "Organized history into small, descriptive commits",
                "Used branches to isolate changes before merging",
                "Published the result via GitHub Pages"
            ],
            "result": "Published, working repository that serves as a practical reference for the commit/branch/deploy workflow used across other projects.",
            "tags": [
                "Git",
                "GitHub",
                "GitHub Pages"
            ]
        }
    },
    {
        "id": "cefet-robotica",
        "type": "demo-external",
        "order": 5,
        "icon": "fas fa-robot",
        "thumbClass": "project-thumbnail--ml",
        "demoUrl": "https://rafaelpinto1.github.io/cefet-robotica/",
        "pt": {
            "title": "Robô Terrestre Híbrido — Simulação 3D",
            "status": "Robótica · Arduino",
            "desc": "Simulação 3D de um robô terrestre com arquitetura híbrida de planejamento e desvio de obstáculos.",
            "context": "Trabalho final da disciplina de Aplicações de Robótica do mestrado: projetar um robô móvel terrestre que chegue a um ponto fixo em linha reta, mas também reaja a obstáculos que apareçam no caminho — o paradigma híbrido (planejamento + controle reativo) da disciplina. Nenhum kit pronto de robótica foi usado; todos os componentes foram escolhidos e conectados individualmente.",
            "approach": [
                "Arquitetura híbrida baseada no modelo AuRA: planejamento do alvo (3m em linha reta) + controle reativo a obstáculos",
                "Dead reckoning por encoders óticos nas 2 rodas motorizadas para estimar a distância percorrida",
                "4 sensores ultrassônicos (HC-SR04), um por face do chassi, para detectar obstáculos em qualquer direção",
                "Circuito com Arduino Uno, driver de motor L293D e motores DC com encoder",
                "Modelo 3D procedural em Three.js, rodando direto no navegador"
            ],
            "result": "Simulação interativa publicada, com o robô completando o trajeto de 3 metros e desviando de obstáculos detectados em tempo real.",
            "tags": [
                "Robótica",
                "Arduino",
                "Three.js",
                "Controle Híbrido"
            ]
        },
        "en": {
            "title": "Hybrid Ground Robot — 3D Simulation",
            "status": "Robotics · Arduino",
            "desc": "3D simulation of a ground robot with a hybrid planning and obstacle-avoidance architecture.",
            "context": "Final project for the Robotics Applications course of my master's program: design a mobile ground robot that reaches a fixed point in a straight line while also reacting to obstacles that appear along the way — the course's hybrid paradigm (deliberative planning + reactive control). No pre-made robotics kit was used; every component was chosen and wired individually.",
            "approach": [
                "Hybrid architecture based on the AuRA model: target planning (3m straight line) + reactive obstacle avoidance",
                "Encoder-based dead reckoning on both driven wheels to estimate distance traveled",
                "4 ultrasonic sensors (HC-SR04), one per chassis face, to detect obstacles from any direction",
                "Circuit built from an Arduino Uno, an L293D motor driver, and encoded DC motors",
                "Procedural 3D model in Three.js, running directly in the browser"
            ],
            "result": "Published interactive simulation, with the robot completing the 3-meter path and avoiding obstacles detected in real time.",
            "tags": [
                "Robotics",
                "Arduino",
                "Three.js",
                "Hybrid Control"
            ]
        }
    }
];

    function getDemoUrl(project) {
        if (project.type === 'demo-external') return project.demoUrl;
        if (project.type === 'demo-local') return 'projetos/' + project.id + '/demo/' + (project.demoEntry || 'index.html');
        return null;
    }

    function renderProjectDetailHTML(project, lang, footerHtml) {
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
                ${footerHtml}
            </div>
        `.trim();
    }

    function renderCaseStudyHTML(project, lang) {
        const l = CASE_STUDY_LABELS[lang] || CASE_STUDY_LABELS.pt;
        return renderProjectDetailHTML(project, lang, '<div class="cs-media-placeholder">📷 ' + l.mediaPlaceholder + '</div>');
    }

    function renderDemoIntroHTML(project, lang) {
        const label = lang === 'en' ? 'View live demo →' : 'Ver demo ao vivo →';
        return renderProjectDetailHTML(project, lang, '<button type="button" class="cs-open-demo-btn">' + label + '</button>');
    }

    function renderProjectCardHTML(project, lang) {
        const content = project[lang] || project.pt;
        const tagItems = content.tags.map((tag) => '<span class="project-tag">' + tag + '</span>').join('');
        const linkLabel = lang === 'en' ? 'View project →' : 'Ver projeto →';
        const desc = content.desc;
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

    const api = { PROJECTS, CASE_STUDY_LABELS, renderCaseStudyHTML, renderDemoIntroHTML, renderProjectCardHTML, getDemoUrl };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        root.ProjectsData = api;
    }
})(typeof window !== 'undefined' ? window : globalThis);
