const router = require("express").Router();

const Blog = require("../models/Blog");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/uploads/imgs");
  },

  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
});

router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/blogs");
  } else {
    res.render("home");
  }
});
router.get("/register", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/blogs");
  } else {
    res.render("auth/register");
  }
});
router.get("/login", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/blogs");
  } else {
    res.render("auth/login");
  }
});

router.get("/blogs", async (req, res) => {
  let blogs = await Blog.find().sort({ timeCreated: "desc" });
  res.render("blogs/blogs", { blogs: blogs });
});

router.get("/blogs/new", (req, res) => {
  res.render("blogs/newBlog");
});

router.get("/blogs/:slug", async (req, res) => {
  let blog = await Blog.findOne({ slug: req.params.slug });

  if (blog) {
    res.render("blogs/show", { blog: blog });
  } else {
    res.redirect("/blogs");
  }
});

// new post
router.post("/blogs", upload.single("img"), async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    img: req.file.filename,
    placeName: req.body.placeName,
    country: req.body.country,
  });

  try {
    const newBlog = await blog.save();
    res.redirect(`/blogs/${newBlog.slug}`);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// edit
router.get("/blogs/edit/:id", async (req, res) => {
  let blog = await Blog.findById(req.params.id);
  res.render("blogs/edit", { blog: blog });
});

router.put("/blogs/:id", async (req, res) => {
  req.blog = await Blog.findById(req.params.id);
  let blog = req.blog;
  blog.title = req.body.title;
  blog.author = req.body.author;
  blog.body = req.body.body;
  blog.placeName = req.body.placeName;
  blog.country = req.body.country;

  try {
    blog = await blog.save();
    res.redirect(`/blogs/${blog.slug}`);
  } catch (error) {
    console.log(error);
    res.redirect(`/blogs/edit/${blog.id}`, { blog: blog });
  }
});

// delete
router.delete("/blogs/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect("/blogs");
});

module.exports = router;

//
//
//

// const router = require("express").Router();

// const Blog = require("../models/Blog");

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./public/uploads/imgs");
//   },

//   filename: (req, file, callback) => {
//     callback(null, Date.now() + file.originalname);
//   },
// });
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 3,
//   },
// });

// router.get("/", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.redirect("/blogs");
//   } else {
//     res.render("home");
//   }
// });
// router.get("/register", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.redirect("/blogs");
//   } else {
//     res.render("auth/register");
//   }
// });
// router.get("/login", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.redirect("/blogs");
//   } else {
//     res.render("auth/login");
//   }
// });

// router.get("/blogs", async (req, res) => {
//   let blogs = await Blog.find().sort({ timeCreated: "desc" });
//   res.render("blogs/blogs", { blogs: blogs });
// });

// router.get("/blogs/new", (req, res) => {
//   res.render("blogs/newBlog");
// });

// router.get("/blogs/:slug", async (req, res) => {
//   let blog = await Blog.findOne({ slug: req.params.slug });

//   if (blog) {
//     res.render("blogs/show", { blog: blog });
//   } else {
//     res.redirect("/blogs");
//   }
// });

// // new post
// router.post("/blogs", upload.single("img"), async (req, res) => {
//   let blog = new Blog({
//     title: req.body.title,
//     author: req.body.author,
//     body: req.body.body,
//     img: req.file.filename,
//     placeName: req.body.placeName,
//     country: req.body.country,
//   });

//   try {
//     blog = await blog.save();
//     res.redirect(`/blogs/${blog.slug}`);
//   } catch (error) {
//     console.log(error);
//   }
// });

// // edit
// router.get("/blogs/edit/:id", async (req, res) => {
//   let blog = await Blog.findById(req.params.id);
//   res.render("blogs/edit", { blog: blog });
// });

// router.put("/blogs/:id", async (req, res) => {
//   req.blog = await Blog.findById(req.params.id);
//   let blog = req.blog;
//   blog.title = req.body.title;
//   blog.author = req.body.author;
//   blog.body = req.body.body;
//   blog.placeName = req.body.placeName;
//   blog.country = req.body.country;

