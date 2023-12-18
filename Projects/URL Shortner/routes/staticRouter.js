const express = require('express');
const {
    handleHomePage,
} = require('../controller/staticController')


const router = express.Router()

router.get('/', handleHomePage)

module.exports = router