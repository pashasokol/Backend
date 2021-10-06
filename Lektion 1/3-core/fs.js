const fs = require('fs');

// LÄSA FILER

fs.readFile('./mapp/text.txt', (err,data)   => {
    if(err) {
        console.log(err);
    } 

    console.log(data);
});