module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`Usuário conectado. ID': ${socket.id} `);
  
    socket.emit('ola', `Bem vindo, usuário: ${socket.id}`);
  
    
    socket.on('ping', () => {
      console.log(`${socket.id} emitiu um ping!`);
      socket.emit('pong', `${socket.id} enviou um ping!`);
    });
  });
};