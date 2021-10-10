const mongoose = require("mongoose");
const validator = require("validator");

const moviesSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    index: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  poster: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    index: true,
    validate(value) {
      if (!validator.isSlug(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  type: {
    type: String,
    required: true,
    trim: true,
    enum: ["movie", "series"],
  },
  year: {
    type: Number,
    required: true,
  },
});

const movies = mongoose.model("movies", moviesSchema);

module.exports = movies;
