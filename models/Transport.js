const mongoose = require('mongoose');

const transportSchema = mongoose.Schema({
    user: {
        type: String,
        required: false
    },
    date: String,
    type: String,
    miles: String,
    notes: String
}, {
    collection: 'transport'
});

const Transport = mongoose.model('Transport', transportSchema);

module.exports = {
    Transport
};
