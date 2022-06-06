const {
  signin,
  signup,
  requestResetPassword,
  resetPassword,
} = require("../middleware/auth.service");

const signInController = async (req, res, next) => {
  const { email, password } = req.body;
  const signInService = await signin(email, password);
  return res.json(signInService);
};

const signUpController = async (req, res, next) => {
  const signUpService = await signup(req.body);
  return res.json(signUpService);
};

const resetPasswordRequestController = async (req, res, next) => {
  const resetPasswordRequestService = await requestResetPassword(
    req.body.email
  );
  //   return res.json(resetPasswordRequestService);
  return res.json({
    msg: "Please check your email for verification.",
    resetPasswordRequestService,
  });
};
const resetPasswordController = async (req, res, next) => {
  const { userId, token, password } = req.body;
  const resetPasswordService = await resetPassword(userId, token, password);
  return res.json(resetPasswordService);
};

module.exports = {
  signInController,
  signUpController,
  resetPasswordRequestController,
  resetPasswordController,
};
