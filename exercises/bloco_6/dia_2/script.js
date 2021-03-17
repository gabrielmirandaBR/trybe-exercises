const selectEstate = document.getElementById('estate');
const selectDate = document.getElementById('datepicker').value;
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

/* function printCurriculum() {
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    let print;
    for (let index = 0; index < inputAll.length; index += 1) {
      if (inputAll.length > 0) {
        print = document.createElement('div');
        print.className = 'item-print';
        print.innerHTML = inputAll[index].value;
        curriculumContainer.style.border = '1px solid black';
        curriculumContainer.style.textAlign = 'justify';
        curriculumContainer.style.padding = '15px';
        curriculumContainer.appendChild(print); 
      }
    }
    print.innerHTML = document.getElementById('estate').value.toUpperCase();
    print.innerHTML = document.getElementById('datepicker').value;
  });
}
printCurriculum(); */

/* function clearCurriculum() {
  clearButton.addEventListener('click', function() {
    curriculumContainer.innerHTML = '';
    curriculumContainer.style.border = 'none';
    curriculumContainer.style.padding = 'none';
  });
}
clearCurriculum() */

let picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000
    },
    position: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true,
    }
  },
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.'
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.'
    },
    address: {
      required: 'O campo endereço é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.'
    },
    city: {
      required: 'O campo cidade é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.'
    },
    state: {
      required: 'O campo estado é obrigatório.',
    },
    radio: {
      required: 'A escolha de um item é obrigatória.',
    },
    text: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    position: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    office: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'
    },
    date: {
      required: 'Este campo é obrigatório.',
    }
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  }
});
