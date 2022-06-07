require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use("/api", require("./routes/index"));

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// app.
