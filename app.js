var express = require('express');
var app = express();
var path = require("path");
app.set('views', __dirname + '/app_server/views');

var index = require('./app_server/routes/index.js')
var feedback = require('./app_server/routes/feedback.js')

app.use('/home', index);
app.use('/feedback', feedback);
app.use(express.static(__dirname + "/public"));
app.listen(3000);
