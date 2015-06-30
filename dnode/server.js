var dnode = require('dnode');


var server = dnode({
  test_add: function (a, b, callback) {
    callback(null, a + b);
  }
});
server.listen(5004);

console.log('started');
