const Production = require("../models/production.model");

const getAllProductions = async (req, res) => {
  const productions = await Production.findAll();
  res.json(productions);
};

const createProduction = async (req, res) => {
  const { name, quantity } = req.body;
  const newProduction = await Production.create({ name, quantity });
  res.status(201).json(newProduction);
};

module.exports = { getAllProductions, createProduction };
