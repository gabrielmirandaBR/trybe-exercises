// 1-  Daça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let size = 5;
let asterisk = "*";
let line = "";

for (let indexSize = 1; indexSize <= size; indexSize += 1) { // Cria as colunas
  line = line + asterisk;
};

for (let indexSize = 1; indexSize <= size; indexSize += 1) { // Cria as linhas
  console.log(line);
};


// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
let size = 5;
let asterisk = "*";
let line = "";

for (let indexSize = 1; indexSize <= size; indexSize += 1) {
  line = line + asterisk;
  console.log(line);
};


// 3- Agora inverta o lado do triângulo.
let size = 5;
let asterisk = "*";
let line = "";
let position = size;

for (let indexSize = 1; indexSize <= size; indexSize += 1) { // Define em qual linha
  for (let indexPosition = 1; indexPosition <= size; indexPosition += 1) { // define em qual coluna estamos na linha
    if (indexPosition < position) { // se a coluna atual for menor que a coluna que eu quero começar os *
      line = line + " ";
    } else { // se a coluna atual for igual ou superior a coluna que quero os *
      line = line + asterisk;
    }
  }
  console.log(line);
  line = "";
  position -= 1;
};


// Bônus 2- Faça um programa que diz se um número definido numa variável é primo ou não.
let number = 5;
let countDivisors = 0;

for (let indexNumber = 1; indexNumber <= number; indexNumber += 1) {
  if (number % indexNumber === 0) {
    countDivisors += 1;
  }
};

if (countDivisors === 2) {
  console.log(`O número ${number} é primo, pois apresenta, somente, ${countDivisors} divisores.`);
} else {
  console.log(`o número ${number} não é primo, pois apresenta ${countDivisors} divisores.`);
};
