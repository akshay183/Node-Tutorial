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

async function handleLogin (req, res) {
    
    const {
        email,
        password
    } = req.body

    const user = await User.findOne({
        email,
        password,
    })

    if(!user) {
        return res.render("login", {
            error: "Invalid UserName or Password"
        })
    }
    return res.redirect('/')
}

module.exports = {
    handleSignUp,
    handleLogin,
}