const fs = require('fs').promises;

async function createFiles() {
  const words = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  words.map((word, index) => {
    fs.writeFile(`file${index + 1}.txt`, word);
  });

  const files = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const arrFrase = await Promise.all(
    files.map((element) => fs.readFile(element)),
  );

  const stringFrase = arrFrase.join(' ');
  console.log(stringFrase);

  fs.writeFile('./fileAll.txt', stringFrase);
}
createFiles();
