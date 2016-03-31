'use strict';

var express = require('express');
var app = express();
var PORT = 8081;

app.get('/', function(req, res, next) {
  console.log('request received');
});

app.listen(PORT);
console.log('listening on port ' + PORT);
