const express = require("express");
const router = express.Router({mergeParams: true}); // provides access to the id inside the router
const { creatMessage } = require("../handlers/messages");

// prefix: /api/users/:id/messages
router.route("/").post(function(req, res){
    creatMessage
});

module.exports = router;
