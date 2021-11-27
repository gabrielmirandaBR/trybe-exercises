const socket = io();
const button = document.querySelector('#ping');
button.addEventListener('click', (e) => {
  socket.emit('ping');
  return false;
});

// cria uma li e o seu texto é a msg que vem do back-end
function createMessage(msg) {
  const msgUl = document.querySelector('.messages');
  const li = document.createElement('li');
  li.innerText = msg;
  msgUl.appendChild(li);
};

// Quando nosso evento `ola` for emitido, vamos pegar a string mensagem enviada pelo nosso evento e passar para a função `createMessage`
socket.on('ola', (msg) => createMessage(msg))
socket.on('pong', (msg) => createMessage(msg))