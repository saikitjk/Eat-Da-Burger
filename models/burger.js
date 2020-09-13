var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  create: function (burgerName, isDevoured, cb) {
    orm.insertOne("burgers", burgerName, isDevoured, function (res) {
      cb(res);
    });
  },
  update: function (isDevoured, burgerID, cb) {
    orm.updateOne("burgers", isDevoured, burgerID, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
