const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  timeCreated: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Blog", blogSchema);
