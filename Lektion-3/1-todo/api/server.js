const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();



const PORT = process.env.PORT || 8085;

const serverURI = 'http://localhost: ' + PORT;
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => {
    console.log('Server running at ' + serverURI);
} )

mongoose.connect(mongoURI, () => console.log('Connected to DB'))