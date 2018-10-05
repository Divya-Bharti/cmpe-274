var express = require('express');
var app = express();
var path = require("path");
app.set('views', __dirname + '/app_server/views');

var index = require('./app_server/routes/index.js')
var feedback = require('./app_server/routes/feedback.js')
var StateVsDeath = require('./app_server/routes/StateVsDeath.js')
var StateVsPop = require('./app_server/routes/StateVsPop.js')
var heatmap = require('./app_server/routes/heatmap.js')
var aboutUs = require('./app_server/routes/aboutUs.js')
var drugName = require('./app_server/routes/drugName.js')

app.use('/', index);
app.use('/home', index);
app.use('/feedback', feedback);
app.use('/StateVsDeath', StateVsDeath);
app.use('/StateVsPop', StateVsPop);
app.use('/heatmap', heatmap);
app.use('/aboutUs', aboutUs);
app.use('/drugName', drugName);

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/app_server"));
app.listen(3000);
