const { somar, subtrair, multiplicar, dividir } = require('./math');

jest.mock('./math', () => ({
  subtrair: jest.fn(),
  multiplicar: jest.fn().mockReturnValue(10),
}));

// eslint-disable-next-line max-lines-per-function
describe('Testes dos exercícios para Fixação', () => {
  test('checa a chamada da função subtrair', () => {
    subtrair();
    expect(subtrair).toHaveBeenCalled();
  });

  test('checa a chamada e o retorno da função multiplicar', () => {
    multiplicar();
    expect(multiplicar).toHaveBeenCalled();
    expect(multiplicar()).toBe(10);
  });

/*   test('checa a chamada, o retorno e os parâmetros passados para a função somar', async () => {
    somar.mockResolvedValue(8);
    somar();
    expect(somar).toHaveBeenCalled();
    expect(somar()).resolves.toBe(8);
  }); */

  test('checa função dividir', () => {
    
  });
});
