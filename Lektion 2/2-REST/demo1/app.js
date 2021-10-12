const express = require('express');
const app = express();

const PORT = 8080;
const serverURI = 'http://localhost:' + PORT;


const middleware = (req, res, next) => {
  console.log('running middleware');
  next();
}

// app.use('/posts', middleware)

app.get('/', (req, res) => {
  res.send('Homepage');
})

app.get('/posts', (req, res) => {
  res.send('GEsadasdT');
})
app.post('/posts', middleware, (req, res) => {
  res.send('POST')
})


app.listen(PORT, () => console.log('Webserver: ' + serverURI));