const app = require('./app');

const PORT = process.env.PORT || 8080;
const serverURI = 'http://localhost:' + PORT;

app.listen(PORT, () => console.log('Webbserver: ' + serverURI));