'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose')
;
mongoose.Promise = global.Promise;


const userSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: 'Please supply a username'
    },
    name: {
        type: String,
        required: 'Please supply a name',
        trim: true
    },
    password: {
        type: String,
        required: true
    }},{
        collection: 'users'
    });

userSchema.methods.serialize = function() {
    return {
        username: this.username || '',
        name: this.name || '',
    };
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', userSchema);



module.exports = {
    User
};
