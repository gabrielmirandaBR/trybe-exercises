// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkNumber = (num, randomNumber) => {
  num === randomNumber;
}

const result = (num, checkNumber) => {
  const randomNumber = Math.ceil(Math.random()*5);
  if (checkNumber(num, randomNumber)) {
    return 'Lucky day, you won!';
  } else {
    return 'Try Again!'
  }
}

console.log(result(2,checkNumber));
