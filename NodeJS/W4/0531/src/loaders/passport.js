const passport = require("passport");

exports.InitiatePassport = () => require("../auth/passportConfig")(passport);
