const { sumar, restar } = require('../src/calculadora');

test('sumar 3 + 2 debe dar 5', () => {
  expect(sumar(3, 2)).toBe(5);
});

test('restar 5 - 2 debe dar 3', () => {
  expect(restar(5, 2)).toBe(3);
});