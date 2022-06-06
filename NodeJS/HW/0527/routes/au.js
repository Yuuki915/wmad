const router = require("express").Router();
const passport = require("passport");

const Us = require("../models/Us");

passport.use(Us.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  Us.findById(id, function (err, user) {
    done(err, user);
  });
});

router.post("/auth/reg", async (req, res) => {
  try {
    const resisterUser = await Us.register(
      { username: req.body.username },
      req.body.password
    );
    if (resisterUser) {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/quotes");
      });
    } else {
      res.redirect("/reg");
    }
  } catch (error) {
    res.send(error);
  }
});

router.post("/auth/log", async (req, res) => {
  const user = new Us({
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
