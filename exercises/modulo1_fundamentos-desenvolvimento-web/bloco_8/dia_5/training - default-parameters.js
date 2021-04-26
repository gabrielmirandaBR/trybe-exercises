const multiply = (number, value) => {
  return number * value;
};

console.log(multiply(8));

// default parameters. Se não passar nenhum valor para value, o default será 1

const multiplyDefaultValue = (number, value = 1) => {
  return number * value;
};

console.log(multiplyDefaultValue(8));
