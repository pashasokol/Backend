const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');
const addBtn = document.querySelector('#addBtn');


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
        title.classList = 'complete';
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

}

const deleteTodo = todo => {

}




addBtn.addEventListener('click', ()=> {
    if(input.value.trim() !== '') {
        alert(input.value);
        createTodo(input.value);
        input.value = '';
    }
})
