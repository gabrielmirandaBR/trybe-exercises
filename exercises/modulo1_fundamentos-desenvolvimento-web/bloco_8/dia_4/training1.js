// faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = () => {
  return numbers
  .filter(number => number % 2 === 0)
  .reduce((result, number) => result + number);
}

console.log(sumEven());


// SEM O FILTER

const sumEvenNoFilter = () => {
  return numbers
  .reduce((value, number) => (number % 2 === 0) ? value + number : value);
}

console.log(sumEvenNoFilter());