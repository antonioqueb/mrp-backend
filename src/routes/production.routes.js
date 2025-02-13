const express = require("express");
const router = express.Router();
const { getAllProductions, createProduction } = require("../controllers/production.controller");

router.get("/", getAllProductions);
router.post("/", createProduction);

module.exports = router;
