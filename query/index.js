const express = require("express");
const bodyParser = require("body-parser");
// const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/events', (req, res) => {
    const {type, data} = req.body

    if (type === "PostCreated") {
        const {id, title} = data
        posts[id] = { id, title, comments: [] };

    }

    if (type === "CommentsCreated") {
        const { id, content, postId } = data;
        const post = posts[postId];
        post.comments.push({ id, content });
    }

    res.send({})
})

app.listen(8082, () => {console.log('Listening on 8082')})
