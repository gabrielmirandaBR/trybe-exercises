// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

const removeVowels = (word) => {

  if (typeof word !== 'string') {
    throw new Error('Por favor, passe como parâmetro apenas valores do tipo string');
  }

  const characters = word.split('');
  const results = [];
  let number = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      number += 1;
      results.push(number);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

assert.strictEqual(typeof removeVowels, 'function');

assert.throws(() => {
  removeVowels(2);
});

assert.deepStrictEqual(removeVowels('Dayane'), 'D1y2n3');

const parameter = 'Dayane';
const result = 'D1y2n3';