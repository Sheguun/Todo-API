const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("todos", todoSchema);
