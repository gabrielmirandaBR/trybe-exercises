// Programa 1
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


// Programa 2
let numberA = 39;
let numberB = 40;

if (numberA > numberB) {
  console.log ("O número A é maior: " + numberA);
} else {
    console.log ("O número B é maior: " + numberB);
};


// Programa 3
let numberA = 20;
let numberB = 30;
let numberC = 50;

if (numberA > numberB && numberA > numberC) {
  console.log ("O número A é maior: " + numberA);
} else if (numberB > numberC) {
  console.log ("O número B é maior: " + numberB);
} else {
  console.log ("O número C é maior: " + numberC);
};


// Programa 4
let numberA = 0;

if (numberA > 0) {
  console.log ("positive");
} else if (numberA < 0) {
  console.log ("negative");
} else {
  console.log ("zero");
};


// Programa 5
let angleA = 90;
let angleB = 30;
let angleC = 60;

let sumAngles = angleA + angleB + angleC;

let angles = false;

if (sumAngles === 180) {
  angles = true;
};

console.log (angles);


// Programa 6
let chessPiece = "BISPO";

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


// Programa 7
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


// Programa 8
let numberA = 12;
let numberB = 13;
let numberC = 15;

let isEven = false;

if (numberA % 2 == 0 || numberB % 2 == 0 || numberC % 2 == 0) {
  isEven = true;
};

console.log (isEven);


// Programa 9
let numberA = 400;
let numberB = 201;
let numberC = 0;

let isOdd = false;

if (numberA % 2 != 0 || numberB % 2 != 0 || numberC % 2 != 0) {
  isOdd = true;
};

console.log (isOdd);


// Programa 10
let costValue = 1;
let saleValue = 0.75;

let tax = (0.2 * costValue);

let costValueTotal = costValue + tax;

let profit = ((saleValue - costValueTotal) * 100).toFixed(2);

if (costValue < 0 || saleValue < 0) {
  console.log ("Dados inválidos");
} else {
  console.log ("O seu lucro foi de: " + profit + "%");
};


// Programa 11
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