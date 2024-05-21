const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: "String",
  price: "String",
  discount: {
    type: "Number",
    default: 0,
  },    
  bgColor: "String",
  panelColor: "String",
  textColor: "String",
  image: "String",
});

module.exports = mongoose.model("product", productSchema);
