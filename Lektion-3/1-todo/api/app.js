const express = require('express');
const app = express();

// Importera controllers
const todosController = require('./controllers/todosController');





// Middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api/todos', todosController);




module.exports = app;