var assert = require('assert');

exports.call = function (callback) {
  var a = parseInt(Math.random() * 1000, 10);
  var b = parseInt(Math.random() * 1000, 10);
  rpc.call('test_add', {a: a, b: b}, function (err, ret) {
    assert.equal(err, null);
    assert.equal(ret, a + b);
    callback();
  });
};

exports.start = function (callback) {
  callback();
};


var rpc = require('amqp-rpc').factory({
  url: 'amqp://guest:guest@localhost:5672'
});