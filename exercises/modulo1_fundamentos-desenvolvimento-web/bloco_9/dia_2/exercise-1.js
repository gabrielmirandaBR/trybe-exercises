// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const renderJoke = (joke) => {
  const h2 = document.getElementById('jokeContainer');
  const span = document.createElement('span');

  span.innerHTML = joke;
  h2.appendChild(span);
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => renderJoke(data.joke));
};

window.onload = () => fetchJoke();
