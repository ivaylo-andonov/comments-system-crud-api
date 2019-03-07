const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema({
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true 
    },
    date:{
        type: String,
        required: true 
    }
});

module.exports = mongoose.model('Comment', Comment);