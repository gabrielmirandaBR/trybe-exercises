const fs = require('fs').promises;

async function writeFile(fileName, content) {
  await fs.writeFile(`./${fileName}.txt`, content);

  return 'Escrito com sucesso!';
}

module.exports = writeFile;