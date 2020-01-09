const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const topic = require("../models/topics-model.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  topic.all(function(data) {
    const hbsObject = {
      topic: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;
