const mongoose = require("mongoose");
const connect = mongoose.connect(process.env.MONGODB_URI);
connect
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));
