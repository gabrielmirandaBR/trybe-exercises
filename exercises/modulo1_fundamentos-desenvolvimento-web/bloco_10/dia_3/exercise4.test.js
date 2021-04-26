const { toUpperCase, getFirstLetter, concatString } = require('./exercise4');

jest.mock('./exercise4', () => ({
  toUpperCase: jest.fn().mockImplementationOnce((string) => string.toLowerCase()),
  getFirstLetter: jest.fn().mockImplementationOnce((string) => string[string.length - 1]),
  concatString: jest.fn()
    .mockImplementationOnce((string1, string2, string3) => `${string1}${string2}${string3}`),
}));

describe('Exercício 4 - testa as 3 funções com implementações diferentes das originais', () => {
  test('testa função toUpperCase', () => {
    expect(toUpperCase('GABRIEL')).toBe('gabriel');
    expect(toUpperCase).toHaveBeenCalled();
    expect(toUpperCase).toHaveBeenCalledWith('GABRIEL');
  });
  test('testa função getFirstLetter', () => {
    expect(getFirstLetter('gabriel')).toBe('l');
    expect(getFirstLetter).toHaveBeenCalled();
    expect((getFirstLetter)).toHaveBeenCalledWith('gabriel');
  });
  test('testa a função concatString', () => {
    expect(concatString('ga', 'br', 'iel')).toBe('gabriel');
    expect(concatString).toHaveBeenCalled();
    expect(concatString).toHaveBeenCalledWith('ga', 'br', 'iel');
  });
});