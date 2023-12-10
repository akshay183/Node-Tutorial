const http = require('http');
const fs = require('fs');


const myServer = http.createServer((req, res) => {
    // console.log('Request Received')
    fs.appendFile('./test.txt', `${Date.now()} - ${req.url} - ${res.statusCode}\n`,(err, data) => {
        console.log(req.url)
        switch(req.url) {
            case '/about':
                res.end('I am Akshay Sharma')
                break
            case '/':
                res.end('Hello NodeJS!')
                break
            default:
                res.end('Nothing exists - 404')
        }
    })
})

myServer.listen(8000, (err) => {
    console.log("Everything works")
})