const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', async (req, res) => {
    const id = uuid.v4().toString("hex");
    const { title } = req.body

    posts[id] = {id, title}

    await axios.post("http://localhost:8085/events", {
      type: "PostCreated",
      data: { id, title },
    });

    res.status(201).send(posts[id])
})

app.post('/events', (req, res) => {
    console.log(`Received Events ${req.body.type}`)

    res.send({})
})

app.listen(8080, () => console.log('Listening in 8080'))