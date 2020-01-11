// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const topic = {
  all(cb) {
    orm.all("topics", function(res) {
      cb(res);
    });
  },
  getTopicName(topic_id, cb) {
    orm.select("topics", `id=${topic_id}`, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create("topics", cols, vals, function(res) {
      cb(res);
    });
  },
  update(objColVals, condition, cb) {
    orm.update("topics", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete(condition, cb) {
    orm.delete("topics", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = topic;
