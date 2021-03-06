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

let accessList = document.querySelector('#days');

for (index = 0; index < dezDaysList.length; index += 1) {
  let item = dezDaysList[index];
  let listItem = document.createElement('li');
  listItem.className = 'day';
  listItem.innerText = item;

  if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
    listItem.className = 'day friday';
  } else if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    listItem.className = 'day holiday';
  } 
  
  accessList.appendChild(listItem);
}


// 2.
let button = document.createElement('button');
function createButton (string) {
  let buttonContainer = document.querySelector('.buttons-container');
  button.id = 'btn-holiday';
  button.innerText = string;
  buttonContainer.appendChild(button);
}
createButton('Feriados');


// 3.

button.addEventListener('click', function () {
  let days = document.querySelectorAll('li.day');
  for (let index = 0; index < days.length; index += 1) {
    if (index === 25 || index === 26 || index === 32) {
      let item = days[index];
      if(item.style.backgroundColor === '') {
        item.style.backgroundColor = 'rgb(280,258,258)';
      } else {
        item.style.backgroundColor = '';
      }
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
fridayButton.addEventListener('click', function (string) {
  let holidays = document.querySelectorAll('li.day.friday');
  for (let index = 0; index < holidays.length; index += 1) {
    let holiday = holidays[index];
    if(holiday.innerText !== 'SEXTOU') {
      holiday.innerText = 'SEXTOU';
    } else {
    holiday.innerText = fridayDays[index];
    }
  }
});
