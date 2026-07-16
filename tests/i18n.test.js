const { test } = require('node:test');
const assert = require('node:assert/strict');
const { getText, resolveInitialLanguage } = require('../i18n.js');

test('resolveInitialLanguage: retorna pt quando não há valor salvo', () => {
    assert.equal(resolveInitialLanguage(null), 'pt');
});

test('resolveInitialLanguage: retorna en quando salvo é "en"', () => {
    assert.equal(resolveInitialLanguage('en'), 'en');
});

test('resolveInitialLanguage: retorna pt para qualquer valor inválido', () => {
    assert.equal(resolveInitialLanguage('fr'), 'pt');
    assert.equal(resolveInitialLanguage(''), 'pt');
    assert.equal(resolveInitialLanguage(undefined), 'pt');
});

test('getText: retorna o texto no idioma pedido', () => {
    const dict = { pt: { 'nav.home': 'Início' }, en: { 'nav.home': 'Home' } };
    assert.equal(getText(dict, 'pt', 'nav.home'), 'Início');
    assert.equal(getText(dict, 'en', 'nav.home'), 'Home');
});

test('getText: cai para pt se a chave não existir no idioma pedido', () => {
    const dict = { pt: { 'nav.home': 'Início' }, en: {} };
    assert.equal(getText(dict, 'en', 'nav.home'), 'Início');
});

test('getText: retorna a própria chave se não existir em nenhum idioma', () => {
    const dict = { pt: {}, en: {} };
    assert.equal(getText(dict, 'pt', 'chave.inexistente'), 'chave.inexistente');
});
