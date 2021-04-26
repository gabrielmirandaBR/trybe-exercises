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
}
const allLessons = mergeObjs(lesson1,lesson2,lesson3);


//Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
/* const countStudentsMath = (obj) => {
  const objects = Object.keys(obj)
  let sum = 0;
  for (index in objects) {
    const object = objects[index];
    if (obj[object].materia === 'Matemática') {
      sum += obj[object].numeroEstudantes
    }
  }
  return sum;
} */




const countStudents = (obj) => {
  const keys = Object.keys(obj);
  let sum = 0;
  for (index in keys) {
    const object = keys[index];
    if (obj[object].materia === 'Matemática') {
      sum += obj[object].numeroEstudantes
    }
  }
  return sum;
}

console.log(countStudents(allLessons));