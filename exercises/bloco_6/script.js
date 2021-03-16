const selectEstate = document.getElementById('estate');
const selectDate = document.getElementById('date').value;
const submitButton = document.getElementById('submit');
const inputAll = document.querySelectorAll('input');
const curriculumContainer = document.getElementById('curriculum');
const clearButton = document.getElementById('clear');

function createEstates () {
  const estates = ['AC', 'AL', 'AP','AM', 'BA','CE', 'DF', 
  'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR','PE', 
  'PI','RJ','RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  for(let index = 0; index < estates.length; index +=1) {
    let elementOption = document.createElement('option');
    elementOption.value = estates[index].toLowerCase();
    elementOption.id = 'estate';
    elementOption.innerHTML = estates[index];
    selectEstate.appendChild(elementOption);
  }
}
createEstates();

/* document.addEventListener('click', function () {
  const day = selectDate.substring(0,2);
  const month = selectDate.substring(3,5);
  const year = selectDate.substring(6,10);
  if((day < 31 && day > 0) && (month < 13 && month > 0) && (year > 0 && year.length === 4)) {
    return true;
  }
    return false;
}); */

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  for (let index = 0; index < inputAll.length; index += 1) {
    if(inputAll.length > 0) {
      let print = document.createElement('div');
      print.className = 'item-print';
      print.innerHTML = inputAll[index].value;
      curriculumContainer.style.border = '1px solid black';
      curriculumContainer.style.textAlign = 'justify';
      curriculumContainer.style.padding = '15px';
      curriculumContainer.appendChild(print); 
    }
  }
});

clearButton.addEventListener('click', function(event) {
  event.preventDefault();
  curriculumContainer.innerHTML = '';
  curriculumContainer.style.border = 'none';
  curriculumContainer.style.padding = 'none';
});
