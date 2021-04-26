// Objetivo de unir em uma única lista de objetos
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productsTable = products.map((product, index) => {
  return {[product]: prices[index]}
});

console.log(productsTable)