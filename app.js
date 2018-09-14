var express = require('express');
var app = express();
var path = require("path");
app.set('views', __dirname + '/views');

var index = require('./routes/index.js')

app.use('/home', index);

app.listen(3000);
