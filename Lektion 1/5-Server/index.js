const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req,res)  => {



    console.log(req.url, req.method);

    res.setHeader('Content-type', 'text/html')

    // fs.readFile('./views/index.html', (err, data)   => {
    //     if(err)  {
    //         console.log(err);
    //         res.end();
    //     }

    //     res.end(data);
    // })

    // let url;

    // switch(req.url) {
    //     case '/':
    //         url = 'index.html';
    //         break;
    //     case '/about':
    //         url = 'about.html';
    //         break;
    //     default:
    //         url = '404.html';    

    // }

    // let filePath = path.join(__dirname, 'views', url);

    // fs.readFile(filePath, (err,data) => {
    //     if(err) {
    //         console.log(err);
    //         res.end();
    //     } 

    //     res.end(data);
        
    // });
    

    // if(req.url === '/'){
    //     res.end('<h1>Home</h1>')
    // }  else if(req.url === '/about') {
    //     res.end('<h1>About</h1>')
    // }


    if(req.url != '/favicon.ico') {
       filePath = path.join(
            __dirname,
            'views',
            req.url === '/' ? 'index.html' : req.url + '.html'
            
        );
        console.log(req.url);
    } else {
        console.log(req.url);
    }

    console.log(filePath);

    fs.readFile(filePath, (err,data) => {
        if(err) {
            console.log(err.code);
            if(err.code === 'ENOENT') {
                console.log('inne i enoent');

                   fs.readFile('./views/404.html', (err,data) => {
        if(err) {
            console.log(err);
            res.end();
        } 

        res.end(data);
        
    })
    

} else {
    res.end(data);
}
    
        }
        res.end(data);

    })




})




const PORT = process.env.PORT || 9999;


server.listen(PORT, 'localhost', ()  => {
    console.log('Server running at http://localhost:' + PORT)
} );