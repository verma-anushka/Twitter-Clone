// require("dotenv").load();
var jwt = require("jsonwebtoken");

exports.loginRequired = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, payload) {
      if (payload) {
        next();
      } else {
        return next({ status: 401, message: "Please Sign In First!" });
      }
    });
  } catch (e) {
    return next({ status: 401, message: "Please Sign In First" });
  }
};

exports.ensureCorrectUser = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, payload) {
      if (payload && payload.id === req.params.id) {
        // console.log("correct hai");
        return next();
      } else {
        return next({ status: 401, message: "Unauthorized" });
      }
    });
  } catch (e) {
    return next({ status: 401, message: "Unauthorized" });
  }
};
