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

const lessons = mergeObjs(lesson1, lesson2, lesson3);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const countTotalStudents = (obj) => {
  const objs = Object.keys(obj);
  let sum = 0;
  
  for (index in objs) {
   const key = objs[index];
    sum += obj[key].numeroEstudantes;
  }

  return sum;
}


console.log(countTotalStudents(lessons));
