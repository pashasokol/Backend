const express = require('express');
const http = require('http');
const path = require('path');
const { listenerCount } = require('process');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);


app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4000;

server.listen(PORT, ()  => {
    console.log('Server running on http://localhost: ' + PORT);
})

const io = socket(server);

io.on('connection', socket => {


    socket.on('user', data => {
        console.log(data);
        socket.broadcast.emit('user', ` ${data} has joined the chat `)

    }) 



    socket.on('disconnect', data => {
        io.emit('user', ` ${data} has left the chat`
         );
    })
    console.log('new user connected', socket.id);


    // socket.emit('message', 'Welcome to the chat');

    socket.on('message', data => {
        // console.log(data);

        io.sockets.emit('message',data);

    })


    socket.on('typing', data => {
        socket.broadcast.emit('typing', data);
    })


})




