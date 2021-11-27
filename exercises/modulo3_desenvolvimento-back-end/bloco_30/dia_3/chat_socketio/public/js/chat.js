const socket = io();

const form = document.querySelector('.form');
const inputMsg = document.querySelector('#messages__item');

// garatinr houve o encerramento da conexao(o usuario pode encerrar a conexao de diferentes maneiras e isso garante essas condiçoes)
window.onbeforeunload = function(e) {
  socket.disconnect();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // envia um evento para o back-end com o valor do campo que o usuário inseriu
  socket.emit('clientMsg', inputMsg.value);
  inputMsg.value = '';

  return false;
});

function createMsg(msg) {
  const msgUl = document.querySelector('.messages');
  const li = document.createElement('li');
  li.innerText = msg;
  msgUl.appendChild(li);
};

// escuta o evento chamado "serverMsg" vindo do back-end
socket.on('serverMsg', (msg) => createMsg(msg));