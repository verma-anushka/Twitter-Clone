const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../handlers/auth");

router.post("/signup", function(req, res, next) {
  signUp(req, res, next);
});

router.post("/signin", async function(req, res, next) {
  signIn(req, res, next);
});

module.exports = router;
