const express = require("express");
const router = express.Router();

router.get("/leave-note", (req, res, next) => {
  res.send(`
        <h1>Leave a Note</h1>
        <form action="/read" method="POST">
            <input type="text" name="message" />
            <button type="submit">Send</button>
        </form>
    `);
});

router.post("/read", (req, res, next) => {
  res.redirect("/leave-note");
});

module.exports = router;
