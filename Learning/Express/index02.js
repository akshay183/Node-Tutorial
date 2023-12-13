const express = require('express')
const app = express()
const port = 8000
let users = require('./MOCK_DATA.json')
const fs = require('fs');

//middleWare - sort of plugin(need to get request body)
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    return res.json('welcome to homepage')
})

// this is hybrid server, in which this route act for server side rendering.
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join(' ')}
    </ul>
    `
    return res.send(html)
})

app.get('/api/users', (req, res) => {
    
    return res.json(users)
})

app
    .route('/api/users/:id')
    .get((req, res) => {
        const id = (Number)(req.params.id)
        const user = users.find((user) => user.id === id)

        return res.json(user)
    })
    .patch()
    .delete()

app.post('/api/users', (req, res) => {
    // console.log(req.body)

    let body = req.body
    body = {id:users.length + 1, ...body}
    console.log(body)

    users.push(body)

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        res.status(201).json({
            id: users.length
        })
    })
    
})

app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
})