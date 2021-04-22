const { somar, subtrair, multiplicar, dividir } = require('./math');

jest.mock('./math');

describe('Testes dos exercícios para Fixação', () => {
  test('checa a chamada da função subtrair', () => {
    subtrair.mockImplementation((a, b) => a - b);
    subtrair(2, 1);

    expect(subtrair).toHaveBeenCalled();
  });

  test('checa a chamada e o retorno da função multiplicar', () => {
    multiplicar.mockImplementation((a, b) => a * b);
    multiplicar(5, 2);

    expect(multiplicar).toHaveBeenCalled();
    expect(multiplicar(5, 2)).toBe(10);
  });
});
