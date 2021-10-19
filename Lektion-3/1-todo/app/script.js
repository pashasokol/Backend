const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');
const addBtn = document.querySelector('#addBtn');
const todoForm = document.querySelector('#todoForm');
const errorMsg = document.querySelector('#errorModaLabel');
const plusBtn = document.querySelector('#plusBtn');
const modal = document.querySelector('#addTodo');

const myModal = new bootstrap.Modal(document.getElementById('addTodo'));
const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));

let todos = [];

const fetchTodos = async ()  => {
    const res = await fetch('http://localhost:9999/api/todos');
    const data = await res.json();

    todos = data;
    console.log(todos);

    listTodos(todos);

}

fetchTodos();


const listTodos = (todos)  => {
    output.innerHTML = '';
    todos.forEach(todo => {
        newTodo(todo);
    })
}


const newTodo = (todo) => {
    let _todo = document.createElement('div');
    _todo.classList = 'border p-1 mb-1';

    let inner = document.createElement('div');
    inner.classList = 'd-flex justify-content-between align-items-center';

    let title = document.createElement('h4');
    title.classList = 'my-0 title';

    if(todo.completed) {
        title.classList.add('complete');
    }
    title.innerText = todo.title;
    title.addEventListener('click', ()=> {
        updateTodo(todo)
    })

    let button = document.createElement('button');
    button.classList = 'btn btn-sm btn-danger';
    button.innerHTML = '<i class="fas fa-trash"></i>';

    button.addEventListener('click', () => deleteTodo(todo));


    inner.appendChild(title);
    inner.appendChild(button);
    _todo.appendChild(inner);
    output.appendChild(_todo);


}


const updateTodo = todo => {

    fetch(`http://localhost:9999/api/todos/${todo._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }, 
        body: JSON.stringify({
            completed: !todo.completed
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.status)
        fetchTodos();
    })


}

const deleteTodo = async todo => {

    if(todo.completed) {

        await fetch(`http://localhost:9999/api/todos/${todo._id}`, {
            method: 'DELETE'
        })
        fetchTodos();
    }  else {
        errorMsg.innerText = 'You need to complete the todo first'
        errorModal.show();
        
    }

}

const createTodo = title => {
    fetch('http://localhost:9999/api/todos/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.status)
        fetchTodos();
    })

}


todoForm.addEventListener('submit', e => {
    e.preventDefault();
    if(input.value.trim() !== '') {
        // alert(input.value);
        createTodo(input.value);
        input.value = '';
        myModal.hide();
    }
})


modal.addEventListener('shown.bs.modal', () => {
    console.log('click');
    input.focus();
})







// addBtn.addEventListener('click', ()=> {
//     if(input.value.trim() !== '') {
//         alert(input.value);
//         createTodo(input.value);
//         input.value = '';
//     }
// })
