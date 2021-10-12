const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const { userConnect, userDisconnect } = require('./users');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4000;


server.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
})


const io = socket(server);

io.on('connection', socket => {

  socket.on('user', data => {
    userConnect(socket.id, data);
    socket.broadcast.emit('user', `${data} has joined the chat`)
  })

  socket.on('disconnect', () => {
    const user = userDisconnect(socket.id)
    io.emit('user', `${user.userName} has left the chat`);
  })

  socket.on('message', data => {
    io.sockets.emit('message', data)
  })


  socket.on('typing', data => {
    socket.broadcast.emit('typing', data)
  })

})