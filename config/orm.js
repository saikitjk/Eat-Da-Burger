var connection = require("../config/connection.js");

const orm = {
  // `selectAll()`
  selectAll: function (cb) {
    var queryString = "SELECT * from burgers";
    connection.query(queryString, function (err, result) {
      if (err) {
        console.error("SQL query error: " + err.stack);
      }
      console.log("All burgers in the DB: ");
      cb(result);
    });
  },
  // `insertOne()`
  insertOne: function (burgerName, cb) {
    var queryString =
      "INSERT INTO burgers (burger_name, devoured) VALUE ('??',false)";
    connection.query(queryString, [burgerName], function (err, result) {
      if (err) {
        console.error("SQL query error: " + err.stack);
      }
      console.log("Inserting the following burger into the DB: ");
      cb(result);
    });
  },
  // `updateOne()`

  updateOne: function (isDevoured, burgerID, cb) {
    var queryString = "UPDATE burgers SET ?? WHERE ??";
    connection.query(queryString, [isDevoured, burgerID], function (
      err,
      result
    ) {
      if (err) {
        console.error("SQL query error: " + err.stack);
      }
      console.log("Updating the following burger into the DB: ");
      cb(result);
    });
  },
};

module.exports = orm;
