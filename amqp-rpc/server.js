var rpc = require('amqp-rpc').factory({
  url: 'amqp://guest:guest@localhost:5672'
});

rpc.on('test_add', function (param, callback) {
  callback(null, param.a + param.b);
});

console.log('started');
