var mongoose = require("mongoose");

mongoose.set("debug", true); // to view mongo queries being run inside the terminal
mongoose.Promise = Promise; // Promise library being used

var url= "mongodb://localhost:27017/warbler";
mongoose.connect(url, { 
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useMongoClient: true
    })
    .then(() => console.log(`Database connected`))
    .catch(err => console.log(`Database connection error: ${err.message}`));

// Exporting models
module.exports.User = require("./user"); //bundling
module.exports.Message = require("./message"); //bundling
// the msg model can be accessed by user but not vice versa