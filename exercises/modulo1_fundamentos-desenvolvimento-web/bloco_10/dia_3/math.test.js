const { somar, subtrair, multiplicar, dividir } = require('./math');

jest.mock('./math', () => ({
  subtrair: jest.fn(),
  multiplicar: jest.fn().mockReturnValue(10),
  somar: jest.fn(),
  dividir: jest.fn().mockReturnValue(15),
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

  test('checa a chamada, o retorno e os parâmetros passados para a função somar', async () => {
    somar(2, 3);
    expect(somar).toHaveBeenCalled();
    expect(somar).toHaveBeenCalledWith(2, 3);
    // const sum = await somar(1, 5);
    // expect(sum).toEqual(6);
  });

  test('checa a função dividir', () => {
    dividir();
    expect(dividir).toHaveBeenCalled();
    expect(dividir()).toBe(15);

    dividir.mockReset();
    dividir(7, 5);
    expect(dividir).toHaveBeenCalledWith(7, 5);

    dividir.mockReset();
    dividir.mockReturnValue(2);
    expect(dividir()).toBe(2);

    dividir.mockReset();
    dividir.mockReturnValue(5);
    expect(dividir()).toBe(5);

    expect(dividir).toHaveBeenCalledTimes(1);
  });

  test('checa a função subtrair', () => {
    subtrair.mockClear();
    subtrair();
    expect(subtrair).toHaveBeenCalledTimes(1);

    subtrair.mockReturnValue(20);
    expect(subtrair()).toBe(20);
   
    subtrair.mockReset();
    subtrair.mockReturnValue(2);
    expect(subtrair()).toBe(2);
  });
});
