const express = require('express')
const port = 8000
const {loggerReqRes} = require('./middleware/loggerMiddleware')
const {mongoConnect} = require('./connection')
const userRouter = require('./routes/userRoutes')

const app = express()

//middleWare - sort of plugin(need to get request body)
app.use(express.urlencoded({ extended: false }))

// middleware practical use is creating log file.
app.use(loggerReqRes('logs.txt'))

// connect mongoose
mongoConnect('mongodb://127.0.0.1:27017/tutorial-db')
    .then((data) => console.log("mongoose connnected"),
        (err) => console.log("err occured", err))

// route
app.use('/api/users', userRouter)

app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
})