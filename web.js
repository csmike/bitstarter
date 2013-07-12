var express = require('express');
var fs = require('fs');


function readIndex() {
    return fs.readFileSync('index.html');
} 


var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  
  dataBuffer = readIndex();
  response.send(dataBuffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


