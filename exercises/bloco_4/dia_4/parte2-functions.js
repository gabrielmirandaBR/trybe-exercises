// 1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalidrome (name) {
  for (let indexName = 0; indexName < name.length; indexName += 1) {
    if (name[indexName] === name[name.length - indexName - 1]) {;
    return true;
    } else {
      return false;
    }
  }
}
console.log(verificaPalidrome("arara"));
console.log(verificaPalidrome("desenvolvimento"));


// 2.Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function indiceMaiorValor(arrayNumbers) {
  let higherIndex = 0;
  for (let index in arrayNumbers) {
    if (arrayNumbers[higherIndex] < arrayNumbers[index]) {
      higherIndex = index;
    }
  }
  return higherIndex;
}
console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));


// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function indiceMenorValor (arrayNumbers) {
  let lowestIndex = 0;
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] < arrayNumbers[lowestIndex]) {
      lowestIndex = index;
    }
  }
  return lowestIndex;
}
console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));


// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function caracteresMaiorValor (arrayNames) {
  let higherCaracters = arrayNames[0];
  for (let index in arrayNames) {
    if (arrayNames[index].length > arrayNames.length) {
      higherCaracters = arrayNames[index];
    }
  }
  return higherCaracters;
}
console.log(caracteresMaiorValor(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function somaNumeros (numero) {
  let sum = 0;
  for (let index = 1; index <= numero; index += 1) {
    sum = sum + index;
  }
  return sum;
}

console.log(somaNumeros(5));


// 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
function verificaFimPalavra (palavra, fimDaPalavra) {
  let controle = true;
  for (let index = 1; index <= fimDaPalavra.length; index += 1) {
    if (palavra[palavra.length - fimDaPalavra.length + index] != fimDaPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}
console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));