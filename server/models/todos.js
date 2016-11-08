var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  id: { type: Number },
  completed: { type: Boolean },
  text: { type: String }
});

module.exports = mongoose.model('Todo', TodoSchema);
