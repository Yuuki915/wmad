const mongoose = require("mongoose");
const Blog = require("./Blog");
const { Schema, model, SchemaTypes } = mongoose;

const commentSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

// commentSchema.pre('save', async (next)=>{
//   const comment = this
//   const blog = await Blog.findById(comment.blog.toString())
//   blog.comments.push
// })

const Comment = model("Comment", commentSchema);
module.exports = Comment;
