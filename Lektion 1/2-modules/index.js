// import user from './user';

const User = require('./user');

// console.log('hej från Index');
// console.log(user);


const user1 = new User('Pavel','Sakalouski');

user1.greet();

// const names = require('./module');
// console.log(names);
const {names, ages} = require('./module');

console.log(names);
console.log(ages);