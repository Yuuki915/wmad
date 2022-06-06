const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.plugin(slug);

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
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
    img: {
      type: String,
      default: "placeholder.jpg",
    },
    placeName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      slug: "title",
      unique: true,
      slug_padding_size: 2,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

blogSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Blog", blogSchema);
