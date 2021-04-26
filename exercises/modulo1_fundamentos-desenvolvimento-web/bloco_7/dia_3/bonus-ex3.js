const assert = require('assert');

const removeMiddle = (array) => {

  const newArray = [];

  const indexMiddle = Math.floor(array.length/2);

  newArray.push(array[indexMiddle]);

  array.splice(indexMiddle,1);
  
  
  return newArray;
}


const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);

