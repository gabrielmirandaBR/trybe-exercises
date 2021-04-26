const function1 = require('./exercise4');

const toLowerCase = jest
  .spyOn(function1, 'toUpperCase')
  .mockImplementation((string) => string.toLowerCase());

describe('Teste Exercício 5', () => {
  test('testa a função toUpperCase com outra funcionalidade', () => {
    expect(toLowerCase('GABRIEL')).toBe('gabriel');
    expect(toLowerCase).toHaveBeenCalledWith('GABRIEL');
    expect(toLowerCase).toHaveBeenCalledTimes(1);
  });
  test('testa a função toUpperCase com a funcionalidade original', () => {
    function1.toUpperCase.mockRestore();
    expect(function1.toUpperCase('gabriel')).toBe('GABRIEL');
  });
});