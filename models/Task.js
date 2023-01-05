const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be given"],
    trim: true,
    maxLength: [20, "name cannot be longer than 20 characters"],
    minLength: [3, "name cannot be shoter than 3 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema)