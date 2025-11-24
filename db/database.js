const mongoose = require('mongoose');

/**
 * Connect to MongoDB Atlas using Mongoose, this function is called before the server starts to ensure
 */
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB Atlas (filmdb)");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
