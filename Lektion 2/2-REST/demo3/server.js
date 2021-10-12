const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;


const serverURI = 'http://localhost:' + PORT;
const mongoURI = 'mongodb+srv://Pavel:123Pav123@cluster0.mk9wp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.listen(PORT, () => console.log('webbserver:' + serverURI));

mongoose
.connect(mongoURI, () => console.log('Connected to DB'));




