'use strict';
const { Strategy: LocalStrategy } = require('passport-local');

// Assigns the Strategy export to the name JwtStrategy using object destructuring
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assigning_to_new_variable_names
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;

const { User } = require('../models/User');
const { JWT_SECRET } = require('../config');

const localStrategy = new LocalStrategy((username, password, callback) => {
    let user;
    User.findOne({ username: username })
        .then(_user => {
        user = _user;
        if (!user) {
            // Return a rejected promise so we break out of the chain of .thens.
            // Any errors like this will be handled in the catch block.
            return Promise.reject({
                reason: 'LoginError',
                message: 'Incorrect username or password'
            });
        }
        return user.validatePassword(password);
    })
        .then(isValid => {
        if (!isValid) {
            return Promise.reject({
                reason: 'LoginError',
                message: 'Incorrect username or password'
            });
        }
        return callback(null, user);
    })
        .catch(err => {
        if (err.reason === 'LoginError') {
            return callback(null, false, err);
        }
        return callback(err, false);
    });
});

const jwtStrategy = new JwtStrategy(
    {
        secretOrKey: 'secret',
        // Look for the JWT as a Bearer auth header
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
        // Only allow HS256 tokens - the same as the ones we issue
        algorithms: ['HS256']
    },
    (payload, done) => {
        done(null, payload.user);
    }
);

module.exports = { localStrategy, jwtStrategy };