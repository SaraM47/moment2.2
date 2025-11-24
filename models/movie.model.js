const mongoose = require("mongoose");

/*
 * Define the structure of a movie document in MongoDB
 * Each field includes its type of title, the name of the studio that produced the film, year of the movie released, my own rating from 1-10, indicates if the film is animated and validation rules
 */
const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    studio: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      required: true,
    },
    animated: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

// Export the model to use in the controller and routes
module.exports = mongoose.model("Movie", movieSchema);
