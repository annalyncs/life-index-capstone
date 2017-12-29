const {BasicStrategy} = require('passport-http');
const express = require('express');
const jsonParser = require('body-parser').json();
const passport = require('passport');

const {User} = require('../models/User');

const router = express.Router();

router.use(jsonParser);

//create new user

router.post('/', (req, res) => {
    if (!req.body) {
        return res.status(400).json({message: 'No request body'});
    }

    if (!('username' in req.body)) {
        return res.status(422).json({message: 'Missing field: username'});
    }

    let {username, password} = req.body;

    if (typeof username !== 'string') {
        return res.status(422).json({message: 'Incorrect field type: username'});
    }

    if (username === '') {
        return res.status(422).json({message: 'Incorrect field length: username'});
    }

    if (!(password)) {
        return res.status(422).json({message: 'Missing field: password'});
    }

    if (typeof password !== 'string') {
        return res.status(422).json({message: 'Incorrect field type: password'});
    }

    if (password === '') {
        return res.status(422).json({message: 'Incorrect field length: password'});
    }

    // check for existing user
    return User
        .find({username})
        .count()
        .exec()
        .then(count => {
        if (count > 0) {
            return res.status(422).json({message: 'Username already taken'});
        }
        // if no existing user, hash password
        return User.hashPassword(password)
    })
        .then(hash => {
        return User
            .create({
            username: username,
            password: hash,
        })
    })
        .then(user => {
        return res.status(201).json(user.serialize());
               console.log(res.json(req.body.username));
    })
        .catch(err => {
        res.status(500).json({message: 'Internal server error'})
    });
});


passport.use(new BasicStrategy(
    function(username, password, callback) {
    let user;
    User
        .findOne({username: username})
        .then(_user => {
        user = _user;
        if (!user) {
            return callback(null, false, {message: 'Incorrect username'});
        }
        return user.validatePassword(password);
    })
        .then(isValid => {
        if (!isValid) {
            return callback(null, false, {message: 'Incorrect password'});
        }
        else {
            return callback(null, user)
        }
        });
    }
));


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(userId, done) {
    User.findById(userId, (err, user) => done(err, user));
});

router.use(passport.initialize());

//login user

router.post('/login', passport.authenticate('basic', {session: true}),(req, res) => {
    res.json(req.body.username);
    console.log(req.body.username);
    console.log(req.body.password);
});


module.exports = {router};
