const express = require('express');
const data = require('./data.json');

const app = express();

app.use('/', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/data', (req, res) => res.send(data));
app.post('/post', (req, res) => data.push(req.body));
app.put('/put/:id', (req, res) => {
    if (req.params.id === "1") {
        data.forEach(item => {
            data[0].data[0] = req.body[0];
            data[0].data[1] = req.body[1];
            data[0].data[2] = req.body[2];
        })
    }
    else if (req.params.id === "2") {
        data.forEach(item => {
            data[1].data[0] = req.body[0];
            data[1].data[1] = req.body[1];
            data[1].data[2] = req.body[2];
        })
    }
    else {
        data.forEach(item => {
            data[2].data[0] = req.body[0];
        })
    }
});
app.delete('/delete/:id', (req, res) => {
    console.log(req.params.id);
    // data.slice(req.params.id);
    data.splice(req.params.id - 1, 1);
});

app.listen(3000);

console.log('API server started on port 3000');