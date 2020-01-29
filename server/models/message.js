const mongoose = require('mongoose');
const User = require("./user");

var messageSchema = new mongoose.Schema({
    // Message content
    text: {
        type: String,
        required: true,
        maxlength: 200
    },
    // Reference to the user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

});

// Pre hook to delete the message id from the user's message list on deleting a message
messageSchema.pre("remove", async function(next) { // pre hook
    try {
        let user = await User.findById(this.user);
        user.messages.remove(this.id);
        await user.save();
        return next();
    } catch (err) {
        return next(err); // call error handler
    }
});

module.exports = mongoose.model("Message", messageSchema);
