const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/blogs");
const app = express();

mongoose.connect("mongodb://localhost:27017/0527-mid-proj");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "My life in Canada",
      snippet: "Hello, welcome to my blog.",
      createdAt: new Date(),
    },
  ];
  res.render("index", { blogs: blogs });
});

app.use(express.static("public"));
app.use("/blogs", blogRouter);

app.listen(5000);
