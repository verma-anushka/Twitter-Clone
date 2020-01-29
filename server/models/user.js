const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    // User's first name
    firstname: {
        type: String,
        maxlength: 50
    },
    // User's last name
    lastname: {
        type: String,
        maxlength: 50
    },
    // User's username
    username: {
        type: String,
        required: true,
        unique: true
    },
    // User's email address
    email: {
        type: String,
        required: true,
        unique: true
    },
    // User's account password
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    // User's profile image
    profileImgUrl: {
        type: String
    }
})


module.exports = mongoose.model("User", userSchema);