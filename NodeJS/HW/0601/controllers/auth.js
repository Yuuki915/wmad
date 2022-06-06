const {
  signup,
  signin,
  resetPasswordRequestController,
  resetPasswordController,
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
  return res.json(resetPasswordRequestService);
};

const resetPasswordController = async (req, res, next) => {
  const { userId, token, password } = req.body;
  const resetPasswordService = await resetPasswordController();
};

module.exports = {
  signInController,
  signUpController,
  resetPasswordRequestController,
  resetPasswordController,
};
