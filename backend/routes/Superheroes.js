const express = require("express");
const router = express.Router();
const { Superheroes } = require("../models");

router.get("/superheroes", async (req, res, next) => {
  const listOfSuperheroes = await Superheroes.findAll();
  res.json(listOfSuperheroes);
});

router.get("/superheroes/:id", async (req, res, next) => {
  const id = req.params.id;
  const superhero = await Superheroes.findByPk(id);
  res.json(superhero);
});

router.post("/new-superhero", async (req, res, next) => {
  const superheroes = req.body;
  await Superheroes.create(superheroes);
  res.json(superheroes);
});

module.exports = router;
