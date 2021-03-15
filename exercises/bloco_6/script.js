const selectEstate = document.getElementById('estate');

function createEstates () {
  const estates = ['AC', 'AL', 'AP','AM', 'BA','CE', 'DF', 
  'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR','PE', 
  'PI','RJ','RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  for(let index = 0; index <estates.length; index +=1) {
    let elementOption = document.createElement('option');
    elementOption.value = estates[index].toLowerCase();
    elementOption.id = 'estate';
    elementOption.innerHTML = estates[index];
    selectEstate.appendChild(elementOption);
  }
}
createEstates()