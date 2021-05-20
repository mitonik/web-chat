const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + '/client/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('userConnect', 'User connected.');
  socket.on('disconnect', () => {
    console.log('user disconnected');
    io.emit('userDisconnect', 'User disconnected.');
  });
  socket.on('message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});

server.listen(3000, () => {
  console.log('http://localhost:3000/');
});
