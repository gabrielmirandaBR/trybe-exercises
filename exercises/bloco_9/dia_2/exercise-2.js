const promise = new Promise((resolve, reject) => {
  const numbers = [];

  for (let index = 0; numbers.length < 10; index += 1) {
  numbers.push(Math.floor(Math.random() * 50));
  }

  const numbers2 = numbers
    .map((number) => number ** 2);

  const sumNumbers = numbers2
    .reduce((acumulator, currentValue) => acumulator + currentValue);

  if (sumNumbers > 8000) {
    return reject(sumNumbers);
  }

  resolve(sumNumbers);
});
promise
.then((number) => console.log(`${number} - Promise resolvida`))
.catch((number) => console.log(`${number} - Promise Inválida`));
