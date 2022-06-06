require("dotenv").config();
require("express-async-errors");
require("./utils/db");

const express = require("express");
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/", require("./routes"));

//catch all middleware/route
app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

app.listen(port, () => console.log("Listening to port: ", port));

module.exports = app;
