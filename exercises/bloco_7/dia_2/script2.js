const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

const createTurn = (obj, key, value) => {
  let newKey = key;
  const newValue = value;
  obj[newKey] = newValue;
  
  return obj;
};

console.log(createTurn(lesson2, 'turno', 'manhã'));

/* 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
const showKeys = (obj) => Object.keys(obj);

console.log(showKeys(lesson3));
