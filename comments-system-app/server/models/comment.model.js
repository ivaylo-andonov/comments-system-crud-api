const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    dateCreated: {
        type: String
    }
});

module.exports = mongoose.model('Comment', Comment);