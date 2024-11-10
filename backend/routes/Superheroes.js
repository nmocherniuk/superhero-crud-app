const express = require("express");
const router = express.Router();
const { Superheroes } = require("../models");

router.get("/superheroes", async (req, res, next) => {
  const listOfSuperheroes = await Superheroes.findAll();
  res.json(listOfSuperheroes);
});

router.post("/superheroes", async (req, res, next) => {
  const superheroes = req.body;
  await Superheroes.create(superheroes);
  res.json(superheroes);
});

module.exports = router;
