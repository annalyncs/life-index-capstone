const mongoose = require('mongoose');

const healthSchema = mongoose.Schema({
    user: {
        type: String,
        required: false
    },
    date: String,
    category: String,
    notes: String
}, {
    collection: 'health'
});

const Health = mongoose.model('Health', healthSchema);

module.exports = {
    Health
};
