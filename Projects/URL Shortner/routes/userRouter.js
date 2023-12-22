const express = require("express")
const {
    handleSignUp,
} = require('../controller/userController')


const router = express.Router()

router.post('/', handleSignUp)

module.exports = router