// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'goiaba', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['chocolate', 'cerveja', 'suco'];

// faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));