const { expect } = require('chai');
const isAbsNumber = require('./exercise1');

describe('Quando o número for maior que 0', () => {
  const RESULT = isAbsNumber(10);
  it('retorna a string "positivo"', () => {
    expect(RESULT).to.be.equals('positivo');
  });
});

describe('Quando o número for menor que 0', () => {
  const RESULT = isAbsNumber(-4);
  it('retorna a string "negativo" ', () => {
    expect(RESULT).to.be.equals('negativo');
  });
});

describe('Quando o número for igual a 0', () => {
  const RESULT = isAbsNumber(0);
  it('retorna a string "neuto"', () => {
    expect(RESULT).to.be.equals('neutro');
  });
});

describe('Quando o parâmetro não é do tipo número', () => {
  it('retorna uma mensagem de erro ', () => {
    const RESULT = isAbsNumber('oi');
    const MSG_ERROR = 'o valor deve ser um número';

    expect(RESULT).to.be.equals(MSG_ERROR);
  });
});
