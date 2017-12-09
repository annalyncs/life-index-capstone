const mongoose = require('mongoose');

const healthSchema = mongoose.Schema({
    date: String,
    category: String,
    notes: String
}, {
    collection: 'health'
});

const Helath = mongoose.model('Helath', healthSchema);

module.exports = {
    Helath
};
