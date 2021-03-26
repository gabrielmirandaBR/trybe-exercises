const assert = require('assert');


const getLargestNumber = (array) => {

  if (typeof array !== 'object') {
    throw new Error('Por favor, digite um parâmetro válido');
  }

  let largestNumber;
  const arraySort = array.sort((a, b) => b - a);
  largestNumber = arraySort.slice(0,1)

  return largestNumber[0];
}

const parameter = [45, 8, 50, 1, 7, 99];
const result = 99;

assert.strictEqual(typeof getLargestNumber, 'function');

assert.deepStrictEqual(getLargestNumber(parameter), result);

assert.throws (() => {
  getLargestNumber(2);
});
