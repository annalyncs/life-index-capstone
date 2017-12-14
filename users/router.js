const express = require('express');
const bodyParser = require('body-parser');

const {User} = require('../models/User');

const router = express.Router();

const jsonParser = bodyParser.json();

// Post to register a new user
router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['username', 'password'];
    const missingField = requiredFields.find(field => !(field in req.body));

    if (missingField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Missing field',
            location: missingField
        });
    }

    const stringFields = ['username', 'password', 'name'];
    const nonStringField = stringFields.find(
        field => field in req.body && typeof req.body[field] !== 'string'
    );

    if (nonStringField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Incorrect field type: expected string',
            location: nonStringField
        });
    }

    let {username, password, name = ''} = req.body;

    return User.find({username})
        .count()
        .then(count => {
        if (count > 0) {
            // There is an existing user with the same username
            return Promise.reject({
                code: 422,
                reason: 'ValidationError',
                message: 'Username already taken',
                location: 'username'
            });
        }
        // If there is no existing user, hash the password
        return User.hashPassword(password);
    })
        .then(hash => {
        return User.create({
            username,
            password: hash,
            name
        });
    })
        .then(user => {
        return res.status(201).json(user.serialize());
    })
        .catch(err => {
        // Forward validation errors on to the client, otherwise give a 500
        // error because something unexpected has happened
        if (err.reason === 'ValidationError') {
            return res.status(err.code).json(err);
        }
        res.status(500).json({code: 500, message: 'Internal server error'});
    });
});

module.exports = {router};
