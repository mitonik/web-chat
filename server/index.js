const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  let roomId = socket.id;

  socket.on('disconnect', () => {
    io.to(roomId).emit('userDisconnect', socket.id);
  });

  socket.on('message', (msg) => {
    io.to(roomId).emit('message', socket.id + ': ' + msg);
  });

  socket.on('joinRoom', (id) => {
    roomId = id;
    socket.join(roomId);
    let users = [];
    for (let user of io.sockets.adapter.rooms.get(roomId)) {
      users.push(user);
    }
    let message = {
      roomId: roomId,
      users: users
    }
    io.to(roomId).emit('userConnect', socket.id);
    socket.emit('joinedRoom', (message));
  })
});

server.listen(3000, () => {
  console.log('http://localhost:3000/');
});
