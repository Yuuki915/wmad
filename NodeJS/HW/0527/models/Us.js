const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const usSchema = new mongoose.Schema({
  username: String,
  password: String,
});

usSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Us", usSchema);
