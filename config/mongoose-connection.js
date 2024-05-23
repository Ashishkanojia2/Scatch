const mongoose = require("mongoose");
const config = require('config')
const dbugr = require("debug")("development:Mongoose"); //in first parameter is name and second is this name is comes form which file u can write as chacha: chachi as well as


mongoose
  .connect(`${config.get('MONGODB_URI')}/scatch`)
  .then(() => {
    dbugr("Mongoose Connection successfully");
  })
  .catch((err) => {
    dbugr(err);
  });

module.exports = mongoose.Connection;
