const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'hhtp//localhost:3000',
    methods: ['GET', 'POST'],
  },
});

require('./sockets/chat')(io);
require('./sockets/rooms')(io);

app.use(express.static(__dirname + '/public'));

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/public/chat.html');
});

http.listen(3000, () => {
  console.log('Server on: port 3000');
});