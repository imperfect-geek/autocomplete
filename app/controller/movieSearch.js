const movies = require("../models/movies");

const movieSearch = async (req, res, next) => {
  const movie = req.params.movie;
  try {
    let result = await movies
      .aggregate()
      .search({
        index: "searchMovies",
        text: {
          query: movie,
          path: {
            wildcard: "*",
          },
          fuzzy: {
            maxEdits: 2,
            prefixLength: 3,
          },
        },
      })
      .limit(10);

    res.send(result);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
  next();
};

module.exports = movieSearch;
