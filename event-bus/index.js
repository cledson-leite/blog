const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
// const cors = require("cors");

const app = express();
app.use(bodyParser.json());
// app.use(cors());

app.post('/events', (req, res) => {
    const event = req.body

    axios.post('http://localhost:8080/events', event)
    axios.post('http://localhost:8081/events', event)
    axios.post('http://localhost:8082/events', event)

    res.send({status: 'ok'})
})

app.listen(8085, () => {console.log('Listening on 8085')})