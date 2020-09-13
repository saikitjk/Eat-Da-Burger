var connection = require("../config/connection.js");

const orm = {
  // `selectAll()`
  selectAll: function (selectObj, targetedTable, cb) {
    var queryString = "SELECT ?? from ??";
    connection.query(queryString, [selectObj, targetedTable], function (
      err,
      result
    ) {
      if (err) {
        console.error("SQL query error: " + err.stack);
      }
      cb(result);
    });
  },
  // `insertOne()`
  insertOne: function (targetedTable, burgerName, isDevoured, cb) {
    var queryString =
      "INSERT INTO ?? (burger_name, devoured) VALUE ('??','??')";
    connection.query(
      queryString,
      [targetedTable, burgerName, isDevoured],
      function (err, result) {
        if (err) {
          console.error("SQL query error: " + err.stack);
        }
        cb(result);
      }
    );
  },
  // `updateOne()`

  updateOne: function (targetedTable, isDevoured, burgerID, cb) {
    var queryString = "UPDATE ?? SET ?? WHERE ??";
    connection.query(
      queryString,
      [targetedTable, isDevoured, burgerID],
      function (err, result) {
        if (err) {
          console.error("SQL query error: " + err.stack);
        }
        cb(result);
      }
    );
  },
};

module.exports = orm;
