const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.get("/", (req, res, next) => {
  sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/read", (req, res, next) => {
  sendFile(path.join(__dirname, "views", "read.html"));
});

app.get("/leave-note", (req, res, next) => {
  sendFile(path.join(__dirname, "views", "leave-note.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
