const { test } = require('node:test');
const assert = require('node:assert/strict');
const { PROJECTS, renderCaseStudyHTML, renderDemoIntroHTML, renderProjectCardHTML, getDemoUrl } = require('../projects-data.js');

test('PROJECTS: todo projeto (case-study ou demo) tem conteúdo pt e en completo', () => {
    assert.ok(PROJECTS.length >= 4);
    PROJECTS.forEach((p) => {
        ['pt', 'en'].forEach((lang) => {
            assert.ok(p[lang].desc.length > 0, `${p.id} ${lang} desc vazio`);
            assert.ok(p[lang].context.length > 0, `${p.id} ${lang} context vazio`);
            assert.ok(Array.isArray(p[lang].approach) && p[lang].approach.length > 0, `${p.id} ${lang} approach vazio`);
            assert.ok(p[lang].result.length > 0, `${p.id} ${lang} result vazio`);
            assert.ok(Array.isArray(p[lang].tags) && p[lang].tags.length > 0, `${p.id} ${lang} tags vazio`);
        });
    });
});

test('PROJECTS: projeto Número Secreto é demo-external e getDemoUrl retorna sua URL', () => {
    const real = PROJECTS.find((p) => p.id === 'numero-secreto');
    assert.equal(real.type, 'demo-external');
    assert.match(real.demoUrl, /^https:\/\//);
    assert.equal(getDemoUrl(real), real.demoUrl);
});

test('renderCaseStudyHTML: inclui contexto, bullets de abordagem e tags no idioma pedido', () => {
    const project = PROJECTS.find((p) => p.id === 'dashboard-vendas');
    const htmlPt = renderCaseStudyHTML(project, 'pt');
    assert.match(htmlPt, new RegExp(escapeRegExp(project.pt.context)));
    project.pt.approach.forEach((step) => assert.match(htmlPt, new RegExp(escapeRegExp(step))));
    project.pt.tags.forEach((tag) => assert.match(htmlPt, new RegExp(`class="project-tag">${escapeRegExp(tag)}<`)));

    const htmlEn = renderCaseStudyHTML(project, 'en');
    assert.match(htmlEn, new RegExp(escapeRegExp(project.en.context)));
    assert.doesNotMatch(htmlEn, /DAX Avançado/);
    assert.match(htmlEn, /Advanced DAX/);
});

test('renderProjectCardHTML: case-study usa href "#" e nenhum target; demo-external usa a demoUrl com target="_blank"', () => {
    const caseStudy = PROJECTS.find((p) => p.id === 'churn-model');
    const csHtml = renderProjectCardHTML(caseStudy, 'pt');
    assert.match(csHtml, /href="#" class="project-link">/);
    assert.doesNotMatch(csHtml, /target="_blank"/);

    const external = PROJECTS.find((p) => p.id === 'numero-secreto');
    const extHtml = renderProjectCardHTML(external, 'en');
    assert.match(extHtml, new RegExp(`href="${escapeRegExp(external.demoUrl)}"`));
    assert.match(extHtml, /target="_blank" rel="noopener noreferrer"/);
    assert.match(extHtml, /View project/);
});

test('renderDemoIntroHTML: mostra contexto/abordagem/resultado e botão para abrir a demo, no idioma pedido', () => {
    const project = PROJECTS.find((p) => p.id === 'numero-secreto');
    const htmlPt = renderDemoIntroHTML(project, 'pt');
    assert.match(htmlPt, new RegExp(escapeRegExp(project.pt.context)));
    assert.match(htmlPt, /class="cs-open-demo-btn">Ver demo ao vivo/);

    const htmlEn = renderDemoIntroHTML(project, 'en');
    assert.match(htmlEn, new RegExp(escapeRegExp(project.en.context)));
    assert.match(htmlEn, /class="cs-open-demo-btn">View live demo/);
});

test('renderProjectCardHTML: usa o thumbClass e o icon do projeto', () => {
    const project = PROJECTS.find((p) => p.id === 'etl-pipeline');
    const html = renderProjectCardHTML(project, 'pt');
    assert.match(html, new RegExp(`project-thumbnail ${escapeRegExp(project.thumbClass)}`));
    assert.match(html, new RegExp(escapeRegExp(project.icon)));
});

function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
