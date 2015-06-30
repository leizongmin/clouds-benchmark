var assert = require('assert');
var Eureca = require('eureca.io');

var client;

exports.call = function (callback) {
  var a = parseInt(Math.random() * 1000, 10);
  var b = parseInt(Math.random() * 1000, 10);
  client.test_add(a, b).onReady(function (ret) {
    assert.equal(ret, a + b);
    callback();
  });
};

exports.start = function (callback) {
  (new Eureca.Client({uri: 'http://localhost:8000/'})).ready(function (serverProxy) {
    client = serverProxy;
    callback();
  });
};
