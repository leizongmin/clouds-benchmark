/**
 * 启动性能测试程序
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

var async = require('async');

var name = process.argv[2];
if (!name) throw new Error('请指定要测试的项目');


var TIMES = 10000;
var PARTS = 10;

var project = require('./' + name + '/client');

project.start(function () {

  var results = [];

  function part (callback) {
    var t = Date.now();
    async.times(TIMES, function (i, next) {
      project.call(next);
    }, function (err) {
      var s = Date.now() - t;
      callback(err, s);
    });
  }

  async.timesSeries(PARTS, function (i, next) {
    part(function (err, spent) {
      results.push(spent);
      if (err) {
        console.log('call %s times, spent %sms %s', TIMES, spent, err);
      } else {
        console.log('call %s times, spent %sms', TIMES, spent);
      }
      next();
    });
  }, function (err) {
    if (err) console.log(err);

    results.sort();
    results.shift();
    results.pop();
    var r = results.reduce(function (a, b) {
      return a + b;
    });
    r = r / results.length;
    console.log('-------');
    console.log('project [%s]', name);
    console.log('call %s times, average %sms', TIMES, parseInt(r, 10));

    process.exit();
  });

});
