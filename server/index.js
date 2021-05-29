const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  let roomId = socket.id;

  socket.on('disconnect', () => {
    console.log('User ' + socket.id + ' disconnected.');
    io.to(roomId).emit('userDisconnect', 'User ' + socket.id + ' disconnected.');
  });

  socket.on('message', (msg) => {
    console.log('User ' + socket.id + ': ' + msg);
    io.to(roomId).emit('message', 'User ' + socket.id + ': ' + msg);
  });

  socket.on('joinRoom', (id) => {
    roomId = id;
    socket.join(roomId);
    socket.to(roomId).emit('joinedRoom', (roomId));
    io.to(roomId).emit('userConnect', 'User ' + socket.id + ' connected.');
  })
});

server.listen(3000, () => {
  console.log('http://localhost:3000/');
});
