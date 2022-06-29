'use strict';

const testBrackets = require('../stack-queue-brackets.js');

describe('stack-queue-brackets', () => {
  test('will return true for valid brackets', () => {
    expect(testBrackets('{}')).toBe(true);
    expect(testBrackets('{}(){}')).toBe(true);
  });
  test('will return true for valid brackets', () => {
    expect(testBrackets('(){}[[]]')).toBe(true);
    expect(testBrackets('{}{Code}[Fellows](())')).toBe(true);
  });
  test('will return true for valid brackets', () => {
    expect(testBrackets('()[[Extra Characters]]')).toBe(true);
  });
  test('will return false for invalid brackets', () => {
    expect(testBrackets('[({}]')).toBe(false);
  });
  test('will return false for invalid brackets', () => {
    expect(testBrackets('{(})')).toBe(false);
  });
  test('will return false for invalid brackets', () => {
    expect(testBrackets('(](')).toBe(false);
  });
});
