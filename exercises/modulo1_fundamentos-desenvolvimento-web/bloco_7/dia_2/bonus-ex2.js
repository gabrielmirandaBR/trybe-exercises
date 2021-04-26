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

//Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const showReport = (obj, name) => {
  const keys = Object.values(obj);
  const subjects = [];
  let sum = 0;
  let teacher;

  for (index in keys) {
    const object = keys[index];
    if (object.professor === name) {
      teacher = object.professor;
      subjects.push(object.materia);
      sum += object.numeroEstudantes
    }
  }
  return {
    professor: teacher,
    aulas: subjects,
    estudantes: sum
  }
  
}

console.log(showReport(allLessons, 'Maria Clara'))
