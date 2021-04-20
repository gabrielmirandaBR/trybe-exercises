const getUserName = require('./exercise2');

describe('Teste Exercício 2', () => {
  it('Retorna o nome do funcionário Mark', () => getUserName(4).then((professional) => {
    expect.assertions();
      expect(professional).toEqual('Mark');
    }));
  it('Retorna o nome do funcionário Paul', () => getUserName(5).then((professional) => {
    expect.assertions(1);
    expect(professional).toEqual('Paul');
  }));

  it('Retorna a mesma mensagem de erro caso nao haja o id', () => getUserName(6).catch((error) => {
    expect.assertions(1);
    expect(error).toEqual({ error: `User with ${6} not found.` });
  }));
});