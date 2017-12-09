const mongoose = require('mongoose');

const transportSchema = mongoose.Schema({
    date: String,
    type: String,
    miles: Number,
    notes: String
}, {
    collection: 'transport'
});

const Transport = mongoose.model('Transport', transportSchema);

module.exports = {
    Transport
};
