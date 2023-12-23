const express = require('express');
const {
    handleHomePage,
    handleSignUpPage,
    handleLoginPage
} = require('../controller/staticController')


const router = express.Router()

router.get('/', handleHomePage)
router.get('/sign_up', handleSignUpPage)
router.get('/login', handleLoginPage)

module.exports = router