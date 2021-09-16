const fs = require('fs').promises;

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf8')
    .then((result) => JSON.parse(result))
    .catch((err) => console.log(err));
}

function setSimpsons(newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };