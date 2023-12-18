const User = require('../models/urlModel')


async function handleHomePage(req, res) {

    const urls = await User.find({})
    return res.render('home', {urls: urls}) // or {urls}
}

module.exports = {
    handleHomePage,
}