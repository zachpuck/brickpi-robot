const express = require('express');
const router = express.Router();

const app = express();
const port = process.env.PORT || 3000;

const robotRouter = require('./src/route/robotRoutes');

app.use('/api', robotRouter(router));

app.get('/', function(req, res) {
    const results = 'Meow buzz meow buzzzz!';

    res.send(results);
});



app.listen(port, function(err) {
    console.log('running server on port ', port);
});

