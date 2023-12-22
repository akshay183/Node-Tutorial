const User = require('../models/userModel')


async function handleSignUp (req, res) {
    
    const {
        name,
        email,
        password
    } = req.body

    const result = await User.create({
        name,
        email,
        password
    })

    return res.render('home')
}

module.exports = {
    handleSignUp
}