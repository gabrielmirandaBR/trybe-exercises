/* crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */


function createObject (obj, key, value) {
  obj = {};
  let newKey = key;
  const newValue = value;
  obj[newKey] = newValue;

  return obj;
}

console.log(createObject('customer','name', '22'));