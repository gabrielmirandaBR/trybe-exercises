const { getRandomNumber } = require('./exercise1');

jest.mock('./exercise1', () => ({
  getRandomNumber: jest.fn().mockImplementationOnce((a, b) => a / b),
}));

describe('Teste Exercício 2', () => {
  test('testa getRandomNumber com outra implementação ', () => {
    expect(getRandomNumber(4, 2)).toBe(2);

    expect(getRandomNumber).toHaveBeenCalled();

    expect(getRandomNumber).toHaveBeenCalledWith(4, 2);

    expect(getRandomNumber).toHaveBeenCalledTimes(1);
  });
});