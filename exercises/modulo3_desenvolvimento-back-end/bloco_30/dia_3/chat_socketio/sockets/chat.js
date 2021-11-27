module.exports = (io) => {
  io.on('connection', (socket) => {

    // envia um evento apenas para o agente que disparou a connection(quando recarrega a pag)
    socket.emit('serverMsg', 'Bem vind@ ao chat!');

    // envia evento para o front (usuários), mas menos para quem a disparou
    socket.broadcast.emit('serverMsg', `${socket.id} acabou de se conectar` );

    // escuta o evento chamado "cleintMsg" vindo do front-end
    socket.on('clientMsg', (msg) => {
      console.log(`Message ${msg}`);
      
    // envia um evento com o nome "serverMsg" para o front-end
    io.emit('serverMsg', msg);
    });

    socket.on('disconnect', () => {
      socket.broadcast.emit('serverMsg', `${socket.id} acabou de se desconectar`);
    });
  });
};