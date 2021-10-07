const http = require('http');
const server = http.createServer((req,res)  => {
    res.end('<h1>HELLO DÄR</h1>')
})

const PORT = process.env.PORT || 9999;


server.listen(PORT, 'localhost', ()  => {
    console.log('Server running at http://localhost:' + PORT)
} );