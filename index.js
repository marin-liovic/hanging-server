'use strict';

var express = require('express');
var app = express();
var PORT = 8081;

app.get('/*', function(req, res, next) {
  console.log('GET request received');
});

app.post('/*', function(req, res, next) {
  console.log('POST request received');
});

app.put('/*', function(req, res, next) {
  console.log('PUT request received');
});

app.delete('/*', function(req, res, next) {
  console.log('DELETE request received');
});

app.listen(PORT);
console.log('listening on port ' + PORT);
