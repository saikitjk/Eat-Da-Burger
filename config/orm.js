var connection = require("../config/connection.js");

/////
function checkApostrophe(obj) {
  var arr = [];

  for (var key in obj) {
    var value = obj[key];
    if (value.indexOf("'" >= 0)) {
      //console.log(value);
      if (value === "'") {
        value = "'" + value;
      }
      arr.push(value);
    }
  }

  return arr.join("");
}

////

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
      "INSERT INTO burgers (burger_name, devoured) VALUE ('" +
      checkApostrophe(burgerName) +
      "',false)";
    connection.query(queryString, function (err, result) {
      if (err) {
        console.error("SQL query error: " + err.stack);
      }
      console.log("Inserting the following burger into the DB: " + burgerName);

      cb(result);
    });
  },
  // `updateOne()`

  updateOne: function (devouredStatus, burgerID, cb) {
    var queryString =
      "UPDATE burgers SET devoured = " + devouredStatus + " WHERE " + burgerID;
    connection.query(queryString, function (err, result) {
      if (err) {
        console.error("SQL query error: " + err.stack);
      }
      console.log("Updating the following burger into the DB: ");
      cb(result);
    });
  },
};

module.exports = orm;
