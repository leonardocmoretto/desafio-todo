const mongoose = require("mongoose");

var schema = mongoose.Schema({
  description: String,
  owner: {name: String, job_title: String},
  done: { type: Boolean, default: false },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
  enabled: { type: Boolean, default: true }
});

module.exports = mongoose.model('todos', schema, 'todos');