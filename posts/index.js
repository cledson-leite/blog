const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req, res) => {
    const id = uuid.v4().toString("hex");
    const { title } = req.body

    posts[id] = {id, title}

    res.status(201).send(posts[id])
})

app.listen(8080, () => console.log('Listening in 8080'))