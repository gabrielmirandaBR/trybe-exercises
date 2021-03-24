/* 1 - crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */

const createObject = (obj, key, value) => {
  obj = {};
  let newKey = key;
  const newValue = value;
  obj[newKey] = newValue;

  return obj;
};

console.log(createObject('customer','name', '22'));

/* 2 - Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução. */

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const showHabilities = (obj) => {
  const skills = Object.keys(obj);

  for (value in skills) {
    console.log(`${skills[value]}, Nível: ${obj[skills[value]]}`);
  }
};
showHabilities(student2);
showHabilities(student1);
