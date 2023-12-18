const express = require('express')
const path = require('path');
const app = express()
const User = require('./models/urlModel.js')
const PORT = 8000
const router = require('./routes/urlRouter')
const {mongoDBConnect} = require('./connection.js')

app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

// mongoDB connect
mongoDBConnect("mongodb://127.0.0.1:27017/tutorial-db").
    then(() => {
        console.log("mongoose connected");
    })

// request
app.get('/test', async (req, res) => {
    
    const urls = await User.find({})
    return res.render('home', {urls})
})

app.get('/test/new_doc', async (req, res) => {
    
    const urls = await User.find({})
    return res.render('home')
})

// route
app.use('/api', router)

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`))