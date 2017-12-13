const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: 'Please supply a username'
    },
    name: {
        type: String,
        required: 'Please supply a name',
        trim: true
    }
})

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(mongodbErrorHandler);
const User = mongoose.model('User', userSchema);

module.exports = {
    User
}
