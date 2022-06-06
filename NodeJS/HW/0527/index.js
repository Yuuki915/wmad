require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("passport");
const ejs = require("ejs");

const auRoute = require("./routes/au");
const quoteRoute = require("./routes/quote");

const methodOverride = require("method-override");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("databbase connected!"))
  .catch((err) => console.log(err));

//

// いらない。。。？　→ いらない！！！！！
// app.get("/", (req, res) => {
//   res.render("index");
// });
// app.get("/register", (req, res) => {
//   res.render("reg");
// });
// app.get("/login", (req, res) => {
//   res.render("log");
// });
// app.get("/quotes", (req, res) => {
//   res.render("quotes");
// });

//

app.use("/", auRoute);
app.use("/", quoteRoute);

app.listen(process.env.PORT, () => console.log("Server is running!"));
