const movies = require("../models/movies");

const movieSuggestion = async (req, res, next) => {
  const phrase = req.params.movie;
  try {
    let result = await movies
      .aggregate()
      .search({
        index: "autoComplete",
        autocomplete: {
          query: phrase,
          path: "title",
          tokenOrder: "sequential",
        },
      })
      .project("title")    
      .limit(10);

    res.send(result);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
  next();
};

module.exports = movieSuggestion;
