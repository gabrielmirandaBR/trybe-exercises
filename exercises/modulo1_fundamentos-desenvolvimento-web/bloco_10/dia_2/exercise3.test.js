const getUserName = require('./exercise2');

describe('Testes Exercício 3', () => {
  it('Retorna o nome do funcionário Mark', async () => {
    expect.assertions(1);
    const result = await getUserName(4);
    expect(result).toBe('Mark');
  });
  it('Retorna o nome do funcionário Paul', async () => {
    expect.assertions(1);
    const result = await getUserName(5);
    expect(result).toBe('Paul');
  });
  it('Retorna a mesma mensagem de erro caso nao haja o id', async () => {
    expect.assertions(1);
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toStrictEqual({ error: `User with ${6} not found.` });
    }
  });
});