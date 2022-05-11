const Todo = require('../models/Todo.model');

const createTodo = (req, res) => {
    Todo.create({ description: req.body.description, dueDate: req.body.dueDate })
        .then((data) => {
            if(data.description.toLowerCase().indexOf("coffee") != -1){
                res.status(418).json(data)
            }
            else {
                res.status(201).json(data)
            }
        })
        .catch(err => {
            console.log(err);
            if(err.name === 'ValidationError'){
                res.status(422).json(err)
            }
            else {
                res.status(500).json(err)
            }
        })
}

const readTodos = (req, res) => {
    Todo.find()
        .then((data) => res.status(200).json(data))
        .catch((err) => {
            console.log(err); 
            res.status(500).json(err)
        })
}

const updateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.query._id, req.body, {
            runValidators: true,
            new: true
        })
        .then((data) => res.status(200).json(data))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
}

const deleteTodo = (req, res) => {
    Todo.findByIdAndDelete(req.query._id)
        .then((data) => res.status(200).json(data))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
}

module.exports = {
    createTodo,
    readTodos,
    updateTodo,
    deleteTodo
};