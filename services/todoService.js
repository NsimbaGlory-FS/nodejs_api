const axios = require("axios");
require("dotenv").config();

const todoService = async () => {
  console.log("Real Todos");
  return await axios.get(`${process.env.todosURL}ten`);
};

const todoServiceById = async (id) => {
  console.log("Real Todos by todos", id);
  return await axios.get(`${process.env.todosURL}${id}`);
};

module.exports = {
  todoService,
  todoServiceById,
};
