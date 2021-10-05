const hello = ()  => {
    console.log("Hello World");
}


// hello();
// hello();
// hello();
// hello();
// hello();
// hello();

console.log(global);

global.setTimeout(() => {
    console.log('timed out');
}, 3000);