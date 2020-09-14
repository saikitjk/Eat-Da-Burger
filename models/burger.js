var orm = require("../config/orm.js");

var burger = {
  select: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },
  create: function (burgerName, cb) {
    orm.insertOne(burgerName, function (res) {
      cb(res);
    });
  },
  update: function (devouredStatus, burgerID, cb) {
    orm.updateOne(devouredStatus, burgerID, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