//   try {
//     blog = await blog.save();
//     res.redirect(`/blogs/${blog.slug}`);
//   } catch (error) {
//     console.log(error);
//     res.redirect(`/blogs/edit/${blog.id}`, { blog: blog });
//   }
// });

// // delete
// router.delete("/blogs/:id", async (req, res) => {
//   await Blog.findByIdAndDelete(req.params.id);
//   res.redirect("/blogs");
// });

// module.exports = router;

// //
// //
// //

// // const router = require("express").Router();

// // const Blog = require("../models/Blog");

// // const multer = require("multer");
// // const storage = multer.diskStorage({
// //   destination: (req, file, callback) => {
// //     callback(null, "./public/uploads/imgs");
// //   },

// //   filename: (req, file, callback) => {
// //     callback(null, Date.now() + file.originalname);
// //   },
// // });
// // const upload = multer({
// //   storage: storage,
// //   limits: {
// //     fileSize: 1024 * 1024 * 3,
// //   },
// // });

// // //

// // router.get("/", async (req, res) => {
// //   // let blogs = await Blog.find().sort({ timeCreated: "desc" });
// //   // res.render("blogs/blogs", { blogs: blogs });

// //   try {
// //     const blogs = await Blog.find().sort({ timeCreated: "desc" });
// //     // res.render("blogs/blogs", { blogs: blogs, isAuth: req.isAuthenticated() });
// //     res.render("blogs/blogs", { blogs: blogs });
// //   } catch (error) {
// //     res.send(error);
// //   }
// // });

// // router.get("/new", (req, res) => {
// //   res.render("blogs/newBlog");
// // });

// // // router.get("/:id", async (req, res) => {
// // //   res.send(req.params.id);
// // // });

// // router.get("/:slug", async (req, res) => {
// //   let blog = await Blog.findOne({ slug: req.params.slug });

// //   if (blog) {
// //     res.render("blogs/show", { blog: blog });
// //   } else {
// //     res.redirect("/blogs");
// //   }
// // });

// // // new post
// // router.post("/", upload.single("img"), async (req, res) => {
// //   const blog = new Blog({
// //     title: req.body.title,
// //     author: req.body.author,
// //     body: req.body.body,
// //     img: req.file.filename,
// //     placeName: req.body.placeName,
// //     country: req.body.country,
// //   });

// //   try {
// //     const newBlog = await blog.save();
// //     res.redirect(`/blogs/${newBlog.slug}`);
// //   } catch (error) {
// //     console.log(error);
// //     res.send(error);
// //   }
// // });

// // // router.post("/", upload.single("img"), async (req, res, next) => {
// // //   try {
// // //     let blog = new Blog({
// // //       title: req.body.title,
// // //       author: req.body.author,
// // //       body: req.body.body,
// // //       img: req.file.filename,
// // //       placeName: req.body.placeName,
// // //       country: req.body.country,
// // //     });

// // //     blog = await blog.save();
// // //     res.redirect(`/blogs/${blog.slug}`);
// // //   } catch (error) {
// // //     next(error);
// // //     console.log(error);
// // //   }
// // // });

// // // edit
// // router.get("/edit/:id", async (req, res) => {
// //   let blog = await Blog.findById(req.params.id);
// //   res.render("blogs/edit", { blog: blog });
// // });

// // router.put("/:id", async (req, res) => {
// //   req.blog = await Blog.findById(req.params.id);
// //   let blog = req.blog;
// //   blog.title = req.body.title;
// //   blog.author = req.body.author;
// //   blog.body = req.body.body;
// //   blog.placeName = req.body.placeName;
// //   blog.country = req.body.country;

// //   try {
// //     blog = await blog.save();
// //     res.redirect(`/blogs/${blog.slug}`);
// //   } catch (error) {
// //     console.log(error);
// //     res.redirect(`/blogs/edit/${blog.id}`, { blog: blog });
// //   }
// // });

// // // delete
// // router.delete("/:id", async (req, res) => {
// //   await Blog.findByIdAndDelete(req.params.id);
// //   res.redirect("/blogs");
// // });

// // module.exports = router;

// // //
// // //
// // //

// // // const router = require("express").Router();
// // // const Blog = require("../models/Blog");

