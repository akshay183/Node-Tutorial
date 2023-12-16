const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose');
const { type } = require('os');

//middleWare - sort of plugin(need to get request body)
app.use(express.urlencoded({ extended: false }))

// connect mongoose
mongoose
    .connect('mongodb://127.0.0.1:27017/tutorial-db')
    .then((data) => console.log("mongoose connnected"),
        (err) => console.log("err occured", err))

// User Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
    }
},
    {
        timestamps: true
    })

// model is class
const User = mongoose.model('user', userSchema)

app.get('/', (req, res) => {
    return res.json('welcome to homepage')
})

app.get('/users', async (req, res) => {

    const resultFromDB = await User.find({})

    const html = `
    <ul>
        ${resultFromDB.map((user) => `<li>${user.firstName}</li>`).join(' ')}
    </ul>
    `
    return res.send(html)
})

app.get('/api/users', async (req, res) => {

    const resultFromDB = await User.find({})

    return res.json(resultFromDB)
})

app
    .route('/api/users/:id')
    .get(async (req, res) => {
        const id = (Number)(req.params.id)

        const resultuserFromDb = await User.findById(id)

        return res.json(resultuserFromDb)
    })
    .patch(async (req, res) => {
        const id = (Number)(req.params.id)

        await User.findByIdAndUpdate(id, { lastName: "updated" })

        res.json({ message: "success" })
    })
    .delete(async (req, res) => {
        const id = (Number)(req.params.id)

        await User.findByIdAndDelete(id)

        res.json({ message: "success" })
    })

app.post('/api/users', async (req, res) => {

    let body = req.body

    await User.create(body)

    return res
        .status(201)
        .json({ message: "success" })
})

app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
})