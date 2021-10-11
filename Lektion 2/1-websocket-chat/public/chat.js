const userName = new URLSearchParams(window.location.search).get('name');
const socket = io();
const name = document.querySelector('#name');


name.innerText = userName;

const output = document.querySelector('#output');
const form = document.querySelector('#form');
const message = document.querySelector('#message');
const chat = document.querySelector('#chat-window');


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
