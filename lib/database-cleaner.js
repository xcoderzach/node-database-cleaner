var mongoose = require('mongoose');

exports.clean = function (db, callback) {
  db.collections( function (skip, collections) {
    var count = collections.length;
    collections.forEach(function (collection) {
      collection.remove({}, function () {
        count--;
        if (count <= 0 && callback) {
          callback.apply();
        }
      });
    });
  });
};