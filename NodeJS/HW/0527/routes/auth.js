const router = require("express").Router();
const passport = require("passport");

const User = require("../models/User");

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

router.post("/auth/register", async (req, res) => {
  try {
    const registerUser = await User.register(
      { username: req.body.username },
      req.body.password
    );
    if (registerUser) {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/blogs");
      });
    } else {
      res.redirect("/register");
    }
  } catch (err) {
    res.send(err);
  }
});

router.post("/auth/login", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/blogs");
      });
    }
  });
});

router.get("/auth/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;

//
//
//

// const router = require("express").Router();
// const passport = require("passport");

// const User = require("../models/User");

// passport.use(User.createStrategy());

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });
// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// router.get("/", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.redirect("/blogs");
//   } else {
//     res.render("home");
//   }
// });
// router.get("/register", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.redirect("/blogs");
//   } else {
//     res.render("auth/register");
//   }
// });
// router.get("/login", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.redirect("/blogs");
//   } else {
//     res.render("auth/login");
//   }
// });

// router.post("/auth/register", async (req, res) => {
//   try {
//     const registerUser = await User.register(
//       { username: req.body.username },
//       req.body.password
//     );
//     if (registerUser) {
//       passport.authenticate("local")(req, res, () => {
//         res.redirect("/blogs");
//       });
//     } else {
//       res.redirect("/register");
//     }
//   } catch (err) {
//     res.send(err);
//   }
// });

// router.post("/auth/login", async (req, res) => {
//   const user = new User({
//     username: req.body.username,
//     password: req.body.password,
//   });

//   req.login(user, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       passport.authenticate("local")(req, res, () => {
//         res.redirect("/blogs");
//       });
//     }
//   });
// });

// router.get("/auth/logout", (req, res, next) => {
//   req.logout((err) => {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("/");
//   });
// });

// module.exports = router;
