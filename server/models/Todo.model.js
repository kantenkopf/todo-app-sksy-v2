const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    maxlength: 160,
  },
  dueDate: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => {
        return new Date(value) >= new Date(`${new Date().toISOString().split('T')[0]}T00:00:00.000Z`);
      }
    }
  },
  completion: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
