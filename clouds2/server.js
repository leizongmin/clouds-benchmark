var clouds = require('clouds');
var controller = require('clouds-controller');

var server = clouds.createServer({
  connection: controller.createConnection()
});
server.register('test_add', function (a, b, callback) {
  callback(null, a + b);
});

server.on('listen', function () {
  console.log('started');
});
