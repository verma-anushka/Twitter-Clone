var mongoose = require("mongoose");

mongoose.set("debug", true); // to view mongo queries being run inside the terminal
mongoose.Promise = Promise; // Promise library being used

module.exports.User = require("./user"); //bundling