const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("newBlog");
});

router.get("/:slug", async (req, res) => {
  let blog = await Blog.findOne({ slug: req.params.slug });

  if (blog) {
    res.render("show", { blog: blog });
  } else {
    res.redirect("/");
  }
});

router.post("/", async (req, res) => {
  let blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
  });

  try {
    blog = await blog.save();

    res.redirect(`blogs/${blog.slug}`);
  } catch (error) {
    console.log(error);
  }
});

router.get("/edit/:id", async (req, res) => {
  let blog = await Blog.findById(req.params.id);
  res.render("edit", { blog: blog });
});

router.put("/:id", async (req, res) => {
  req.blog = await Blog.findById(req.params.id);
  let blog = req.blog;
  blog.title = req.body.title;
  blog.body = req.body.body;

  try {
    blog = await blog.save();
    res.redirect(`/blogs/${blog.slug}`);
  } catch (error) {
    console.log(error);
    res.redirect(`blog/edit/${blog.id}`, { blog: blog });
  }
});

router.delete("/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
