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

const clients = new Map();
let clientId = 0;

io.on('connection', (socket) => {
  const id = ++clientId;
  clients.set(id, socket);
  console.log('User ' + id + ' connected.');
  io.emit('userConnect', 'User ' + id + ' connected.');

  socket.on('disconnect', () => {
    console.log('User ' + id + ' disconnected.');
    io.emit('userDisconnect', 'User ' + id + ' disconnected.');
  });

  socket.on('message', (msg) => {
    console.log('User ' + id + ': ' + msg);
    io.emit('message', 'User ' + id + ': ' + msg);
  });
});

server.listen(3000, () => {
  console.log('http://localhost:3000/');
});
