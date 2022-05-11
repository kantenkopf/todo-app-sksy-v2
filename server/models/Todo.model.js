const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        maxlength: 160
    },
    dueDate: {
        type: Date,
        required: true
    },
    completion: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("Todo", todoSchema)