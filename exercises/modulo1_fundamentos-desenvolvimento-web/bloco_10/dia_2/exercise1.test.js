const uppercase = require('./exercise1');

describe('Teste Exercício 1', () => {
  it('Verifique que após chamar a callback transforma gabriel para GABRIEL', (done) => {
    uppercase('gabriel', (string) => {
      expect(string).toBe('GABRIEL');
      done();
    });
  });
});