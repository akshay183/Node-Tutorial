const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    return res.send('Hello to HomePage')
})

app.get('/about', (req, res) => {
    return res.send(`Hello ${req.query.name}`)
})

app.listen(port, () => {
    console.log("Server up and running");
})