var express = require('express');
var app = express();
var path = require("path");
app.set('views', __dirname + '/app_server/views');

var index = require('./app_server/routes/index.js')

app.use('/', index);

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/app_server"));
app.listen(3000);
