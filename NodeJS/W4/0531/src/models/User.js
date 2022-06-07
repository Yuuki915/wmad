const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  try {
    const user = this;

    if (!user.isModified("password")) next();

    const salt = await bcrypt.genSalt(12);

    const hashedPassword = await bcrypt.hash(user.password, salt);

    this.password = hashedPassword;

    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.matchPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

const User = model("User", userSchema);
module.exports = User;
