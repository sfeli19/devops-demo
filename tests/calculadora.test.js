const { sumar, restar } = require('../src/calculadora');

test('sumar 2 + 4 debe dar 6', () => {
  expect(sumar(2, 4)).toBe(6);
});

test('restar 5 - 2 debe dar 3', () => {
  expect(restar(5, 2)).toBe(3);
});