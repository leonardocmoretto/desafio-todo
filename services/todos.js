const Todos = require('../models/todos');

const Create = async (data) => {
  return await Todos.create(data);
};

module.exports = {
  Create
}