const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  const concatNames =  names.reduce((acumulator, currentValue) => {

    return acumulator + currentValue
  });
  
  return concatNames.split('').reduce((acumulator, currentValue) => {
    (currentValue === 'A' || currentValue === 'a') ? acumulator += 1 : false;

    return acumulator;
  }, 0)
}
console.log(containsA())

//assert.deepStrictEqual(containsA(), 20);