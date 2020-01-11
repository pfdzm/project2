// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const post = {
  all(cb) {
    orm.all("posts", function(res) {
      cb(res);
    });
  },
  getPostsByTopic(topic_id, cb) {
    orm.execute(
      `SELECT posts.*, users.username, topics.topicname from posts
    INNER JOIN users ON posts.user_id = users.id
    INNER JOIN topics ON posts.topic_id = topics.id
    WHERE topic_id = ${topic_id};
    `,
      function(res) {
        cb(res);
      }
    );
  },
  selectPostsByTopic(topic_id, cb) {
    orm.select("posts", `topic_id=${topic_id}`, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create("posts", cols, vals, function(res) {
      cb(res);
    });
  },
  update(objColVals, condition, cb) {
    orm.update("posts", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete(condition, cb) {
    orm.delete("posts", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = post;
