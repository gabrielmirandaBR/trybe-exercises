/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const writeFile = require('./exercise4');

describe('Executa função writeFile', () => {
  const FILE_CONTENT = 'VQV! FORÇAAAAA!';
  
  before(() => {
    sinon.stub(fs, 'writeFile').resolves(FILE_CONTENT);
  });

  after(() => {
    fs.writeFile.restore();
  });

  describe('Quando o arquivo existe', () => {
    const MSG_SUCCESS = 'Escrito com sucesso!';

    it('Aparece uma mensagem de sucesso', async () => {
      const RESULT = await writeFile('test', FILE_CONTENT);
      expect(RESULT).to.be.equals(MSG_SUCCESS);
    });

    it('o retorno é do tipo "string"', async () => {
      const RESULT = await writeFile('test', FILE_CONTENT);
      expect(RESULT).to.be.a('string');
    });
  });
});