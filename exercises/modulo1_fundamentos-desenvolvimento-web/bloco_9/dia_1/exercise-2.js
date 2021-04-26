const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: 'Mars',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: 'kilometers',
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: 'kilometers',
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: 'kilometers',
  },
};
// Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
// Resposta: O primeiro console.log --> A, não possui a função setTimeOut, então será executada primeiro. Depois será executado o 3º console.log --> C, pois possui um delay(2º parâmetro da função setTimeOut) menor de 2000 milisegundos. Por último, será executado o C, pois possuim um delay maior.
// A --> C --> B
console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C