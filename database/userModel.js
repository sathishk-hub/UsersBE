var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    dob: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: ''
    },
    degree: {
        type: String,
        default: ''
    },
    password: String,
});
var user = new mongoose.model('user', schema);
module.exports = user;