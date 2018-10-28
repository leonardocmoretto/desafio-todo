const Todos = require('../models/todos');

const all = async () => {
  return await Todos.find({});
}

const byId = async (id) => {
  return await Todos.findOne({ _id: id });
};

const Create = async (data) => {
  return await Todos.create(data);
};

const Update = async(id, name) => {
  return await Todos.updateOne({ _id: id }, { $set: { name } });
};

const Delete = async(id) => {
  return await Todos.remove({ _id: id });
}

module.exports = {
  all,
  byId,
  Create,
  Update,
  Delete
}