const { test } = require('node:test');
const assert = require('node:assert/strict');
const { resolveInitialTheme } = require('../script.js');

test('resolveInitialTheme: usa valor salvo "dark"', () => {
    assert.equal(resolveInitialTheme('dark', false), true);
});

test('resolveInitialTheme: usa valor salvo "light" mesmo se sistema prefere dark', () => {
    assert.equal(resolveInitialTheme('light', true), false);
});

test('resolveInitialTheme: sem valor salvo, segue preferência do sistema (dark)', () => {
    assert.equal(resolveInitialTheme(null, true), true);
});

test('resolveInitialTheme: sem valor salvo, segue preferência do sistema (light)', () => {
    assert.equal(resolveInitialTheme(null, false), false);
});
