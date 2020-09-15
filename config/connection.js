const util = require("util");
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "P@ssword!",
    database: "burgers_db",
  });
}

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//connection.query = util.promisify(connection.query);

module.exports = connection;
