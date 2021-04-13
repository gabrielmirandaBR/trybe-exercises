const fetch = require('node-fetch');

async function verifiedFetch(url) { // o async transforma a função em uma promise
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') { // se o endpoint for correto
    return fetch(url) // retorna chamando o endpooint
      .then((r) => r.json()) // então o transforma em .json
      .then((r) => (r.value)); // então coleta a frase
  }
  throw new Error('endpoint não existe'); // se o endpoint foe incorreto, retorna um erro
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev') // espera a reposta dentro da função com async para continuar
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`) // então, retorna a piada
    .catch((err) => err); // se não, msg de erro
  console.log(message);
}

sendJokeToFriend('Anna');