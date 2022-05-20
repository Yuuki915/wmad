const router = require("express").Router();
const { mongoConnect } = require("../services/mongo");

router.get("/", async (req, res) => {
  const db = mongoConnect();
  const fetchedTodos = await db.collection("todos").find().toArray();
  console.log(fetchedTodos);
  const todos = fetchedTodos.map((item) => ({ ID: item._id, ...item }));
  res.render("index", { model: todos });
});

router.get("/create", (req, res) => {
  res.render("create", { model: {} });
});

router.post("/create", async (req, res) => {
  const db = mongoConnect();
  db.collection("todos")
    .insertOne({ Title: req.body.Title })
    .then((result) => {
      console.log("A todo has been added");
      res.redirect("/");
    });
});

router.get("/edit/:id", async (req, res) => {
  const db = mongoConnect();
});
router.post("/edit/:id", async (req, res) => {
  const db = mongoConnect();
});

router.delete("/delete/:id", async (req, res) => {
  const db = mongoConnect();
  // db.collection("todos").
});

module.exports = router;
