const { expressLoader } = require("./express");
const { InitiateMongoServer } = require("./mongodb");
const { InitiateMongoose } = require("./mongoose");
const { InitiatePassport } = require("./passport");

exports.loaders = ({ expressApp }) => {
  // InitiateMongoServer()
  InitiateMongoose();
  InitiatePassport();
  expressLoader({ app: expressApp });
};
