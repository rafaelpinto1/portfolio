// projects-data.js — GERADO AUTOMATICAMENTE por scripts/build-projects.js a partir de projetos/**/project.json.
// NÃO EDITE ESTE ARQUIVO À MÃO — as mudanças serão sobrescritas no próximo build.
// Para adicionar/editar um projeto, edite a pasta correspondente em projetos/ e rode:
//   node scripts/build-projects.js
(function (root) {
    'use strict';

    const CASE_STUDY_LABELS = {
        pt: { context: 'Contexto', approach: 'Abordagem', result: 'Resultado', stack: 'Stack', mediaPlaceholder: 'Prints em breve', reportLink: 'Ver relatório de exemplo (PDF)' },
        en: { context: 'Context', approach: 'Approach', result: 'Result', stack: 'Stack', mediaPlaceholder: 'Screenshots coming soon', reportLink: 'View sample report (PDF)' },
    };

    const PROJECTS = [
    {
        "id": "numero-secreto",
        "type": "demo-external",
        "order": 1,
        "icon": "fab fa-git-alt",
        "thumbClass": "project-thumbnail--git",
        "thumbnailImg": "assets/thumbnail.png",
        "demoUrl": "https://rafaelpinto1.github.io/numero-secreto/",
        "pt": {
            "title": "Número Secreto",
            "status": "Git · Aprendizado",
            "desc": "Jogo de adivinhar número usado como repositório de prática de Git e GitHub.",
            "context": "Repositório de prática para consolidar o fluxo de versionamento com Git e GitHub. O jogo em si (adivinhar um número) já veio pronto; o trabalho foi no processo em volta dele: organização de commits, branches e deploy.",
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
            "context": "A practice repository for consolidating the Git and GitHub versioning workflow. The game itself (guess a number) was already provided; the work was in the process around it: commit organization, branches, and deploy.",
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
        "order": 2,
        "icon": "fas fa-robot",
        "thumbClass": "project-thumbnail--ml",
        "thumbnailImg": "assets/thumbnail.png",
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
    },
    {
        "id": "power-bi-people-analytics",
        "type": "case-study",
        "order": 3,
        "icon": "fas fa-user-graduate",
        "thumbClass": "project-thumbnail--bi",
        "thumbnailImg": "assets/thumbnail.png",
        "video": "assets/video.mp4",
        "pt": {
            "title": "People Analytics — Previsão e Simulação de Turnover",
            "status": "Power BI · People Analytics",
            "desc": "Painel que estima o risco de saída de cada funcionário e simula o retorno financeiro de ações de retenção antes da decisão ser tomada.",
            "context": "Modelagem calibrada contra o mercado de trabalho real, não \"bola de cristal\". Indicadores econômicos (Selic, IPCA, taxa de desemprego) vêm direto da API do Banco Central, atualizando a cada refresh, e o risco de saída de cada funcionário reage à taxa de desemprego real do mês.",
            "approach": [
                "Indicadores do Banco Central via API (SGS), atualizados a cada refresh do relatório",
                "Score de risco por funcionário com pesos calibrados por sinal (nota do gestor, tempo sem promoção, troca recente de gestor), calibrados por busca binária contra metas realistas de desligamento",
                "Simulador what-if: escolhe funcionário + ação (promoção, treinamento, aumento, férias) e recalcula risco antes/depois e a economia esperada (redução de risco × custo de reposição, menos custo da ação)",
                "Tela de Mercado & Risco com correlação de Pearson mês a mês validando a calibração",
                "Visão Geral com headcount, folha, desempenho médio e custo de reposição (heurística de 6 meses de salário)"
            ],
            "result": "Em teste real, uma funcionária com 41% de risco recebendo aumento de mérito teve o risco reduzido a quase zero, com economia esperada de ~R$ 7.500. Correlações validadas: -0,59 entre turnover e desemprego, +0,44 entre turnover voluntário e aquecimento de mercado.",
            "tags": [
                "Power BI",
                "DAX",
                "People Analytics",
                "API Banco Central",
                "Modelagem Estatística"
            ]
        },
        "en": {
            "title": "People Analytics — Turnover Forecasting & Simulation",
            "status": "Power BI · People Analytics",
            "desc": "A dashboard that estimates each employee's flight risk and simulates the financial return of retention actions before any decision is made.",
            "context": "Data modeling calibrated against the real labor market, not a crystal ball. Economic indicators (Selic rate, IPCA inflation, unemployment rate) come straight from the Brazilian Central Bank API, refreshing live, and each employee's exit risk reacts to the actual unemployment rate for the month.",
            "approach": [
                "Central Bank economic indicators via API (SGS), refreshed live with the report",
                "Per-employee risk score with calibrated weights per signal (last manager review score, time since promotion, recent manager change), calibrated via binary search against realistic attrition targets",
                "What-if simulator: pick an employee + an action (promotion, training, raise, vacation) and instantly recompute the before/after risk score plus the expected savings (risk reduction × replacement cost, minus the action's cost)",
                "Market & Risk screen with month-by-month Pearson correlation validating the calibration",
                "Overview screen with headcount, payroll, average performance, and replacement cost (a 6-months-of-salary heuristic)"
            ],
            "result": "In a real test run, an employee with a 41% risk score who received a merit raise had her risk reduced to nearly zero, with an expected savings of ~R$7,500. Validated correlations: -0.59 between turnover and unemployment, +0.44 between voluntary turnover and the market-heat index.",
            "tags": [
                "Power BI",
                "DAX",
                "People Analytics",
                "Central Bank API",
                "Statistical Modeling"
            ]
        }
    },
    {
        "id": "analisador-capacidade",
        "type": "case-study",
        "order": 4,
        "icon": "fas fa-gauge-high",
        "thumbClass": "project-thumbnail--etl",
        "thumbnailImg": "assets/thumbnail.png",
        "video": "assets/video.mp4",
        "report": "assets/relatorio-exemplo.pdf",
        "pt": {
            "title": "Microsoft Fabric — Analisador de Capacidade e Dimensionamento de SKU",
            "status": "Web App · Microsoft Fabric",
            "desc": "Transforma os logs brutos de consumo do Microsoft Fabric em um diagnóstico completo de capacidade — SKU ideal, riscos de throttling e relatório executivo em PDF, prontos em minutos.",
            "context": "Dimensionar uma capacidade Microsoft Fabric (Power BI Premium/Embedded) costuma ser decisão no escuro: contratar SKU de menos derruba refresh em produção por throttling, contratar de mais é orçamento jogado fora todo mês. Construí essa ferramenta para ler os arquivos de Capacity Metrics e Dataset Size que o próprio Fabric exporta e transformá-los automaticamente numa recomendação de dimensionamento — sem precisar cruzar planilha hora por hora.",
            "approach": [
                "Parsing de CSV/XLSX exportados dos apps Capacity Metrics e Dataset Size do Fabric, com visões por Operação, Dia, Período, Hora, 30min e 10min",
                "Cálculo da ocupação estimada do pool de memória por SKU (F2 a F2048) e detecção de conflitos de refresh simultâneo que estourariam a capacidade contratada",
                "Geração automática de relatório executivo em PDF (panorama geral, perfil de consumo, dimensionamento, inventário de workspaces e artefatos) pronto para apresentar ao cliente",
                "Agente de chat analítico com IA generativa que responde perguntas em linguagem natural sobre os dados carregados (refreshes, consumo de CU, SKU ideal)",
                "Front-end estático em JavaScript puro, com proxy Node.js local para geração de PDF (Puppeteer) e integrações opcionais com SharePoint"
            ],
            "result": "Usado internamente para diagnosticar a capacidade Fabric de múltiplos clientes: o que antes levava horas cruzando planilha vira um relatório executivo completo, pronto para apresentar, em poucos minutos.",
            "tags": [
                "Microsoft Fabric",
                "JavaScript",
                "Node.js",
                "IA Generativa",
                "Análise de Capacidade"
            ]
        },
        "en": {
            "title": "Microsoft Fabric — Capacity Analyzer & SKU Sizing",
            "status": "Web App · Microsoft Fabric",
            "desc": "Turns raw Microsoft Fabric consumption logs into a full capacity diagnosis — ideal SKU, throttling risks, and an executive PDF report, ready in minutes.",
            "context": "Sizing a Microsoft Fabric capacity (Power BI Premium/Embedded) is usually a decision made in the dark: undersizing crashes production refreshes with throttling, oversizing burns budget every month. I built this tool to read the Capacity Metrics and Dataset Size files Fabric itself exports and turn them automatically into a sizing recommendation — no need to cross-reference spreadsheets hour by hour.",
            "approach": [
                "Parses CSV/XLSX exports from Fabric's Capacity Metrics and Dataset Size apps, with views by Operation, Day, Period, Hour, 30-min, and 10-min windows",
                "Calculates estimated memory pool occupancy per SKU (F2 through F2048) and flags simultaneous-refresh conflicts that would exceed the contracted capacity",
                "Automatically generates an executive PDF report (overview, consumption profile, sizing, workspace/artifact inventory) ready to hand to the client",
                "Generative-AI analytical chat agent that answers natural-language questions about the loaded data (refreshes, CU consumption, ideal SKU)",
                "Static vanilla-JS front-end with a local Node.js proxy for PDF generation (Puppeteer) and optional SharePoint integrations"
            ],
            "result": "Used internally to diagnose Fabric capacity for multiple clients: what used to take hours of cross-referencing spreadsheets now becomes a full executive report, ready to present, in minutes.",
            "tags": [
                "Microsoft Fabric",
                "JavaScript",
                "Node.js",
                "Generative AI",
                "Capacity Analysis"
            ]
        }
    },
    {
        "id": "robotica-agricola-cafe",
        "type": "case-study",
        "order": 5,
        "icon": "fas fa-seedling",
        "thumbClass": "project-thumbnail--ml",
        "report": "assets/artigo.pdf",
        "pt": {
            "title": "Robótica Agrícola com Visão Computacional para Lavouras de Café",
            "status": "Revisão Bibliográfica · Mestrado CEFET/RJ",
            "desc": "Revisão bibliográfica que mapeia o estado da arte em robótica e visão computacional aplicadas ao monitoramento de lavouras de café, feita para a disciplina de Metodologia Científica do mestrado.",
            "context": "O Brasil é o maior produtor mundial de café e o setor enfrenta escassez crescente de mão de obra no monitoramento das lavouras. A pergunta de partida era simples: existe uma plataforma autônoma que percorra a lavoura antes da colheita para ajudar a decidir quando e onde colher? Este trabalho, feito em parceria com Helga Balbi para a disciplina de Metodologia Científica do mestrado no CEFET/RJ, testou essa hipótese com uma revisão sistemática da literatura.",
            "approach": [
                "Levantamento da fundamentação teórica: características espectrais do café por estágio fenológico e as arquiteturas de detecção por visão computacional (YOLO, Faster R-CNN)",
                "Busca complementar com string de busca estruturada, combinando termos de plataforma terrestre, maturação e produtividade, para checar se a lacuna hipotetizada já tinha sido preenchida",
                "Comparação sistemática dos trabalhos relacionados por plataforma (terrestre vs. aérea), autonomia e momento de operação (antes ou durante a colheita)",
                "Revisão crítica da própria hipótese inicial à luz da nova busca, em vez de forçar os resultados para confirmá-la"
            ],
            "result": "A hipótese inicial não se sustentou por completo: um grupo da ESALQ/USP já combina classificação de maturação com mapeamento de produtividade (84% de mAP, 81% de variância explicada), mas acoplado à colhedora mecânica, gerando um diagnóstico só depois da colheita. A lacuna real é mais estreita: falta juntar essa classificação com navegação autônoma independente da colhedora, para gerar o diagnóstico antes da decisão de colher.",
            "reportLabel": "Ler o artigo completo (PDF)",
            "tags": [
                "Revisão Bibliográfica",
                "Visão Computacional",
                "Robótica Agrícola",
                "Metodologia Científica",
                "CEFET/RJ"
            ]
        },
        "en": {
            "title": "Agricultural Robotics with Computer Vision for Coffee Farms",
            "status": "Literature Review · CEFET/RJ Master's",
            "desc": "A literature review mapping the state of the art in robotics and computer vision applied to coffee farm monitoring, written for the master's Scientific Methodology course.",
            "context": "Brazil is the world's largest coffee producer, and the sector faces growing labor shortages in farm monitoring. The starting question was simple: is there an autonomous platform that surveys the field before harvest to help decide when and where to pick? This work, done with Helga Balbi for the Scientific Methodology course of my master's at CEFET/RJ, tested that hypothesis with a systematic literature review.",
            "approach": [
                "Theoretical grounding: coffee's spectral characteristics by phenological stage and computer vision detection architectures (YOLO, Faster R-CNN)",
                "A complementary search with a structured query combining terrestrial-platform, maturity, and yield terms, to check whether the hypothesized gap had already been filled",
                "Systematic comparison of related work by platform (terrestrial vs. aerial), autonomy, and timing of operation (before or during harvest)",
                "Critical review of the original hypothesis in light of the new search, instead of forcing the results to confirm it"
            ],
            "result": "The initial hypothesis didn't fully hold up: a group from ESALQ/USP already combines maturity classification with yield mapping (84% mAP, 81% of variance explained), but coupled to the mechanical harvester, producing a diagnosis only after harvest. The real gap is narrower: it still needs to combine that classification with autonomous navigation independent of the harvester, to produce the diagnosis before the harvest decision.",
            "reportLabel": "Read the full paper (PDF)",
            "tags": [
                "Literature Review",
                "Computer Vision",
                "Agricultural Robotics",
                "Scientific Methodology",
                "CEFET/RJ"
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
        const content = project[lang] || project.pt;
        const reportLabel = content.reportLabel || l.reportLink;
        const media = project.video
            ? '<video class="cs-media-video" src="projetos/' + project.id + '/' + project.video + '" controls autoplay muted loop playsinline preload="auto"></video>'
            : '<div class="cs-media-placeholder">📷 ' + l.mediaPlaceholder + '</div>';
        const reportLink = project.report
            ? '<a class="cs-report-link" href="projetos/' + project.id + '/' + project.report + '" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf"></i> ' + reportLabel + '</a>'
            : '';
        return renderProjectDetailHTML(project, lang, media + reportLink);
    }

    function renderDemoIntroHTML(project, lang) {
        return renderProjectDetailHTML(project, lang, '');
    }

    function renderDemoFooterHTML(lang) {
        const label = lang === 'en' ? 'Open demo →' : 'Abrir demonstração →';
        const hint = lang === 'en'
            ? '💡 Tip: opening in a new tab gives the best experience.'
            : '💡 Dica: abrir em uma nova aba dá a melhor experiência.';
        return '<button type="button" class="cs-open-demo-btn">' + label + '</button>'
            + '<p class="cs-demo-hint">' + hint + '</p>';
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
        const thumbInner = project.thumbnailImg
            ? `<img src="projetos/${project.id}/${project.thumbnailImg}" alt="" loading="lazy">`
            : `<i class="${project.icon}"></i>`;
        return `
            <div class="project-card" data-project-id="${project.id}">
                <div class="project-thumbnail ${project.thumbClass}">${thumbInner}</div>
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

    const api = { PROJECTS, CASE_STUDY_LABELS, renderCaseStudyHTML, renderDemoIntroHTML, renderDemoFooterHTML, renderProjectCardHTML, getDemoUrl };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        root.ProjectsData = api;
    }
})(typeof window !== 'undefined' ? window : globalThis);
