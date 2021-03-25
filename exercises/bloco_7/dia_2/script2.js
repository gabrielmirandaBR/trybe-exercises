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

/* 3 - Crie uma função para mostrar o tamanho de um objeto. */
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const objLength = (obj) => Object.keys(obj).length;

console.log(objLength(lesson3));

/* 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const showValues = (obj) => Object.values(obj);

console.log(showValues(lesson3));

/* 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3. */
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

const mergeObjs = (obj1, obj2, obj3) => {
 const allLessons = Object.assign({}, {obj1, obj2, obj3});
 return allLessons;
};

console.log(mergeObjs(lesson1, lesson2, lesson3));

/* 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.*/
const allLessons = {
  obj1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  obj2: { 
    materia: 'História', 
    numeroEstudantes: 20, 
    professor: 'Carlos' 
  },
  obj3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
};

const totalStudents = (obj) => {
  let total = 0;
  const arrayKeys = Object.keys(obj);

  for (index in arrayKeys) {
    total += obj[arrayKeys[index]].numeroEstudantes;
  }
  return total;
};
console.log(totalStudents(allLessons));

// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto
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

const keyValue = (obj, key) => {
  let values = Object.values(obj);
  let valueKey = values[key];
  return valueKey;
};
console.log(keyValue(lesson1, 1))

/* 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: */
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

console.log(Object.values(lesson3))

const verifyPairs = (obj, key, value) => {
  let entry = Object.entries(obj);
  let verify = false;
  for (let index = 0; index < entry.length; index += 1) {
    if(entry[index][0] === key && entry[index][1] === value) {
      verify = true;
    }
  }
  return verify;
};

console.log(verifyPairs(lesson3, 'turno', 'noite'));

// Bônus
// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const allLessons = {
  obj1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  obj2: { 
    materia: 'História', 
    numeroEstudantes: 20, 
    professor: 'Carlos' 
  },
  obj3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

const countStudentsMath = (obj) => {
  let count = 0;
  const array = Object.keys(obj);
  for (key in array) {
    if(obj[array[key]].materia === 'Matemática') {
      count += obj[array[key]].numeroEstudantes;
    }
  }
  return count;
};
console.log(countStudentsMath(allLessons));

// 2 -Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5
const allLessons = {
  obj1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  obj2: { 
    materia: 'História', 
    numeroEstudantes: 20, 
    professor: 'Carlos' 
  },
  obj3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

const createInfo = (obj, name) => {
  let count = 0;
  let subjects = [];
  const objValues = Object.values(obj);
  for (index in objValues) {
    if (objValues[index].professor === name) {
      subjects.push(objValues[index].materia);
      count += objValues[index].numeroEstudantes;
    }
  }
  return {materias:subjects, 'total de estudantes': count};
};

const createReport = (allLessons, name) => {
  const newReport = {};
  newReport.professor = name;
  Object.assign(newReport, createInfo(allLessons, name));
  return newReport;
}
console.log(createReport(allLessons, 'Maria Clara'));
