const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    token: {
        type: Object,
        required: true
    },
    
});

module.exports = mongoose.model('Token', tokenSchema);