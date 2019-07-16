const express = require('express');
const bodyParser = require("body-parser");
const data = require('./data.json');

const app = express();

app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({ extended : false }));

app.get('/data', (req, res) => res.send(data));
app.post('/post', (req, res) => {
    console.log(req.body.textarea)

    res.end();
});

app.listen(8080);

console.log('API server started on port 8080 ');