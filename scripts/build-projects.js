// scripts/build-projects.js — regenera projects-data.js a partir de projetos/**/project.json.
// Uso: node scripts/build-projects.js
'use strict';

const fs = require('fs');
const path = require('path');

const PROJECTS_DIR = path.join(__dirname, '..', 'projetos');
const OUTPUT_FILE = path.join(__dirname, '..', 'projects-data.js');

const ALLOWED_TYPES = ['case-study', 'demo-local', 'demo-external'];
const ALLOWED_THUMB_CLASSES = [
    'project-thumbnail--bi',
    'project-thumbnail--ml',
    'project-thumbnail--etl',
    'project-thumbnail--git',
];
const IGNORED_FOLDERS = ['_modelo'];

function readProjectFolders(projectsDir) {
    return fs.readdirSync(projectsDir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .filter((name) => !IGNORED_FOLDERS.includes(name));
}

function validateProject(id, data, projectsDir) {
    const errors = [];

    if (data.id !== id) {
        errors.push(`"id" ("${data.id}") deve ser igual ao nome da pasta ("${id}")`);
    }
    if (!ALLOWED_TYPES.includes(data.type)) {
        errors.push(`"type" inválido: "${data.type}" (permitidos: ${ALLOWED_TYPES.join(', ')})`);
    }
    if (!data.icon) {
        errors.push('"icon" é obrigatório');
    }
    if (!ALLOWED_THUMB_CLASSES.includes(data.thumbClass)) {
        errors.push(`"thumbClass" inválido: "${data.thumbClass}" (permitidos: ${ALLOWED_THUMB_CLASSES.join(', ')})`);
    }

    ['pt', 'en'].forEach((lang) => {
        const content = data[lang];
        if (!content) {
            errors.push(`"${lang}" é obrigatório`);
            return;
        }
        if (!content.title) errors.push(`"${lang}.title" é obrigatório`);
        if (!content.status) errors.push(`"${lang}.status" é obrigatório`);
        if (!Array.isArray(content.tags) || content.tags.length === 0) {
            errors.push(`"${lang}.tags" deve ser uma lista não vazia`);
        }
        if (data.type === 'case-study') {
            if (!content.context) errors.push(`"${lang}.context" é obrigatório para type "case-study"`);
            if (!Array.isArray(content.approach) || content.approach.length === 0) {
                errors.push(`"${lang}.approach" deve ser uma lista não vazia para type "case-study"`);
            }
            if (!content.result) errors.push(`"${lang}.result" é obrigatório para type "case-study"`);
        } else if (!content.desc) {
            errors.push(`"${lang}.desc" é obrigatório para type "${data.type}"`);
        }
    });

    if (data.type === 'demo-external' && !data.demoUrl) {
        errors.push('"demoUrl" é obrigatório para type "demo-external"');
    }

    if (data.type === 'demo-local') {
        const entry = data.demoEntry || 'index.html';
        const entryPath = path.join(projectsDir, id, 'demo', entry);
        if (!fs.existsSync(entryPath)) {
            errors.push(`type "demo-local" requer o arquivo "demo/${entry}" dentro da pasta do projeto`);
        }
    }

    return errors;
}

function loadProjects(projectsDir) {
    const folders = readProjectFolders(projectsDir);
    const projects = [];

    folders.forEach((id) => {
        const jsonPath = path.join(projectsDir, id, 'project.json');
        if (!fs.existsSync(jsonPath)) return;

        let data;
        try {
            data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        } catch (err) {
            throw new Error(`Falha ao ler ${jsonPath}: ${err.message}`);
        }

        const errors = validateProject(id, data, projectsDir);
        if (errors.length > 0) {
            throw new Error(`Projeto inválido em "${id}/project.json":\n  - ${errors.join('\n  - ')}`);
        }

        projects.push(data);
    });

    projects.sort((a, b) => {
        const orderA = typeof a.order === 'number' ? a.order : Infinity;
        const orderB = typeof b.order === 'number' ? b.order : Infinity;
        if (orderA !== orderB) return orderA - orderB;
        return a.id.localeCompare(b.id);
    });

    return projects;
}

function generateFileContent(projects) {
    const projectsJson = JSON.stringify(projects, null, 4);
    return `// projects-data.js — GERADO AUTOMATICAMENTE por scripts/build-projects.js a partir de projetos/**/project.json.
// NÃO EDITE ESTE ARQUIVO À MÃO — as mudanças serão sobrescritas no próximo build.
// Para adicionar/editar um projeto, edite a pasta correspondente em projetos/ e rode:
//   node scripts/build-projects.js
(function (root) {
    'use strict';

    const CASE_STUDY_LABELS = {
        pt: { context: 'Contexto', approach: 'Abordagem', result: 'Resultado', stack: 'Stack', mediaPlaceholder: 'Prints em breve' },
        en: { context: 'Context', approach: 'Approach', result: 'Result', stack: 'Stack', mediaPlaceholder: 'Screenshots coming soon' },
    };

    const PROJECTS = ${projectsJson};

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
        return \`
            <div class="case-study">
                <section class="cs-block">
                    <h4 class="cs-label">\${l.context}</h4>
                    <p>\${content.context}</p>
                </section>
                <section class="cs-block">
                    <h4 class="cs-label">\${l.approach}</h4>
                    <ul class="cs-approach-list">\${approachItems}</ul>
                </section>
                <section class="cs-block">
                    <h4 class="cs-label">\${l.result}</h4>
                    <p class="cs-result-placeholder">\${content.result}</p>
                </section>
                <section class="cs-block">
                    <h4 class="cs-label">\${l.stack}</h4>
                    <div class="project-tags">\${tagItems}</div>
                </section>
                <div class="cs-media-placeholder">📷 \${l.mediaPlaceholder}</div>
            </div>
        \`.trim();
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
        return \`
            <div class="project-card" data-project-id="\${project.id}">
                <div class="project-thumbnail \${project.thumbClass}"><i class="\${project.icon}"></i></div>
                <div class="project-body">
                    <div class="project-header">
                        <h3 class="project-card-title">\${content.title}</h3>
                        <span class="project-status">\${content.status}</span>
                    </div>
                    <p class="project-card-desc">\${desc}</p>
                    <div class="project-tags">\${tagItems}</div>
                    <a href="\${linkHref}" class="project-link"\${linkAttrs}>\${linkLabel}</a>
                </div>
            </div>
        \`.trim();
    }

    const api = { PROJECTS, CASE_STUDY_LABELS, renderCaseStudyHTML, renderProjectCardHTML, getDemoUrl };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        root.ProjectsData = api;
    }
})(typeof window !== 'undefined' ? window : globalThis);
`;
}

function build() {
    const projects = loadProjects(PROJECTS_DIR);
    const content = generateFileContent(projects);
    fs.writeFileSync(OUTPUT_FILE, content, 'utf8');
    console.log(`projects-data.js gerado com ${projects.length} projeto(s).`);
    return { projects, content };
}

module.exports = {
    loadProjects,
    validateProject,
    generateFileContent,
    build,
    ALLOWED_TYPES,
    ALLOWED_THUMB_CLASSES,
};

if (require.main === module) {
    try {
        build();
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
