const http = require('http');
const fs = require('fs');
const url = require('url');


const myServer = http.createServer((req, res) => {
    // console.log('Request Received')

    if(req.url == '/favicon.ico') {
        return res.end()
    }

    fs.appendFile('./test.txt', `${Date.now()} - ${req.url} - ${res.statusCode}\n`,(err, data) => {
        console.log(req.url)

        const myUrl = url.parse(req.url, true)

        switch(myUrl.pathname) {
            case '/about':
                const username = myUrl.query.name
                const userId = myUrl.query.id

                res.end('Hey, ' + username + " your id," + userId)
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