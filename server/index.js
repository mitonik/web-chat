const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + '/dist/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

io.on('connection', (socket) => {
  console.log('User ' + socket.id + ' connected.');
  io.emit('userConnect', 'User ' + socket.id + ' connected.');

  socket.on('disconnect', () => {
    console.log('User ' + socket.id + ' disconnected.');
    io.emit('userDisconnect', 'User ' + socket.id + ' disconnected.');
  });

  socket.on('message', (msg) => {
    console.log('User ' + socket.id + ': ' + msg);
    io.emit('message', 'User ' + socket.id + ': ' + msg);
  });
});

server.listen(3000, () => {
  console.log('http://localhost:3000/');
});
