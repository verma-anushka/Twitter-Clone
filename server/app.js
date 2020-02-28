require("dotenv").config(); // loads any env variables onto process.env.___

// PACKAGES
const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");

const app = express();

// GENERAL SETTINGS
app.use(cors());
app.use(bodyParser.json()); // because building an api

// HANDLERS
const errorHandler = require("./handlers/error");

// // MODELS
var db = require("./models");

// // ROUTES
var authRoutes = require("./routes/auth");
var messageRoutes = require("./routes/messages");

const { loginRequired, ensureCorrectUser } = require("./middleware/auth");

app.use("/api/auth", authRoutes);
app.use(
  "/api/users/:id/messages",
  loginRequired,
  ensureCorrectUser,
  messageRoutes
);

app.get("/api/messages", loginRequired, async function(req, res, next) {
  try {
    let messages = await db.Message.find()
      .sort({ createdAt: "desc" })
      .populate("user", {
        username: true,
        profileImageUrl: true
      });
    // console.log(messages);
    return res.status(200).json(messages);
  } catch (err) {
    return next(err);
  }
});

// ERROR HANDLER (in case the routes are not reached)
app.use((req, res, next) => {
  // next- allows to move to the next piece of middleware
  let err = new Error("Not found"); // Error() - JS constructor function
  err.status = 404;
  next(err);
});

app.use(errorHandler);

// PORT SETTINGS
app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
