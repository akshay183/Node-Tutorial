const jwt = require('jsonwebtoken')
const secretOrPrivateKey = 'worldSecretkey!@#123498(&%'

function setUserId (user) {

    return jwt.sign({
        _id: user._id,
        email: user.email
    },
    secretOrPrivateKey)
}

function getUser (token) {
    
    try {
        return jwt.verify(token, secretOrPrivateKey)
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUserId,
    getUser,
}