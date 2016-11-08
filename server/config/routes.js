/**
 * Routes for express app
 */
var mongoose = require('mongoose');
var path = require('path');
var users = require('../controllers/user');
var todos = require('../controllers/todos');
// var compiled_app_module_path = path.resolve(__dirname, '../..', 'dist', 'bundle.js');
// var App = require(compiled_app_module_path);

module.exports = function(app, passport) {
  // user routes
  app.post('/todo/login', users.postLogin);
  app.post('/todo/signup', users.postSignUp);
  app.post('/todo/logout', users.postLogout);

  app.get('/auth/google', passport.authenticate('google', { scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login'
    }));

  // todo routes
  app.get('/api/todo', todos.all);
  app.post('/api/todo/:id', function(req, res) {
    todos.add(req, res);
  });
  app.delete('/api/todo/:id', function(req, res) {
    todos.remove(req, res);
  });

  // app.get('*', function (req, res, next) {
  //   App.default(req, res);
  // });
};
