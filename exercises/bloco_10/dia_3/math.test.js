const { somar, subtrair, multiplicar, dividir } = require('./math');

jest.mock('./math');

describe('Testes dos exercícios para Fixação', () => {
  test('checa a chamada da função subtrair', () => {
    subtrair.mockImplementation((a, b) => a - b);
    subtrair(2, 1);

    expect(subtrair).toHaveBeenCalled();
  });
});
