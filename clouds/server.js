var clouds = require('clouds');

var server = clouds.createServer();
server.register('test_add', function (a, b, callback) {
  callback(null, a + b);
});

server.on('listen', function () {
  console.log('started');
});
