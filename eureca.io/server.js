var http = require('http');
var Eureca = require('eureca.io');
var eurecaServer = new Eureca.Server();

eurecaServer.exports.test_add = function (a, b) {
  var context = this;
  context.async = true;
  context.return(a + b);
};

var server = http.createServer();
eurecaServer.attach(server);

server.listen(8000, function (err) {
  if (err) throw err;
  console.log('started');
});
