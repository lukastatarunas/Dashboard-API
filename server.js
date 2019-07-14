const express = require('express');
const data = require('./data.json');

const app = express();

app.use('/', express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/data', (req, res) => {
    res.header("Content-Type",'application/json',)
    res.send(data);
});

const port = 3000;
app.listen(port);

console.log('API server started on: ' + port);