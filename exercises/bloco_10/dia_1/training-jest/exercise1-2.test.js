const myRemove = require('./exercise1-2');

describe('Teste Exercício 1-2', () => {
  test('item = 3 myRemove retorna [1,2,4]', () => {
    const numbers = [1, 2, 3, 4];
    expect(myRemove(numbers, 3)).toEqual([1, 2, 4]);
  });
  test('myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const numbers = [1, 2, 3, 4];
    expect(myRemove(numbers, 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const numbers = [1, 2, 3, 4];
    const result = myRemove(numbers, 4);
    expect(myRemove(result)).not.toEqual([1, 2, 3, 4]);
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const numbers = [1, 2, 3, 4];
    expect(myRemove(numbers, 5)).toEqual([1, 2, 3, 4]);
  });
});