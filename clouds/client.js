var assert = require('assert');
var clouds = require('clouds');

var client;

exports.call = function (callback) {
  var a = parseInt(Math.random() * 1000, 10);
  var b = parseInt(Math.random() * 1000, 10);
  client.call('test_add', [a, b], function (err, ret) {
    assert.equal(err, null);
    assert.equal(ret, a + b);
    callback();
  });
};

exports.start = function (callback) {
  client = clouds.createClient();
  client.on('listen', callback);
};
