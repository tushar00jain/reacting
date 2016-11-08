var _ = require('lodash');
var Todo = require('../models/todos');

/**
 * List
 */
exports.all = function(req, res) {
  Todo.find({}).exec(function(err, todos) {
    if(!err) {
      res.json(todos);
    }else {
      console.log('Error in first query');
    }
  });
};

/**
 * Add a Todo
 */
exports.add = function(req, res) {
  var todo =  new Todo({
    id: req.body.id,
    completed: req.body.completed,
    text: req.body.text
  });

  todo.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send('OK');
  })
};

/**
 * Remove a todo
 */
exports.remove = function(req, res) {
  var query = { id: req.params.id };
  Todo.findOneAndRemove(query, function(err, data) {
    if(err) console.log('Error on delete');
    res.status(200).send('Removed Successfully');
  });
};
