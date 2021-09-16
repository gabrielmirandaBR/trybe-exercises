const fs = require('fs').promises;

function readFile() {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((file) => JSON.parse(file))
    .then((arrSimpsons) => arrSimpsons.map(({ id, name }) => `${id} - ${name}`))
    .then((result) => result.forEach((element) => {
        console.log(element);
      }))
    .catch((err) => {
      console.error(err);
    });
}
readFile();