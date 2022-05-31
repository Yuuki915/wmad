const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const config = require("../config");

router.get("/", (req, res) => {
  res.status(200).json({ msg: "/ Route checker" });
});

router.post(
  "/auth/signup",
  passport.authenticate("local-signup", { session: false }),
  (req, res, next) => {
    res.json({
      msg: "Signed Up Successfully",
      user: req.user,
    });
  }
);

router.post(
  "/auth/login",
  passport.authenticate("local-login", { session: false }),
  (req, res, next) => {
    jwt.sign(
      { user: req.user },
      config.jwtSecret,
      { expiresIn: "1hr" },
      (err, token) => {
        if (err) {
          return res.json({
            msg: "Failed to login",
            token: null,
          });
        }

        res.json({
          msg: "Logged In Successfully",
          token,
        });
      }
    );
  }
);

router.get(
  "/user/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({ user: req.user });
  }
);

module.exports = router;
