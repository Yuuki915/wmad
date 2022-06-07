const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

const User = require("../models/User");

const config = require("../config");

module.exports = (passport) => {
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const userExists = await User.findOne({ email: email });

          if (userExists) {
            return done(null, false);
          }

          const user = await User.create({ email, password });

          return done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        const user = await User.findOne({ email: email });

        if (!user) return done(null, false);

        //check whether password matches
        const isMatch = await user.matchPassword(password);

        if (!isMatch) return done(null, false);

        return done(null, user);
      }
    )
  );

  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromHeader("authorization"),
        secretOrKey: config.jwtSecret,
      },
      async (jwtPayload, done) => {
        try {
          const user = jwtPayload.user;
          done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
};
