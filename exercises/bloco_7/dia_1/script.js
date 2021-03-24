// PARTE I

// 1
/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
 */

const testingScope = escopo => {

  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

//2
const sortFunction = (a, b) => (a - b)

const sortArray = (array) => array.sort(sortFunction);

console.log(`os números ${sortArray([13, 3, 4, 10, 7, 2])} se encontram ordenados de forma crescente`);

// PARTE 2

/* 1 - Crie uma função que receba um número e retorne seu fatorial */
const fatorial = number =>  {
  let resp = 1;

  for (let index = 2; index <= number; index +=1) {
    resp *= index
  }
  return resp;
}
console.log(fatorial(5));

/* 2 - Crie uma função que receba uma frase e retorne qual a maior palavra. */
const biggestWord = (string) => {
  
  const array = string.split(' ')
  let numberWords = 0;
  let result = '';
  
  for (let index = 0; index < array.length; index +=1) {
    if (array[index].length > numberWords) {
      numberWords = array[index].length;
      result = array[index];
    }
  }  
  return result
}
console.log(`${biggestWord('Antonio foi no banheiro e não sabemos o que aconteceu')}`)

/* 4 - Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ... #goTrybe". */

let skills = ['js', 'css', 'html', 'git', 'bootstrap']

const changeX = (string) => {
  let determinedString = 'Tryber x aqui!';
  const array = determinedString.split('');
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 'x') {
     array[index] = string;
    }
  }
  return array.join('')
}

const concatenate = (function1) => {
  let skillsSort = [];
  for (let index = 0; index < skills.length; index += 1) {
    skillsSort = skills.sort();
  }
  let newPhrase = `${function1} Minhas cinco principais habilidades são:
  ${skillsSort[0]} 
  ${skillsSort[1]} 
  ${skillsSort[2]} 
  ${skillsSort[3]} 
  ${skillsSort[4]}`
  
  return newPhrase;
}
console.log(concatenate(changeX('Gabriel')))

