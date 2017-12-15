const mongoose = require('mongoose');

const fitnessSchema = mongoose.Schema({
    user: {
        type: String,
        required: false
    },
    date: String,
    workout: String,
    duration: String,
    notes: String
}, {
    collection: 'fitness'
});

const Fitness = mongoose.model('Fitness', fitnessSchema);

module.exports = {
    Fitness
};
