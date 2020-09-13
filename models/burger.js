var orm = require("../config/orm.js");

var burger = {
  select: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },
  create: function (burgerName, cb) {
    orm.insertOne("burgers", burgerName, function (res) {
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
