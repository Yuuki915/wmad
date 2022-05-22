const express = require("express");
const app = express();
const blogRouter = require("./routes/blogs");

app.set("view engine", "ejs");

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
