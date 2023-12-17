const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routes/urlRouter')
const {mongoDBConnect} = require('./connection.js')

app.use(express.json())

// mongoDB connect
mongoDBConnect("mongodb://127.0.0.1:27017/tutorial-db").
    then(() => {
        console.log("mongoose connected");
    })

// route
app.use('/api', router)

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`))