const express = require('express');
const data = require('./data.json');

const app = express();

app.use('/', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/data', (req, res) => res.send(data));
app.post('/post', (req, res) => data.push(req.body));
app.put('/put/:id', (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    // data.splice(req.params.id - 1, 1, req.body);
    data.forEach(item => {
        data[0].data[0] = req.body[0];
    })

    // for (let i = 0; i < data.length; i++) {
    //     if (data.id === req.params.id - 1) {
    //         data[i].data[i] = req.body[i];
    //     }
    // }

    console.log(data[0].data[0]);
    console.log(req.body[0]);
    res.send(true);
}); 

app.listen(3000);

console.log('API server started on port 3000');