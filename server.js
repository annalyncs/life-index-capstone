require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

mongoose.connect(process.envDATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`${err.message}`);
});

const {
    DATABASE_URL,
    PORT
} = require('./config');

const app = express();

app.use(express.static('public'));
app.use(morgan('common'));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
});

