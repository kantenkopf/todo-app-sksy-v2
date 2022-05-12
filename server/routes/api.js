const express = require("express");
const {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

const router = express.Router();

router
  .get("/", readTodos)
  .post("/", createTodo)
  .put("/", updateTodo)
  .delete("/", deleteTodo);

module.exports = router;
