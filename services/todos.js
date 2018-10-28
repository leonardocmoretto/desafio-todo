const Todos = require('../models/todos');

const all = async () => {
  return await Todos.find({});
}

const byId = async (id) => {
  return await Todos.findOne({ _id: id });
};

const allPending = async () => {
  return await Todos.find({ done: false });
}

const done = async () => {
  return await Todos.find({ done: true });
}

const Create = async (data) => {
  return await Todos.create(data);
};

const MarkDone = async(id, done) => {
  return await Todos.updateOne({ _id: id }, { $set: { done } });
};

const Delete = async(id) => {
  return await Todos.remove({ _id: id });
}

module.exports = {
  all,
  byId,
  allPending,
  done,
  Create,
  MarkDone,
  Delete
}