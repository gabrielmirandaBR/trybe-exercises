const sum = require('./exercise1-1');

describe('Teste Exercício 1-1', () => {
  test('sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('erro quando os parâmetros são 4 e "5"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  test('Teste se a função sum lança um erro', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
});