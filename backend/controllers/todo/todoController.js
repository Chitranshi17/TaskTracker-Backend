const mongoose = require("mongoose");
const Todo = require("../../models/todo/todoModel");

const getTodos = async (req, res) => {
  const allTodos = await Todo.find();
  res.json(allTodos);
};

const getTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    // throw new Error("Todo Not Found !!");
    res.send({
      msg: "Todo Not Found!!",
    });
  }
 
  res.status(200).json(todo);
  res.send("Get Single Todo");
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  console.log(req.params.id);
  res.status(200).json({
    msg: "Todo Deleted !!",
  });
};

const updateTodo = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updateTodo) {
    res.status(400);
    throw new Error("Cannot Update Todo!!");
  }
  res.status(200).json(updatedTodo);
};

const addTodo = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400);
    throw new Error("Please Fill All Details");
  }
  const newTodo = await Todo.create({
    title,
    description,
  });
  if (newTodo) {
    res.status(200).json(newTodo);
  } else {
    res.status(400);
    throw new Error("Something Went Wrong!!");
  }
};

module.exports = {
  getTodos,
  getTodo,
  deleteTodo,
  updateTodo,
  addTodo,
};
