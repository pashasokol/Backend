// const user = {
//     firstName: 'Pavel',
//     lastName: 'Sakalouski',
//     age: 28,
//     email: 'sokoliklive@gmail.com'

// }

// console.log('meddelande från user.js')

// module.exports = user;

class User {
    constructor(firstName,lastName) {
        this.firstName = firstName,
        this.lastName = lastName
    }

    greet() {
        console.log(`Hello. My name is ${this.firstName} ${this.lastName}.`);
    }
}

module.exports = User;