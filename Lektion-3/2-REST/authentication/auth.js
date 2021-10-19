const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;


exports.generateToken = user => {
    return jwt.sign({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email



    }, secretKey, { expiresIn: '1h'})
}