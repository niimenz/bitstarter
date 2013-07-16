#!/usr/bin/env node
var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var string_buff = fs.readFileSync("index.html");

var buff_output = buf.toString(string_buff);
app.get('/', function(request, response) {
  response.send(buff_output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
