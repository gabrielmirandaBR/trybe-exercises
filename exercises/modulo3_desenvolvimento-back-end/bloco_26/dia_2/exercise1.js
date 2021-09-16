function calculator(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números'));
    }

    const result = ((a + b) * c);

    if (result < 50) {
      reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });
}

function generateRandomNumbers() {
  return Math.floor(Math.random() * 100 + 1);
}

const randomNumbers = Array.from({ length: 3 }).map(generateRandomNumbers);

async function main() {
  try {
    const result = await calculator(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.error(`erro: ${err}`);
  }
}

main();

// calculator(a, b, c)
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.log("erro: %s", err)
//   });