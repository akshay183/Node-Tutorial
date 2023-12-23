const User = require('../models/urlModel')


async function handleHomePage(req, res) {

    const urls = await User.find({})
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