// sum.test.js
const sum = require('./sum'); // Importa a função sum

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});