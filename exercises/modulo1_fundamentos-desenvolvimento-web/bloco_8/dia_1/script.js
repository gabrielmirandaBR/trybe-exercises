const functionFirstClass = () => {
  console.log('Acordando!');
}

const functionFirstClass2 = () => {
  console.log('Bora tomar café!');
}

const functionFirstClass3 = () => {
  console.log('Partiu dormir!');
}

const doingThings = (function1) => {
  function1();
}

doingThings(functionFirstClass);
doingThings(functionFirstClass2);
doingThings(functionFirstClass3);