const fs = require('fs');

// LÄSA FILER

// fs.readFile('./mapp/text.txt', 'utf8', (err,data)   => {
//     if(err) {
//         console.log(err);
//     } 

//     // console.log(data.toString());
//     console.log(data);
// });

// console.log('det här ligger efter');


// SKRIVA FILER

// fs.writeFile('./mapp/text3.txt', 'En Ny text', () => {
//     console.log('Ändrade på texten');
// })

// LÄgga till i en fil


// fs.appendFile('./mapp/text.txt', ' Det här är en text som vi har laft till', () => {

//     console.log('la till text');    
// });


// Döpa om en fil

// fs.rename('./mapp/text3.txt', './mapp/text2.txt', err =>{
//     if(err) {
//         console.log(err);

//     }


//     console.log('bytte namn på filen');
// })


// MAPPAR

// if(!fs.existsSync('./Nymapp'))
//  {
//     fs.mkdir('./NyMapp', err => {
//         if(err)
//         console.log(err);
    
//         console.log('mapp skapad');
//     })
    

// }  else {

//     fs.rmdir('./NyMapp', err => {
//         if(err)
//         console.log(err);
//         else
//         console.log('Mappen fanns redan... Ta bort den');
//     })
// }



// // ta bort filer

// if(fs.existsSync('./mapp/text2.txt')) {
//     fs.unlink('./mapp/text2.txt', err => {
//         if(err)
//          console.log(err);
//         else
//         console.log('tar bort filen')
//     })
// }


