const express = require("express");
const router = express.Router();

router.get("/leave-note", (req, res, next) => {
  res.send(`
        <h1>Leave a note</h1>
        <form action="/read" method="POST">
            <input type="text" name="message" />
            <button type="submit">Leave notes</button>
        </form>
    `);
});

router.post("/read", (req, res, next) => {
  res.redirect("/leave-note");
});

module.exports = router;
