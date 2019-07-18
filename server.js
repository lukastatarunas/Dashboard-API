const express = require('express');
const data = require('./data.json');

const app = express();

app.use('/', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/data', (req, res) => res.send(data));
app.post('/post', (req, res) => data.push(req.body));
app.put('/put/:id', (req, res) => {

}); 

app.listen(3000);

console.log('API server started on port 3000');