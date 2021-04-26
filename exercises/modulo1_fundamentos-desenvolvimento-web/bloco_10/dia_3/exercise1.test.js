const { getRandomNumber } = require('./exercise1');

jest.mock('./exercise1', () => ({
  getRandomNumber: jest.fn().mockReturnValue(20),
}));

describe('Teste Exercício 1', () => {
  test('Testa a função getRandomNumber', () => {
    getRandomNumber();
    expect(getRandomNumber).toHaveBeenCalled();

    expect(getRandomNumber()).toBe(20);
    
    expect(getRandomNumber).toHaveBeenCalledTimes(2);
  });
});