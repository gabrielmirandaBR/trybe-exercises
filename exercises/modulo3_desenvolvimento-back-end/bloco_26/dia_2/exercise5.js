const fs = require('fs').promises;

async function createFile() {
  const arrString = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  arrString.map((word, index) => {
    fs.writeFile(`./file${index + 1}.txt`, word);
  });

  const files = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const words = await Promise.all(
   files.map((element) => fs.readFile(element)),
  );

  const frase = words.join(' ').toString();

  console.log(frase);

  return fs.writeFile('./fileAll.txt', frase);
}

createFile();