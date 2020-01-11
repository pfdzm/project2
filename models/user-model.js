// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const user = {
  all(cb) {
    orm.all("users", function(res) {
      cb(res);
    });
  },
  selectUsersByPostID(post_id, cb) {
    orm.select("users", `id=${post_id}`, function(res) {
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
module.exports = user;
