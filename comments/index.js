const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const axios = require('axios')
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = uuid.v4();
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:8085/events", {
    type: "CommentsCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
    },
  });

  res.status(201).send(commentsByPostId[req.params.id]);
});

app.post("/events", (req, res) => {
  console.log(`Received Events ${req.body.type}`);

  res.send({});
});

app.listen(8081, () => console.log("Listening in 8081"));
