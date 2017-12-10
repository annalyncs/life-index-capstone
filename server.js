require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

mongoose.Promise = global.Promise;

const app = express();


const {
    DATABASE_URL,
    PORT
} = require('./config');

const {
    Finance
} = require('./models/finance-model');

const {
    Fitness
} = require('./models/fitness-model');

const {
    Health
} = require('./models/health-model');

const {
    Transport
} = require('./models/transport-model');


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

app.get('/finances', (req, res, next) => {
    Finance
        .find()
        .then(finances => {
            res.json(finances);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'someting went wrong'
            });
        });
});

let server;

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(port, () => {
                console.log(`Your app is listening on port ${port}`);
                resolve();
            })
                .on('error', err => {
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}

function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('Closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}

if (require.main === module) {
    runServer().catch(err => console.error(err));
};

module.exports = {
    runServer,
    app,
    closeServer
};

