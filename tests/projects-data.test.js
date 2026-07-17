const { test } = require('node:test');
const assert = require('node:assert/strict');
const { PROJECTS, renderCaseStudyHTML } = require('../projects-data.js');

test('PROJECTS: cada case study tem conteúdo pt e en completo', () => {
    const caseStudies = PROJECTS.filter((p) => p.type === 'case-study');
    assert.ok(caseStudies.length === 3, 'espera 3 case studies');
    caseStudies.forEach((p) => {
        ['pt', 'en'].forEach((lang) => {
            assert.ok(p[lang].context.length > 0, `${p.id} ${lang} context vazio`);
            assert.ok(Array.isArray(p[lang].approach) && p[lang].approach.length > 0, `${p.id} ${lang} approach vazio`);
            assert.ok(p[lang].result.length > 0, `${p.id} ${lang} result vazio`);
            assert.ok(Array.isArray(p.tags) && p.tags.length > 0, `${p.id} tags vazio`);
        });
    });
});

test('PROJECTS: projeto real (Número Secreto) não é case-study e tem link externo', () => {
    const real = PROJECTS.find((p) => p.id === 'numero-secreto');
    assert.equal(real.type, 'external');
    assert.match(real.url, /^https:\/\//);
});

test('renderCaseStudyHTML: inclui contexto, bullets de abordagem e tags no idioma pedido', () => {
    const project = PROJECTS.find((p) => p.id === 'dashboard-vendas');
    const htmlPt = renderCaseStudyHTML(project, 'pt');
    assert.match(htmlPt, new RegExp(project.pt.context));
    project.pt.approach.forEach((step) => assert.match(htmlPt, new RegExp(escapeRegExp(step))));
    project.tags.forEach((tag) => assert.match(htmlPt, new RegExp(`class="project-tag">${escapeRegExp(tag)}<`)));

    const htmlEn = renderCaseStudyHTML(project, 'en');
    assert.match(htmlEn, new RegExp(project.en.context));
});

function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

test('translateTag: traduz tags conhecidas para EN, mantém termos técnicos intactos', () => {
    const { translateTag } = require('../projects-data.js');
    assert.equal(translateTag('DAX Avançado', 'en'), 'Advanced DAX');
    assert.equal(translateTag('Automação', 'en'), 'Automation');
    assert.equal(translateTag('DAX Avançado', 'pt'), 'DAX Avançado');
    assert.equal(translateTag('Power BI', 'en'), 'Power BI');
});

test('renderCaseStudyHTML: tags traduzidas aparecem no HTML em inglês, não em português', () => {
    const dashboard = PROJECTS.find((p) => p.id === 'dashboard-vendas');
    const htmlEn = renderCaseStudyHTML(dashboard, 'en');
    assert.match(htmlEn, /Advanced DAX/);
    assert.doesNotMatch(htmlEn, /DAX Avançado/);

    const etl = PROJECTS.find((p) => p.id === 'etl-pipeline');
    const htmlEnEtl = renderCaseStudyHTML(etl, 'en');
    assert.match(htmlEnEtl, /Automation/);
    assert.doesNotMatch(htmlEnEtl, /Automação/);
});
