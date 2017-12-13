'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const {User} = require('../models/User');

router.get('/login', (req,res) => {})

router.get('/register', (req,res) => {})

router.post('/register', (req,res,next) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'You must supply a name').notEmpty();
    req.checkBody('username', 'You must supply a username').notEmpty();
    req.checkBody('password', 'Password cannot be blank!').notEmpty();
    req.checkBody('password-confirm', 'Confirm password cannot be blank!').notEmpty();
    req.checkBody('password-confirm', 'Your passwords do not match!').equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
        req.json('error', errors.map(err => err.msg));

    };
})

module.exports = {router};
