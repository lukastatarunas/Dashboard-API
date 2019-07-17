const express = require('express');
const data = require('./data.json');

const app = express();

app.use('/', express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/data', (req, res) => res.send(data));
app.post('/post', (req, res) => {
    console.log(req.body);
    data[0].data[0].data.push(req.body);
    // data[1].data[0].data.push(req.body);
});

app.listen(3000);

console.log('API server started on port 3000');