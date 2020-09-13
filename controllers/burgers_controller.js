var express = require("express");

var router = express.Router();
var burger = require("../models/burger");

////
router.get("/", function (req, res) {
  burger.all(function (data) {
    var burgerObj = {
      burger: data,
    };
    console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(
    ["burgerName", "isDevoured"],
    [req.body.burgerName, req.body.isDevoured],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("Condition", condition);

  burger.update(
    {
      isDevoured: req.body.isDevoured,
    },
    condition,
    function (data) {
      if (data.dataRow === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end(0);
      }
    }
  );
});
/////

module.exports = router;
