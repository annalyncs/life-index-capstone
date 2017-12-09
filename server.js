require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

mongoose.Promise = global.Promise;


const {
    DATABASE_URL,
    PORT
} = require('./config');

const app = express();

app.use(express.static('public'));
app.use(morgan('common'));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    response.sendFile(__dirname + '/public/index.html')
});

// CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
        return res.send(204);
    }
    next();
});

app.get("/", (req,res) => {
    console.log('it works!');
    next();
})

app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
});

