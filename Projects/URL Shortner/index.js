const express = require('express')
const path = require('path');
const app = express()
const PORT = 8000
const cookieParser = require('cookie-parser')
const { restrictCallToUrl } = require('./middleware/authMiddleware.js')

const staticRouter = require('./routes/staticRouter')
const urlRouter = require('./routes/urlRouter')
const userRouter = require('./routes/userRouter.js')

const {mongoDBConnect} = require('./connection.js')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

// mongoDB connect
mongoDBConnect("mongodb://127.0.0.1:27017/tutorial-db").
    then(() => {
        console.log("mongoose connected");
    })

// route
app.use('/api', restrictCallToUrl, urlRouter) // inline middleware. 
app.use('/user', userRouter)
app.use('/', staticRouter)

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`))