var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;

var Config = require('./config');
var fs = require('fs');
var mongoose = require('mongoose');
var passport = require('passport');

// use this for server side render
// const App = require('../dist/server');

var app = express();
// Find the appropriate database to connect to, default to localhost if not found.
var connect = function() {
  mongoose.connect('mongodb://localhost:27017/react', function(err, res) {
    if(err) {
      console.log('Error connecting to: ' + 'mongodb://localhost:27017/react' + '. ' + err);
    } else {
      console.log('Succeeded connected to: ' + 'mongodb://localhost:27017/react');
    }
  });
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Bootstrap models
fs.readdirSync(__dirname + '/models').forEach(function(file) {
  if(~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

// Bootstrap passport config
require('./config/passport')(app, passport);

// Bootstrap application settings
require('./config/express')(app, passport);

// Bootstrap routes
require('./config/routes')(app, passport);

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

// use this for server side render
// app.get('*', App.default);

app.listen(app.get('port'));
