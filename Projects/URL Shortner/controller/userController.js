const User = require('../models/userModel')


async function handleSignUp (req, res) {
    
    const result = await User.create({
        name : req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    return res.render('home')
}

module.exports = {
    handleSignUp
}