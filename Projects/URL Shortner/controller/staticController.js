const User = require('../models/urlModel')


async function handleHomePage(req, res) {

    const user = req.user
    if(!user) {
        return res.redirect('/login')
    }

    const urls = await User.find({createdBy: user._id})
    return res.render('home', {urls: urls}) // or {urls}
}

async function handleSignUpPage(req, res) {

    res.render('sign_up')
}

async function handleLoginPage(req, res) {

    res.render('login')
}

module.exports = {
    handleHomePage,
    handleSignUpPage,
    handleLoginPage,
}