// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswer = (correctAnswers, answersToCheck) => {
  let sumHits = 0;
  let sumErrors = 0

  for (let index = 0; index < correctAnswers.length; index += 1) {
    if (correctAnswers[index] === answersToCheck[index]) {
      sumHits += 1;
    } else if (correctAnswers[index] !== answersToCheck[index] && answersToCheck[index] !== 'N.A') {
      sumErrors -= 0.5;
    }
  }
  return sumHits + sumErrors;
}

const result = (correctAnswers, answersToCheck, verifyAnswer) => {

  return `Nota final: ${verifyAnswer(correctAnswers, answersToCheck)}`;
}

console.log(result(rightAnswers, studentAnswers, verifyAnswer));