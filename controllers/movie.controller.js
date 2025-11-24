const Movie = require('../models/movie.model');

// Revtrieve all movies from the database by GET all movies 
exports.getAll = async () => {
  return await Movie.find();
};

// Retrieve a single movie by its GET ID
exports.getById = async (id) => {
  return await Movie.findById(id);
};

// Create a new movie entry in the database by POST
exports.create = async (data) => {
  // Validate releaseYear
  if (data.releaseYear < 1900 || data.releaseYear > 2100) {
    throw new Error("releaseYear måste vara mellan 1900 och 2100");
  }
  // Validate rating
  const movie = new Movie(data);
  return await movie.save();
};

// Update an existing movie by PUT based on its ID
exports.update = async (id, data) => {
  return await Movie.findByIdAndUpdate(id, data, { new: true });
};

// Delete a movie from the database by DELETE based on its ID
exports.remove = async (id) => {
  return await Movie.findByIdAndDelete(id);
};
