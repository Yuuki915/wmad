const uuid = require("uuid");
const router = require("express").Router();
const { client } = require("../services/redis");

router.get("/", async (req, res) => {
  try {
    const todos = [];
    // const todos = await client.hGetAll('todos')
    // console.log(todos);

    for await (const { field, value } of client.hScanIterator("todos")) {
      todos.push({ ID: field, Title: value });
    }

    res.render("index", { model: todos });
  } catch (e) {
    console.error(e);
  }
});

// --- create ---
router.get("/create", (req, res) => {
  res.render("create", { model: {} });
});

router.post("/create", async (req, res) => {
  await client.hSet("todos", uuid.v4(), req.body.Title);
  res.redirect("/");
});

module.exports = router;

// --- edit ---
router.get("/edit/:id", async (req, res) => {
  const editId = req.params.id;
  const editTitle = await client.hGet("todos", editId);
  res.render("edit", { model: { Title: editTitle, ID: id } });
});
router.post("/edit/:id", async (req, res) => {
  const editId = req.params.id;
  await client.hSet("todos", editId, req.body.Title);
  res.redirect("/");
});

// --- delete ---
router.get("/delete:id", async (req, res) => {
  const deleteId = req.params.id;
  client.hDel("todos", deleteId);
  res.redirect("/");
});

module.exports = router;
