var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");
var app = express();
var routes = require("./controllers/burgers_controller");

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use(routes); //goes to burgers_controller.js

//middleware to read static file
app.use(express.static("public"));

app.listen(app.get("port"), function () {
  console.log("Server is now running on: http://localhost:" + app.get("port"));
});
