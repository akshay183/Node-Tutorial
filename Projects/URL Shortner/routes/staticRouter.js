const express = require('express');
const {
    handleHomePage,
    handleSignUpPage
} = require('../controller/staticController')


const router = express.Router()

router.get('/', handleHomePage)
router.get('/sign_up', handleSignUpPage)

module.exports = router