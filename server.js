require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const passport = require('passport');



const app = express();

app.use(cors());

const {
    DATABASE_URL,
    PORT
} = require('./config');

const {
    Finance
} = require('./models/Finance');

const {
    Fitness
} = require('./models/Fitness');

const {
    Health
} = require('./models/Health');

const {
    Transport
} = require('./models/Transport');

const {
    router: usersRouter
} = require('./users/router');



mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(morgan('common'));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());


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


app.use('/users/create', usersRouter);
app.use('/', usersRouter);


app.get('/logout', function (req, res) {
    console.log('logging out');
    req.logout();
    res.redirect('/');
});

// retrieve all documents from the database
app.get('/finances-by-user/:user',
    passport.authenticate('basic', {
        session: false
    }),
    function (req, res) {
        Finance
            .find({
                username: req.params.user
            })
            .then(finances => {
                res.json(finances);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({
                    error: 'something went wrong'
                });
            });
    });


app.get('/health-by-user/:user',
    passport.authenticate('basic', {
        session: false
    }),
    function (req, res) {
        Health
            .find({
                username: req.params.user
            })
            .then(health => {
                res.json(health);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({
                    error: 'something went wrong'
                });
            });
    });

app.get('/fitness-by-user/:user',
    passport.authenticate('basic', {
        session: false
    }),
    function (req, res) {
        Fitness
            .find({
                username: req.params.user
            })
            .then(fitness => {
                res.json(fitness);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({
                    error: 'something went wrong'
                });
            });
    });

app.get('/transport-by-user/:user',
    passport.authenticate('basic', {
        session: false
    }),
    function (req, res) {
        Transport
            .find({
                username: req.params.user
            })
            .then(transport => {
                res.json(transport);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({
                    error: 'something went wrong'
                });
            });
    });

//retrieve data by id
app.get('/finances-by-id/:id', (req, res) => {
    console.log('id:', req.params.id);
    Finance
        .findById(req.params.id)
        .then(finances => {
            res.json(finances);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
});

app.get('/health-by-id/:id', (req, res) => {
    Health
        .findById(req.params.id)
        .then(health => res.json(health))
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
});

app.get('/fitness-by-id/:id', (req, res) => {
    Fitness
        .findById(req.params.id)
        .then(fitness => res.json(fitness))
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
});

app.get('/transport-by-id/:id', (req, res) => {
    Transport
        .findById(req.params.id)
        .then(transport => res.json(transport))
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
});

//Post a new entry

app.post('/finances/new', jsonParser, (req, res) => {
    const requiredFields = ['date', 'category'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }

    Finance
        .create({
            username: req.body.username,
            date: req.body.date,
            category: req.body.category,
            cost: req.body.cost,
            notes: req.body.notes
        })
        .then(finances => res.status(201).json(finances))
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
});

app.post('/health/new', jsonParser, (req, res) => {
    const requiredFields = ['date', 'category'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }

    Health
        .create({
            username: req.body.username,
            date: req.body.date,
            category: req.body.category,
            notes: req.body.notes
        })
        .then(health => res.status(201).json(health))
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
});

app.post('/fitness/new', jsonParser, (req, res) => {
    const requiredFields = ['date', 'workout'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }

    Fitness
        .create({
            username: req.body.username,
            date: req.body.date,
            workout: req.body.workout,
            duration: req.body.duration,
            notes: req.body.notes
        })
        .then(health => res.status(201).json(health))
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
});

app.post('/transport/new', jsonParser, (req, res) => {
    const requiredFields = ['date', 'type'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }

    Transport
        .create({
            username: req.body.username,
            date: req.body.date,
            type: req.body.type,
            miles: req.body.miles,
            notes: req.body.notes
        })
        .then(health => res.status(201).json(health))
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
});

//update entry data

app.put('/finances-update/:id', jsonParser, (req, res) => {
    const updated = {};
    const updateableFields = ['date', 'category', 'cost', 'notes'];
    updateableFields.forEach(field => {
        if (field in req.body) {
            updated[field] = req.body[field];
        }
    });

    Finance
        .findByIdAndUpdate(req.params.id, {
            $set: updated
        }, {
            new: true
        })
        .then(updatedFinance => res.status(204).end())
        .catch(err => res.status(500).json({
            message: 'Something went wrong'
        }));
});

app.put('/health-update/:id', jsonParser, (req, res) => {
    console.log(req.body);
    const updated = {};
    const updateableFields = ['date', 'category', 'notes'];
    updateableFields.forEach(field => {
        if (field in req.body) {
            updated[field] = req.body[field];
        }
    });

    Health
        .findByIdAndUpdate(req.params.id, {
            $set: updated
        }, {
            new: true
        })
        .then(updatedHealth => res.status(204).end())
        .catch(err => res.status(500).json({
            message: 'Something went wrong'
        }));
});

app.put('/fitness-update/:id', jsonParser, (req, res) => {
    console.log(req.body);
    const updated = {};
    const updateableFields = ['date', 'workout', 'duration', 'notes'];
    updateableFields.forEach(field => {
        if (field in req.body) {
            updated[field] = req.body[field];
        }
    });
    Fitness
        .findByIdAndUpdate(req.params.id, {
            $set: updated
        }, {
            new: true
        })
        .then(updatedFitness => res.status(204).end())
        .catch(err => res.status(500).json({
            message: 'Something went wrong'
        }));
});

app.put('/transport-update/:id', jsonParser, (req, res) => {
    console.log(req.body);
    const updated = {};
    const updateableFields = ['date', 'type', 'miles', 'notes'];
    updateableFields.forEach(field => {
        if (field in req.body) {
            updated[field] = req.body[field];
        }
    });

    Transport
        .findByIdAndUpdate(req.params.id, {
            $set: updated
        }, {
            new: true
        })
        .then(updatedTransport => res.status(204).end())
        .catch(err => res.status(500).json({
            message: 'Something went wrong'
        }));
});

//delete an entry

app.delete('/finances/:id', (req, res) => {
    Finance
        .findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).json({
                message: 'success'
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
})

app.delete('/health/:id', (req, res) => {
    Health
        .findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).json({
                message: 'success'
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
})

app.delete('/fitness/:id', (req, res) => {
    Fitness
        .findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).json({
                message: 'success'
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
})

app.delete('/transport/:id', (req, res) => {
    Transport
        .findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).json({
                message: 'success'
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went wrong'
            });
        });
})

app.use('*', function (req, res) {
    res.status(404).json({
        message: 'Not Found'
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
