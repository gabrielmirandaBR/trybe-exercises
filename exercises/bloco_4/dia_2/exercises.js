// 1. Percorra o array imprimindo todos os valores nele contidos com a função console.log()
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
};


// 2. Somar todos os valores contidos no array e imprimir o resultado
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
};
console.log(result);


// 3. Calcule e imprima a média aritmética dos valores contidos no array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mean = 0;

for (let i = 0; i < numbers.length; i++) {
  mean += (numbers[i]) / (numbers.length);
};
console.log(mean);


// 4. Caso valor final do exercício anterior seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
if (mean > 20) {
  console.log("valor maior que 20");
} else {
console.log("valor menor ou igual a 20");
};


// 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maxValue = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxValue) {
    maxValue = numbers[i];
  }
};
console.log(maxValue);


// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersOdd = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    numbersOdd += 1;
  }
};

if (numbersOdd === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(numbersOdd);
};


// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minValeu = 500;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < minValeu) {
    minValeu = numbers[i];
  }
};
console.log(minValeu);


// 8. Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado
let newArray = [];

for (let indexArray = 1; indexArray < 26; indexArray += 1) {
  newArray.push(indexArray);
}
console.log(newArray);


// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
for (let indexArray = 0; indexArray < newArray.length; indexArray += 1) {
  newArray[indexArray] = newArray[indexArray] / 2;
};
console.log(newArray);


// Bônus 1 - Ordene o array numbers em ordem crescente e imprima seus valores
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let indexRightNumber = 1; indexRightNumber  < numbers.length; indexRightNumber  += 1) {
  for (let indexLeftNumber = 0; indexLeftNumber < indexRightNumber; indexLeftNumber +=1) {
    if (numbers[indexRightNumber] < numbers[indexLeftNumber]) {
      let position = numbers[indexRightNumber];

      numbers[indexRightNumber] = numbers[indexLeftNumber];
      numbers[indexLeftNumber] = position;
    }
  }
};
console.log(numbers);


// Bônus 2 - Ordene o array numbers em ordem decrescente e imprima seus valores
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (indexRightNumber = 1; indexRightNumber < numbers.length; indexRightNumber += 1) {
  for(indexLeftNumber = 0; indexLeftNumber < indexRightNumber; indexLeftNumber += 1) {
    if (numbers[indexRightNumber] > numbers[indexLeftNumber]) {
      let position = numbers[indexRightNumber];

      numbers[indexRightNumber] = numbers[indexLeftNumber];
      numbers[indexLeftNumber] = position;
    }
  }
};
console.log(numbers);


// Bônus 3 - Criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (indexNumber = 0; indexNumber < numbers.length; indexNumber += 1) {
  if ((indexNumber + 1) < numbers.length) {
    newArray.push(numbers[indexNumber] * numbers[indexNumber + 1]);
  } else {
    newArray.push(numbers[indexNumber] * 2);
  }
};
console.log(newArray);
