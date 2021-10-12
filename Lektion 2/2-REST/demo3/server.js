const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;
const serverURI = 'http://localhost:' + PORT;
const mongoURI = 'mongodb+srv://Joakim:BytMig123@cluster0.wpt0t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


app.listen(PORT, () => console.log('Webbserver: ' + serverURI));

mongoose
.connect(mongoURI, () => console.log('Connected to DB'));