// // // const multer = require("multer");
// // // const storage = multer.diskStorage({
// // //   destination: (req, file, callback) => {
// // //     callback(null, "./public/uploads/imgs");
// // //   },

// // //   filename: (req, file, callback) => {
// // //     callback(null, Date.now() + file.originalname);
// // //   },
// // // });

// // // const upload = multer({
// // //   storage: storage,
// // //   limits: {
// // //     fileSize: 1024 * 1024 * 3,
// // //   },
// // // });

// // // // ----

// // // router.get("/", (req, res) => {
// // //   if (req.isAuthenticated()) {
// // //     res.redirect("/blogs");
// // //   } else {
// // //     res.render("home");
// // //   }
// // // });
// // // router.get("/register", (req, res) => {
// // //   if (req.isAuthenticated()) {
// // //     res.redirect("/blogs");
// // //   } else {
// // //     res.render("auth/register");
// // //   }
// // // });
// // // router.get("/login", (req, res) => {
// // //   if (req.isAuthenticated()) {
// // //     res.redirect("/blogs");
// // //   } else {
// // //     res.render("auth/login");
// // //   }
// // // });
// // // router.get("/blogs", async (req, res) => {
// // //   let blogs = await Blog.find().sort({ timeCreated: "desc" });
// // //   res.render("blogs/blogs", { blogs: blogs });

// // //   try {
// // //     const allBlogs = await Blog.find();
// // //     res.render("blogs", { allBlogs, isAuth: req.isAuthenticated() });
// // //   } catch (error) {
// // //     res.send(error);
// // //   }
// // // });

// // // // router.get("/blogs", async (req, res) => {
// // // //   try {
// // // //     const allBlogs = await Blog.find();
// // // //     res.render("blogs", { allBlogs, isAuth: req.isAuthenticated() });
// // // //   } catch (error) {
// // // //     res.send(error);
// // // //   }
// // // //   // どっちかで成功するか、どっちもコンバートしないかんのか。検証たのも。
// // // //   // if (req.isAuthenticated()) {
// // // //   //   res.render("blogs");
// // // //   // } else {
// // // //   //   res.redirect("/blogs");
// // // //   // }
// // // // });

// // // // -----

// // // router.get("/new", (req, res) => {
// // //   res.render("blogs/newBlog");
// // // });

// // // router.get("/:slug", async (req, res) => {
// // //   let blog = await Blog.findOne({ slug: req.params.slug });

// // //   if (blog) {
// // //     res.render("blogs/show", { blog: blog });
// // //   } else {
// // //     res.redirect("/");
// // //   }
// // // });

// // // // new post
// // // router.post("/", upload.single("img"), async (req, res) => {
// // //   let blog = new Blog({
// // //     title: req.body.title,
// // //     author: req.body.author,
// // //     body: req.body.body,
// // //     img: req.file.filename,
// // //     placeName: req.body.placeName,
// // //     country: req.body.country,
// // //   });

// // //   try {
// // //     blog = await blog.save();
// // //     res.redirect(`/blogs/${blog.slug}`);
// // //   } catch (error) {
// // //     console.log(error);
// // //   }
// // // });

// // // // edit
// // // router.get("/edit/:id", async (req, res) => {
// // //   let blog = await Blog.findById(req.params.id);
// // //   res.render("blogs/edit", { blog: blog });
// // // });

// // // router.put("/:id", async (req, res) => {
// // //   req.blog = await Blog.findById(req.params.id);
// // //   let blog = req.blog;
// // //   blog.title = req.body.title;
// // //   blog.author = req.body.author;
// // //   blog.body = req.body.body;
// // //   blog.placeName = req.body.placeName;
// // //   blog.country = req.body.country;

// // //   try {
// // //     blog = await blog.save();
// // //     res.redirect(`/blogs/${blog.slug}`);
// // //   } catch (error) {
// // //     console.log(error);
// // //     res.redirect(`/blogs/edit/${blog.id}`, { blog: blog });
// // //   }
// // // });

// // // // delete
// // // router.delete("/:id", async (req, res) => {
// // //   await Blog.findByIdAndDelete(req.params.id);
// // //   res.redirect("/blogs");
// // // });

// // // module.exports = router;
