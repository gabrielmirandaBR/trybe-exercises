function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 1.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysofTheMoth () {
  let accessList = document.querySelector('#days');

  for (index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let listItem = document.createElement('li');
    listItem.innerHTML = day;
    accessList.appendChild(listItem);
    if (day === 24 || day === 31) {
      listItem.className = 'day holiday';
    } else if (day === 4 || day === 11 || day === 18) {
      listItem.className = 'day friday';
    } else if (day === 25) {
      listItem.className = 'day holiday friday';
    } else {
      listItem.className = 'day';
    }
  }
}
createDaysofTheMoth();


// 2.
let holidayButton = document.createElement('button');
function createButton (string) {
  let buttonContainer = document.querySelector('.buttons-container');
  holidayButton.id = 'btn-holiday';
  holidayButton.innerText = string;
  buttonContainer.appendChild(holidayButton);
}
createButton('Feriados');


// 3.
holidayButton.addEventListener('click', function () {
  let listHolidays = document.querySelectorAll('.holiday');

  for (let index = 0; index < listHolidays.length; index += 1) {
    if (listHolidays[index].style.backgroundColor === 'white') {
      listHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      listHolidays[index].style.backgroundColor = 'white';
    }
  }
});

// 4.
let fridayButton = document.createElement('button');
function createButton2(string) {
  let accessButtonContainer = document.querySelector('.buttons-container');
  fridayButton.id = 'btn-friday';
  fridayButton.innerText = string;
  accessButtonContainer.appendChild(fridayButton);
}
createButton2('Sexta-feira');


// 5.
let fridayDays = [4, 11, 18, 25];

fridayButton.addEventListener('click', function () {
  let holidays = document.querySelectorAll('li.day.friday');

  for (let index = 0; index < holidays.length; index += 1) {
    let holiday = holidays[index];
    if (holiday.innerText !== 'SEXTOU') {
      holiday.innerText = 'SEXTOU';
    } else {
    holiday.innerText = fridayDays[index];
    }
  }
});


// 6.
function zoomIn () {
  let days = document.querySelector('#days');

  days.addEventListener ('mouseover', function (event) {
    event.target.style.fontSize = '25px';
  })
};
zoomIn();

function zoomOut () {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
  })
};
zoomOut();


// 7.
function createActivities (string) {
  let activity = document.createElement('span');
  activity.innerText = string;

  document.querySelector('.my-tasks').appendChild(activity);
}
createActivities('Pescar');


// 8.
function createTag (color) {
  let tag = document.createElement('div');
  tag.className = 'task';
  tag.style.backgroundColor = color;

  document.querySelector('.my-tasks').appendChild(tag);
}
createTag('blue');


// 9.
let tag = document.querySelector ('.task');

tag.addEventListener('click', function (event) {
  if (tag.className === 'task') {
    event.target.className = 'task selected';
  } else {
    event.target.className = 'task'
  }
});


// 10.
function addEvent () {
  let days = document.querySelector('#days');
  let selectedTag = document.getElementsByClassName('task selected');
  let colorTag = tag.style.backgroundColor;

  days.addEventListener('click', function(event) {
    let colorDay = event.target.style.color;
    if (selectedTag.length > 0 && colorDay !== colorTag) {
      event.target.style.color = colorTag;
    } else if (selectedTag !== 0 && colorDay === colorTag) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}
addEvent();


// Bônus.

function addCompromise () {
  let textBox = document.querySelector('#task-input');
  let button = document.querySelector('#btn-add');
  let listCompromises = document.querySelector('.task-list');
  listCompromises.innerHTML = 'MEUS COMPROMISSOS';

  button.addEventListener('click', function () {
    if (textBox.value === '') {
      alert('Por favor, insira um compromisso');
    } else {
      listItem = document.createElement('li');
      listItem.innerText = textBox.value;
      listCompromises.appendChild(listItem);
    }
  });

  textBox.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 && textBox.value !== '') {
      listItem = document.createElement('li');
      listItem.innerText = textBox.value;
      listCompromises.appendChild(listItem);
      } else if (event.keyCode === 13 && textBox.value === '') {
        alert('Por favor, insira um compromisso');
    }
  });
}
addCompromise();
