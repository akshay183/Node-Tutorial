const User = require('../models/userModel')


async function getAllUsers(req, res) {

    const resultFromDB = await User.find({})
    return res.json(resultFromDB)
}

async function getUserById(req, res) {

    const id = (Number)(req.params.id)
    const resultuserFromDb = await User.findById(id)

    return res.json(resultuserFromDb)
}

async function updateUserById(req, res) {

    const id = (Number)(req.params.id)
    await User.findByIdAndUpdate(id, { lastName: "updated" })

    res.json({ message: "success" })
}

async function deleteUserById(req, res) {

    const id = (Number)(req.params.id)
    await User.findByIdAndDelete(id)

    res.json({ message: "success" })
}

async function createUser(req, res) {

    let body = req.body
    await User.create(body)

    return res
        .status(201)
        .json({ message: "success" })
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createUser,
}


