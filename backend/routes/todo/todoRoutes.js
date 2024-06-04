const express = require('express');
const { getTodos, addTodo, getTodo, deleteTodo, updateTodo } = require('../../controllers/todo/todoController');

const router = express.Router();


router.get('/', getTodos);
router.post('/', addTodo);
router.get('/:id', getTodo);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodo);


module.exports = router;
