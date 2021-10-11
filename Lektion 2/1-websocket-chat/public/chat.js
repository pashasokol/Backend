const userName = new URLSearchParams(window.location.search).get('name');
const socket = io();
const name = document.querySelector('#name');


name.innerText = userName;

const output = document.querySelector('#output');
const form = document.querySelector('#form');
const message = document.querySelector('#message');
const chat = document.querySelector('#chat-window');
const feedback = document.querySelector('#feedback');


socket.on('connect', () => {
    socket.emit('user', userName);
})


socket.on('user', data => {
    output.innerHTML += `<p class="mb"> ${data} </p>   `
})


socket.on('disconnect', () => {
    socket.emit('user', userName);
});



socket.on('message', data => {
    console.log(data);

    let pos;
    data.id === socket.id ? pos = 'right' : pos = '';

    output.innerHTML += `
            <div class="chat-box ${pos}">
                <p class="chat-name">${data.name}</p>
                <p class="chat-msg">${data.message}</p>
            </div>
    
    `

    feedback.innerHTML = '';


    console.log(chat.scrollHeight);
    chat.scrollTop = chat.scrollHeight;
});



// Emit event

form.addEventListener('submit', e =>{
    e.preventDefault();

    if(message.value.trim() !== '' ) {

        socket.emit('message', {
            id: socket.id,
            message: message.value,
            name: userName
        })
    }



    message.value = '';

    message.focus();

})

message.addEventListener('keypress', () => {
    socket.emit('typing', userName);
})


socket.on('typing', data => {
    feedback.innerHTML = ` <p> ${data} is typing message...  </p>  `
})