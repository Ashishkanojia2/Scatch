const express = require("express");
const router = express.Router();
const ownermodel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  console.log(process.env.NODE_ENV);
  router.post("/create", async (req, res) => {
    const owner = await ownermodel.find();
    if (owner.length > 0) {
      return res.status(503).send("You don't have permission to create owner");
    }
    let { fullName, email, password } = req.body;
    const createOwner = await ownermodel.create({
      fullName,
      email,
      password,
    })
    .then((value) => {
      res.status(200).send(value);
      // res.send(value)
    })
    .catch((err) => {
      console.log("while creating owner its show me this error:", err);
    });

    res.status(201).send(createOwner);
  });
}

router.get("/", (req, res) => {
  res.send("ownerRouter working");
});

module.exports = router;
