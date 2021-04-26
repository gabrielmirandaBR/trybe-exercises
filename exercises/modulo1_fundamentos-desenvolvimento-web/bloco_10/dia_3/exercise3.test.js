const { getRandomNumber } = require('./exercise1');

jest.mock('./exercise1', () => ({
  getRandomNumber: jest.fn().mockImplementationOnce((a, b, c) => a * b * c),
}));

describe('Testes Exercício 3', () => {
  test('testa getRandomNumber com outras implementações', () => {
    expect(getRandomNumber(1, 2, 3)).toBe(6);
    expect(getRandomNumber).toHaveBeenCalled();
    expect(getRandomNumber).toHaveBeenCalledWith(1, 2, 3);
    expect(getRandomNumber).toHaveBeenCalledTimes(1);

    getRandomNumber.mockReset();
    getRandomNumber.mockImplementationOnce((a) => a ** 2);

    expect(getRandomNumber(2)).toBe(4);
    expect(getRandomNumber).toHaveBeenCalledWith(2);
    expect(getRandomNumber).toHaveBeenCalledTimes(1);
  });
});