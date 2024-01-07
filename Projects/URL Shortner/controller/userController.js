const User = require('../models/userModel')
const { v4: uuidv4 } = require('uuid')
const { setUserId } = require('../service/auth')


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

    const token = setUserId(user);

    res.cookie('uid', token)
    return res.redirect('/');
}

module.exports = {
    handleSignUp,
    handleLogin,
}