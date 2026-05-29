const assert = require('node:assert/strict');
const test = require('node:test');

const { dfh } = require('../dist');

test('returns just now for the current date', () => {
  assert.equal(dfh(new Date()), 'just now');
});

test('formats past dates', () => {
  assert.equal(dfh(new Date(Date.now() - 60_000)), '1 minute ago');
  assert.equal(dfh(new Date(Date.now() - 2 * 60_000)), '2 minutes ago');
});

test('formats future dates', () => {
  assert.equal(dfh(new Date(Date.now() + 3_600_000)), 'in 1 hour');
  assert.equal(dfh(new Date(Date.now() + 2 * 3_600_000)), 'in 2 hours');
});

test('accepts date strings', () => {
  assert.match(dfh('2020-01-01'), /years ago$/);
});

test('accepts timestamps', () => {
  assert.equal(dfh(Date.now() + 60_000), 'in 1 minute');
});
