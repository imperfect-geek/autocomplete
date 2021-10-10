const express = require("express");
const movieSearch = require("../controller/movieSearch");
const movieSuggestion = require("../controller/autoCompleteSuggestions");

const router = express.Router();

router.get("/movieSearch/:movie", movieSearch, (req, res) => {
  console.log("Service is up and running!");
});

router.get("/autocomplete/:movie", movieSuggestion, (req, res) => {
  console.log("Service is up and running!");
});

module.exports = router;
