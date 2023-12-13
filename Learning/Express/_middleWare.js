const express = require('express')
const app = express()
const port = 8000
const fs = require('fs');

app.use(express.urlencoded({ extended: false }))

// middleware practical use is creating log file.
app.use((req, res, next) => {

    fs.appendFile(

        './logs/middleWareLogs.txt',
        `${req.ip} - ${req.url} - ${Date.now()} \n`,
        (err, data) => {

            console.log("inside middleware");
            next() // this is imp else req would not get passed to next middleware/ app.
        })
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => console.log(`app listening on port ${port}!`))