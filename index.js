var http = require('http');
var path = require('path');
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var urlencoded = require('body-parser').urlencoded;
var config = require('./config');

// initialize MongoDB connection
var db = mongoose.connection;
db.open('mongodb://'+config.db.mongo.username+":"+config.db.mongo.password+"@"+config.db.mongo.host+'/'+config.db.mongo.name);

// Create Express web app with some useful middleware
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(urlencoded({ extended: true }));
app.use(morgan('combined'));

// Create REST API
require('./api')(app);

// Create HTTP server and mount Express app
var server = http.createServer(app);
server.listen(config.port, function() {
    console.log('Express server started on *:'+config.port);
});