require("dotenv").config(); // loads any env variables onto process.env.___

// PACKAGES
const express    = require("express"),
      bodyParser = require("body-parser"),
      cors       = require("cors");

const app = express();

// GENERAL SETTINGS
app.use(cors());
app.use(bodyParser.json()); // because building an api

// HANDLERS
const errorHandler = require("./handlers/error");

// // MODELS
// var User = require("./models/user");

// // ROUTES
var authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// ERROR HANDLER (in case the routes are not reached)
app.use((req, res, next) => { // next- allows to move to the next piece of middleware
    let err = new Error("Not found"); // Error() - JS constructor function
    err.status = 404;
    next(err);
});

app.use(errorHandler);

// PORT SETTINGS
app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
}); 

