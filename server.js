const express = require('express');
const bodyParser = require("body-parser");
const data = require('./data.json');

const app = express();

app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({ extended : false }));

app.get('/data', (req, res) => res.send(data));
app.post('/post', (req, res) => {
    console.log(req.body.textarea);
    
    let json = JSON.stringify(req.body.textarea)
    console.log(json);

    res.send(json);
});

app.listen(3000);

console.log('API server started on port 3000');