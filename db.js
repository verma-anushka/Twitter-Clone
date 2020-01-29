var mongoose = require("mongoose");

// DATABASE SETTINGS
var url= "mongodb://localhost:27017/warbler";
mongoose.connect(url, { 
    keepAlive: true,
    useMongoClient: true
    })
    .then(() => console.log(`Database connected`))
    .catch(err => console.log(`Database connection error: ${err.message}`));