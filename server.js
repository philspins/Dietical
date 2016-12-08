// Babel ES6/JSX Compiler
require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
/*
var $ = require('jquery');
var boot = require('bootstrap');
var magnific = require('magnific-popup');
var toastr = require('toastr');
*/

var apiRoutes = require('./routes');
var reactRoutes = require('./app/routes');
var config = require('./config');


/**
 * MongoDB connection
 */
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});


/**
 * Express middleware
 */
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', apiRoutes);


/**
 * React middleware
 */
app.use(function(req, res) {
  Router.match({ routes: reactRoutes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});


/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});


server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
