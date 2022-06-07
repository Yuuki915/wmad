const mongoose = require("mongoose");
const config = require("../config");

const dbConnectorStr = config.databaseURL;

exports.InitiateMongoose = async () => {
  mongoose.connect(dbConnectorStr);

  const db = mongoose.connection;

  db.on("error", () => {
    console.log("Could not connect");
  });

  db.on("open", () => {
    console.log("Connected to database");
  });
};
