const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    item: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
