const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const postModel = require("../models/post-model");
const topicModel = require("../models/topic-model");
const userModel = require("../models/user-model");

router.get("/", function(req, res) {
  topicModel.all(function(data) {
    const hbsObject = {
      topic: data
    };
    res.render("index", hbsObject);
  });
});

// get all posts for a specific topic id
router.get("/topic/:topic_id", function(req, res) {
  postModel.getPostsByTopic(req.params.topic_id, function(posts) {
    const hbsObject = {
      topic: posts[0].topicname,
      post: posts
    };
    console.log(posts);
    res.render("topic", hbsObject);
  });

  // postModel.selectPostsByTopic(req.params.topic_id, function(posts) {
  //   topicModel.getTopicName(req.params.topic_id, function(topic) {
  //     const hbsObject = {
  //       topic: topic[0].topicname,
  //       post: posts
  //     };
  //     res.render("topic", hbsObject);
  //   });
  // });
});

// Export routes for server.js to use.
module.exports = router;
