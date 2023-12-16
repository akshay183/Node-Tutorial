const express = require('express');
const {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createUser
} = require('../controller/userController')

const router = express.Router()


router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUserById)
    .patch(updateUserById)
    .delete(deleteUserById)


module.exports = router