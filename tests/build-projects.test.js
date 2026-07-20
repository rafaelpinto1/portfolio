const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const {
    loadProjects,
    validateProject,
    generateFileContent,
    ALLOWED_TYPES,
    ALLOWED_THUMB_CLASSES,
} = require('../scripts/build-projects.js');

const FIXTURES_DIR = path.join(__dirname, 'fixtures', 'projetos-exemplo');

test('validateProject: aceita um projeto case-study completo', () => {
    const data = {
        id: 'ok', type: 'case-study', icon: 'fas fa-x', thumbClass: 'project-thumbnail--bi',
        pt: { title: 'T', status: 'S', context: 'C', approach: ['A'], result: 'R', tags: ['X'] },
        en: { title: 'T', status: 'S', context: 'C', approach: ['A'], result: 'R', tags: ['X'] },
    };
    assert.deepEqual(validateProject('ok', data, FIXTURES_DIR), []);
});

test('validateProject: rejeita id que não bate com o nome da pasta', () => {
    const data = {
        id: 'outro-nome', type: 'case-study', icon: 'fas fa-x', thumbClass: 'project-thumbnail--bi',
        pt: { title: 'T', status: 'S', context: 'C', approach: ['A'], result: 'R', tags: ['X'] },
        en: { title: 'T', status: 'S', context: 'C', approach: ['A'], result: 'R', tags: ['X'] },
    };
    const errors = validateProject('pasta-real', data, FIXTURES_DIR);
    assert.ok(errors.some((e) => e.includes('id')), 'deveria reportar erro de id');
});

test('validateProject: rejeita type fora da lista permitida', () => {
    const data = {
        id: 'ok', type: 'tipo-invalido', icon: 'fas fa-x', thumbClass: 'project-thumbnail--bi',
        pt: { title: 'T', status: 'S', desc: 'D', tags: ['X'] },
        en: { title: 'T', status: 'S', desc: 'D', tags: ['X'] },
    };
    const errors = validateProject('ok', data, FIXTURES_DIR);
    assert.ok(errors.some((e) => e.includes('type')));
});

test('validateProject: rejeita thumbClass fora da lista permitida', () => {
    const data = {
        id: 'ok', type: 'demo-external', demoUrl: 'https://x.com', icon: 'fas fa-x', thumbClass: 'cor-inventada',
        pt: { title: 'T', status: 'S', desc: 'D', tags: ['X'] },
        en: { title: 'T', status: 'S', desc: 'D', tags: ['X'] },
    };
    const errors = validateProject('ok', data, FIXTURES_DIR);
    assert.ok(errors.some((e) => e.includes('thumbClass')));
});

test('validateProject: demo-external sem demoUrl é inválido', () => {
    const data = {
        id: 'ok', type: 'demo-external', icon: 'fas fa-x', thumbClass: 'project-thumbnail--bi',
        pt: { title: 'T', status: 'S', desc: 'D', tags: ['X'] },
        en: { title: 'T', status: 'S', desc: 'D', tags: ['X'] },
    };
    const errors = validateProject('ok', data, FIXTURES_DIR);
    assert.ok(errors.some((e) => e.includes('demoUrl')));
});

test('validateProject: demo-local sem o arquivo demo/index.html é inválido', () => {
    const data = {
        id: 'invalido', type: 'demo-local', icon: 'fas fa-x', thumbClass: 'project-thumbnail--bi',
        pt: { title: 'T', status: 'S', desc: 'D', tags: ['X'] },
        en: { title: 'T', status: 'S', desc: 'D', tags: ['X'] },
    };
    // pasta "invalido" existe nas fixtures mas não tem subpasta demo/
    const errors = validateProject('invalido', data, FIXTURES_DIR);
    assert.ok(errors.some((e) => e.includes('demo/index.html')));
});

test('validateProject: case-study sem approach é inválido', () => {
    const data = {
        id: 'ok', type: 'case-study', icon: 'fas fa-x', thumbClass: 'project-thumbnail--bi',
        pt: { title: 'T', status: 'S', context: 'C', approach: [], result: 'R', tags: ['X'] },
        en: { title: 'T', status: 'S', context: 'C', approach: ['A'], result: 'R', tags: ['X'] },
    };
    const errors = validateProject('ok', data, FIXTURES_DIR);
    assert.ok(errors.some((e) => e.includes('approach')));
});

test('loadProjects: pasta de fixtures tem _modelo e a pasta inválida (checagem de sanidade das fixtures)', () => {
    const folders = require('node:fs').readdirSync(FIXTURES_DIR, { withFileTypes: true })
        .filter((e) => e.isDirectory()).map((e) => e.name);
    assert.ok(folders.includes('_modelo'));
    assert.ok(folders.includes('invalido'));
});

test('loadProjects: lança erro claro quando uma pasta tem project.json inválido', () => {
    assert.throws(() => loadProjects(FIXTURES_DIR), /invalido/);
});

test('loadProjects (sem a pasta inválida): retorna projetos ordenados por order, ignora _modelo', () => {
    const fs = require('node:fs');
    const os = require('node:os');
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'projetos-validos-'));
    ['_modelo', 'case-study-ok', 'demo-local-ok', 'demo-external-ok'].forEach((name) => {
        fs.cpSync(path.join(FIXTURES_DIR, name), path.join(tmpDir, name), { recursive: true });
    });
    const projects = loadProjects(tmpDir);
    assert.equal(projects.length, 3);
    assert.deepEqual(projects.map((p) => p.id), ['demo-local-ok', 'case-study-ok', 'demo-external-ok']);
    fs.rmSync(tmpDir, { recursive: true, force: true });
});

test('generateFileContent: produz um módulo válido com PROJECTS, renderCaseStudyHTML e renderProjectCardHTML', () => {
    const projects = [{
        id: 'x', type: 'case-study', icon: 'fas fa-x', thumbClass: 'project-thumbnail--bi',
        pt: { title: 'T', status: 'S', context: 'C', approach: ['A'], result: 'R', tags: ['Tag1'] },
        en: { title: 'T', status: 'S', context: 'C', approach: ['A'], result: 'R', tags: ['Tag1'] },
    }];
    const content = generateFileContent(projects);
    assert.match(content, /const PROJECTS = /);
    assert.match(content, /function renderCaseStudyHTML/);
    assert.match(content, /function renderProjectCardHTML/);
    assert.match(content, /module\.exports = api/);
});

test('ALLOWED_TYPES e ALLOWED_THUMB_CLASSES são exportados e não vazios', () => {
    assert.ok(Array.isArray(ALLOWED_TYPES) && ALLOWED_TYPES.length === 3);
    assert.ok(Array.isArray(ALLOWED_THUMB_CLASSES) && ALLOWED_THUMB_CLASSES.length === 4);
});
