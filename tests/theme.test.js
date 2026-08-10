const { test } = require('node:test');
const assert = require('node:assert/strict');
const { resolveInitialTheme } = require('../script.js');

test('resolveInitialTheme: usa valor salvo "dark"', () => {
    assert.equal(resolveInitialTheme('dark'), true);
});

test('resolveInitialTheme: usa valor salvo "light"', () => {
    assert.equal(resolveInitialTheme('light'), false);
});

test('resolveInitialTheme: sem valor salvo, padrão é escuro', () => {
    assert.equal(resolveInitialTheme(null), true);
});
