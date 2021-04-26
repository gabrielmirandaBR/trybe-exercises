const assert = require('assert');
// 1

const pushNumber = (list, number) => list.push(number);

const numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]);

// 2

const pushNumber2 = (list, number) => {
  list.push(number);
  console.log(list);
};

const numbers2 = [];

setTimeout(() => pushNumber2(numbers2, 1), 3000);
pushNumber2(numbers2, 2);
pushNumber2(numbers2, 3);

setTimeout(() => assert.deepStrictEqual(numbers2, [2, 3, 1]), 3000); // o array recebe primeiro o 2 , depois o 3 , e após os 3 segundos do setTimeout , ele recebe o 1 . 