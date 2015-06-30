var assert = require('assert');
var dnode = require('dnode');

var client;

exports.call = function (callback) {
  var a = parseInt(Math.random() * 1000, 10);
  var b = parseInt(Math.random() * 1000, 10);
  client.test_add(a, b, function (err, ret) {
    assert.equal(err, null);
    assert.equal(ret, a + b);
    callback();
  });
};

exports.start = function (callback) {
  var d = dnode.connect(5004);
  d.on('remote', function (remote) {
    client = remote;
    callback();
  });
};
