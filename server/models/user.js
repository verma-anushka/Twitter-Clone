const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

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

// Encrpting the password - just before saving the document(user data) in mongoose using the model 
userSchema.pre("save", async (next) => { // pre hook
 
    try {
        if(!this.isModified("password")){  // if the user has not changed the password, no hashing reqd.   
            return next()
        } 
        let hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err); // call error handler
    }
});

// Instance method to compare the passwords
userSchema.methods.comparePassword = async (userPassword, next ) => { 

    try {
        let isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch (err) {
        return next(err); // call error handler
    }
}

module.exports = mongoose.model("User", userSchema);