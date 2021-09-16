const fs = require('fs').promises;

function readFile() {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content))
    .then((arrContent) => {
      const result = arrContent.map(({ id, name }) => `${id} - ${name}`);
      return result;
    })
    .then((arrContentUpdate) => {
      arrContentUpdate.forEach((element) => console.log(element));
    })
    .catch((err) => {
      console.error(err);
    });
}
readFile();