const mongoose = require('mongoose');

const financeSchema = mongoose.Schema({
    user: {
        type: String,
        required: false
    },
    date: String,
    category: String,
    cost: String,
    notes: String
}, {
    collection: 'finance'
});

const Finance = mongoose.model('Finance', financeSchema);

module.exports = {
    Finance
};
