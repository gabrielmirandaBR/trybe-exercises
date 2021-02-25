// 1.Faça cinco programas, um para cada operação aritmética básica.
let a = 2;
let b = 10;

// adição
let sum = (a + b);
console.log ("Soma é: " + sum);

// subtração
let subtract = (a - b);
console.log ("Subtração é: " + subtract);

// multiplicação
let multiplication = (a * b);
console.log ("Multiplicação é: " + multiplication);

// divisão
let division = (a / b);
console.log ("Divisão é: " + division);

// módulo (resto)
let rest = (a % b);
console.log ("O resto da divisão é: " + rest);

// 2.Faça um programa que retorne o maior de dois números.
let number1 = 10;
let number2 = 5;

if(number1 > number2) {
  console.log(number1);
} else {
  console.log(number2);
};


// 2.Faça um programa que retorne o maior de dois números.
let number1 = 39;
let number2 = 40;

if (number1 > number2) {
  console.log ("O número A é maior: " + number1);
} else {
    console.log ("O número B é maior: " + number2);
};


// 3.Faça um programa que retorne o maior de três números
let number1 = 100;
let number2 = 50;
let number3 = 15;

if (number1 > number2 && number1 > number3) {
  console.log(number1);
} else if (number2 > number1 && number2 > number3) {
  console.log(number2);
} else {
  console.log(number3);
};


// 4.Faça um programa que retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário
let number1 = 0;

if(number1 > 0) {
  console.log("positive");
} else if (number1 < 0) {
  console.log("negative");
} else {
  console.log("zero");
};


// 5.Faça um programa com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
let angle1 = 30;
let angle2 = 70;
let angle3 = 100;

let sumAngles = angle1 + angle2 + angle3;

let isTrianle = false;

if (sumAngles === 180) {
  isTrianle = true;
};

console.log(isTrianle);


// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let chessPiece = "peAo";

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log ("Rei -> Qualquer direção, porém uma casa por vez");
    break;
  case 'dama':
    console.log ("Dama -> Qualquer direção, quantas casas quiser");
    break;
  case 'torre':
    console.log ("Torre -> Linha reta, quantas casas quiser");
    break;
  case 'bispo':
    console.log ("Bispo -> Na diagonal, quantas casas quiser");
    break;
  case 'cavalo':
    console.log ("Cavalo -> Movimento em L (um-dois), pode saltar sobre outras peças");
    break;
  case 'peao':
    console.log ("Peão -> Uma casa para frente, exceto no primeiro movimento que pode andar duas casas");
    break;
  default:
    console.log ("Não existe essa peça!");
    break;
};


// 7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
let note = 60;

switch (true) {
  case (note >= 90 && note <= 100):
    console.log("A")
    break;
  case (note >= 80 && note <= 100):
    console.log("B")
  break;
  case (note >= 70 && note <= 100):
    console.log("C")
    break;
  case (note >= 60 && note <= 100):
    console.log("D")
    break;
  case (note >= 50 && note <= 100):
    console.log("E")
    break;
  case (note < 50 && note >= 0):
    console.log("F")
    break;
  default:
    console.log("nota inválida")
    break;
};

// OU pode ser tbm dessa forma
let note = 30;

if (note < 0 || note > 100) {
  console.log ("Número inválido");
} else if (note >= 90) {
  console.log ("Conceito A");
} else if (note >= 80) {
  console.log ("Conceito B");
} else if (note >= 70) {
  console.log ("Conceito C");
} else if (note >= 60) {
  console.log ("Conceito D");
} else if (note >= 50) {
  console.log ("Conceito E")
} else {
  console.log ("Conceito F");
};


// 8.Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
let number1 = 1;
let number2 = 4;
let number3 = 3;

let isEven = false;

if (number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0) {
  isEven = true;
};
console.log(isEven);


// 9. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
let number1 = 2;
let number2 = 10;
let number3 = 6;

let isOdd = false;

if(number1 % 2 != 0 || number2 % 2 != 0 || number3 % 2 != 0) {
  isOdd = true;
};
console.log(isOdd);


// 10. Defina qual o lucro da empresa.
let costValue = 1;
let saleValue = 0.75;

let taxCostValue = costValue * 0.20;
let costValueTotal = costValue + taxCostValue;

let profit;

if (costValue < 0 || saleValue < 0) {
  console.log ("Números inválidos")
} else {
  profit = (saleValue - costValueTotal)* 100;
  console.log(profit + "%");
};


// 11. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
let grossSalary = 3000;

let aliquotINSS;
let aliquorIR;

switch (true) {
  case (grossSalary <= 1556.94):
    aliquotINSS = grossSalary * 0.08;
    break;
  case (grossSalary > 1556.94 && grossSalary <= 2594.92):
    aliquotINSS = grossSalary * 0.09;
    break;
  case (grossSalary > 2594.92 && grossSalary <= 5189.82):
    aliquotINSS = grossSalary * 0.11;
    break;
  default:
    aliquotINSS = 570.88
    break;
};

console.log("Alíquota do INSS é de: " + aliquotINSS);

let baseSalary = grossSalary - aliquotINSS;

switch (true) {
  case (baseSalary <= 1903.98):
    aliquorIR = 0;
    break;
  case (baseSalary > 1903.98 && baseSalary <= 2826.65):
    aliquorIR = (baseSalary * 0.075) - 142.80;
    break;
  case (baseSalary > 2826.65 && baseSalary <= 3751.05):
    aliquorIR = (baseSalary * 0.15) - 354.80;
    break;
  case (baseSalary > 3751.05 && baseSalary <= 4664.68):
    aliquorIR = (baseSalary * 0.225) - 636.13;
    break;
  default:
    aliquorIR = (baseSalary * 0.275) - 869.36;
    break;
};
console.log("Alíquota do IR é de: " + aliquorIR);


let netSalary = baseSalary - aliquorIR;
console.log ("O salário líquido é de: " + netSalary);

// OU pode ser assim tbm
let grossSalary = 3000.00;

let aliquotINSS;
let aliquorIR;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08; 
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
};

let baseSalary = (grossSalary - aliquotINSS).toFixed(2);
console.log("O seu salário base, descontando o INSS, é de: " + baseSalary);

if (baseSalary <= 1903.98) {
  aliquorIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquorIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquorIR = (baseSalary * 0.15) - 354.80;  
} else if (baseSalary <= 4664.68) {
  aliquorIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquorIR = (baseSalary * 0.275) - 869.36;
};

let netSalary = (baseSalary - aliquorIR).toFixed(2);
console.log("O seu salário líquido, descontando o IR, é de: " + netSalary);