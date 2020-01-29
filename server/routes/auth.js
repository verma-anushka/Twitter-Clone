const express = require("express");
const router = express.Router();
const { signup, signin } = require("../handlers/auth");

router.post("/signup", function(req, res){
    signup
});

router.post("/signin", function(req, res){
    signin
});

module.exports = router;
