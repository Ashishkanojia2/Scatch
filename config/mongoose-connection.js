const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://127.0.0.1:27017/scatch`)
  .then(() => {
    console.log("Mongoose Connection successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports =    mongoose.Connection;
