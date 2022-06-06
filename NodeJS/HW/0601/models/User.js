const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async (next) => {
  if (!this.isModified("password")) return next();

  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

module.exports = model("User", userSchema);
