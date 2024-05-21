const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("ownerRouter working");
});

module.exports = router;
