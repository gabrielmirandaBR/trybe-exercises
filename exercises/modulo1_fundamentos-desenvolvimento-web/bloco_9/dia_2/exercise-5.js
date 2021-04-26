const getSumNumbers = () => {
  const numbers = [];

  for (let index = 0; numbers.length < 10; index += 1) {
    numbers.push(Math.floor(Math.random() * 50));
  }
  
  const exponentialNumbers = numbers.map((number) => number ** 2);

  const sumNumbers = exponentialNumbers
    .reduce((acumulator, currentValue) => acumulator + currentValue);

  if (sumNumbers > 8000) {
    throw new Error();
  }

  return sumNumbers;
};

const getSumArrayResult = (sumNumber) => [2, 3, 5, 10]
  .map((number) => Math.floor(sumNumber / number))
  .reduce((acumulator, currentValue) => acumulator + currentValue);

const getSumNumbersFromArray = async () => {
  try {
    const resultSum = await getSumNumbers();
    console.log(await getSumArrayResult(resultSum));
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};
getSumNumbersFromArray();
