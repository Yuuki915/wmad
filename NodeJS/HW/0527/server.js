require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("passport");

const authRoute = require("./routes/auth");
const blogsRoute = require("./routes/blogs");

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

app.use("/", authRoute);
app.use("/", blogsRoute);

app.listen(process.env.PORT, () => console.log("Server is running!"));

//
//
//

// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const session = require("express-session");
// const passport = require("passport");

// const authRoute = require("./routes/auth");
// const blogsRoute = require("./routes/blogs");

// const methodOverride = require("method-override");

// const app = express();
// app.set("view engine", "ejs");
// // app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));
// app.use(express.static("public"));

// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// mongoose
//   .connect(
//     process.env.MONGO
//     // ,{
//     //   useNewUrlParser: true,
//     //   useUnifiedTopology: true,
//     // }
//   )
//   .then(() => console.log("databbase connected!"))
//   .catch((err) => console.log(err));

// app.use("/", authRoute);
// app.use("/blogs", blogsRoute);

// app.listen(process.env.PORT, () => console.log("Server is running!"));
