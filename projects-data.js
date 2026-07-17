// projects-data.js — dados dos projetos exibidos na seção "Projetos".
// Carregado via <script src="projects-data.js"> antes de script.js.
(function (root) {
    'use strict';

    const CASE_STUDY_LABELS = {
        pt: { context: 'Contexto', approach: 'Abordagem', result: 'Resultado', stack: 'Stack', mediaPlaceholder: 'Prints em breve' },
        en: { context: 'Context', approach: 'Approach', result: 'Result', stack: 'Stack', mediaPlaceholder: 'Screenshots coming soon' },
    };

    const TAG_LABELS_EN = {
        'DAX Avançado': 'Advanced DAX',
        'Automação': 'Automation',
    };

    function translateTag(tag, lang) {
        if (lang === 'en' && Object.prototype.hasOwnProperty.call(TAG_LABELS_EN, tag)) {
            return TAG_LABELS_EN[tag];
        }
        return tag;
    }

    const PROJECTS = [
        {
            id: 'numero-secreto',
            type: 'external',
            url: 'https://rafaelpinto1.github.io/numero-secreto/',
            iconClass: 'fab fa-git-alt',
            thumbClass: 'project-thumbnail--git',
            statusPt: 'Git · Aprendizado',
            statusEn: 'Git · Learning',
            tags: ['Git', 'GitHub', 'GitHub Pages'],
            pt: {
                title: 'Número Secreto',
                desc: 'Jogo simples de adivinhar número utilizado como repositório de prática de versionamento com Git e GitHub. O projeto em si veio pronto — o foco foi o fluxo de commits, branches e publicação via GitHub Pages.',
            },
            en: {
                title: 'Secret Number Game',
                desc: 'A simple number-guessing game used as a practice repository for Git and GitHub versioning. The project itself was provided — the focus was the commit/branch workflow and publishing via GitHub Pages.',
            },
        },
        {
            id: 'dashboard-vendas',
            type: 'case-study',
            iconClass: 'fas fa-chart-bar',
            thumbClass: 'project-thumbnail--bi',
            statusPt: 'Power BI · DAX',
            statusEn: 'Power BI · DAX',
            tags: ['Power BI', 'SQL', 'DAX Avançado', 'KPIs', 'LGPD'],
            pt: {
                title: 'Dashboard de Vendas Interativo',
                context: 'Times comerciais dependiam da área de TI para relatórios de vendas atualizados, atrasando decisões.',
                approach: [
                    'Modelagem de dados em estrela com DAX avançado',
                    'Segmentação dinâmica de clientes via Power Query M',
                    'Análise de tendências e previsão de demanda',
                    'Controle de acesso por linha (RLS)',
                ],
                result: '[Métrica a confirmar — ex.: reduziu em X% o tempo de geração de relatórios]',
            },
            en: {
                title: 'Interactive Sales Dashboard',
                context: 'Sales teams depended on the IT department for updated sales reports, delaying decisions.',
                approach: [
                    'Star-schema data modeling with advanced DAX',
                    'Dynamic customer segmentation via Power Query M',
                    'Trend analysis and demand forecasting',
                    'Row-level security (RLS) access control',
                ],
                result: '[Metric to confirm — e.g., reduced report turnaround time by X%]',
            },
        },
        {
            id: 'churn-model',
            type: 'case-study',
            iconClass: 'fas fa-brain',
            thumbClass: 'project-thumbnail--ml',
            statusPt: 'Python · ML',
            statusEn: 'Python · ML',
            tags: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning', 'LGPD'],
            pt: {
                title: 'Modelo Preditivo de Churn',
                context: 'Alta rotatividade de clientes sem sinal de alerta antecipado para a equipe comercial.',
                approach: [
                    'Pré-processamento e engenharia de atributos com Pandas',
                    'Treinamento de classificador com Scikit-learn',
                    'Análise de importância de variáveis (feature importance)',
                    'Validação com métricas de negócio, não só técnicas',
                ],
                result: '[Métrica a confirmar — ex.: identificou X% dos casos de risco de evasão antes do cancelamento]',
            },
            en: {
                title: 'Customer Churn Prediction Model',
                context: 'High customer turnover with no early warning signal for the sales team.',
                approach: [
                    'Preprocessing and feature engineering with Pandas',
                    'Classifier training with Scikit-learn',
                    'Feature importance analysis',
                    'Validation against business metrics, not just technical ones',
                ],
                result: '[Metric to confirm — e.g., identified X% of at-risk customers before cancellation]',
            },
        },
        {
            id: 'etl-pipeline',
            type: 'case-study',
            iconClass: 'fas fa-cogs',
            thumbClass: 'project-thumbnail--etl',
            statusPt: 'Python · SQLite',
            statusEn: 'Python · SQLite',
            tags: ['Python', 'SQLite', 'ETL', 'Automação', 'LGPD'],
            pt: {
                title: 'Pipeline ETL Automatizado',
                context: 'Ingestão de logs feita manualmente, sem rastreabilidade nem alerta de falha.',
                approach: [
                    'Ingestão, transformação e carga estruturada em SQLite',
                    'Logs estruturados com rastreabilidade ponta a ponta',
                    'Alertas automáticos de falha no pipeline',
                ],
                result: '[Métrica a confirmar — ex.: reduziu em X% a intervenção manual no pipeline]',
            },
            en: {
                title: 'Automated ETL Pipeline',
                context: 'Log ingestion done manually, with no traceability or failure alerts.',
                approach: [
                    'Structured ingestion, transformation, and load into SQLite',
                    'Structured logs with end-to-end traceability',
                    'Automatic pipeline failure alerts',
                ],
                result: '[Metric to confirm — e.g., reduced manual pipeline intervention by X%]',
            },
        },
    ];

    function renderCaseStudyHTML(project, lang) {
        const l = CASE_STUDY_LABELS[lang] || CASE_STUDY_LABELS.pt;
        const content = project[lang] || project.pt;
        const approachItems = content.approach.map((step) => `<li>${step}</li>`).join('');
        const tagItems = project.tags.map((tag) => `<span class="project-tag">${translateTag(tag, lang)}</span>`).join('');
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

    const api = { PROJECTS, CASE_STUDY_LABELS, renderCaseStudyHTML, translateTag };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        root.ProjectsData = api;
    }
})(typeof window !== 'undefined' ? window : globalThis);
