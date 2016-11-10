var app = require('express')();
var server = require('http').Server(app);
var http = require('http');

app.get('/', function(req, res){
  var options = {
      host: 'provider',
      port: 8082,
      path: '/'
  }
  var request = http.request(options, function (response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', function () {
      res.send(data);
    });
  });
  request.on('error', function (e) {
    res.sendFile(__dirname + '/index.html');
  });
  request.end();  
});

server.listen(8083, function(){
  console.log('listening on *:8083');
});
