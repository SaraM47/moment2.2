require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const connectDB = require('./db/database');
const movieRoutes = require('./routes/movie.route');

// Global error handler that handles validation errors and server errors
fastify.setErrorHandler((error, request, reply) => {
  if (error.validation) {
    return reply.status(400).send({
      status: 400,
      error: "Valideringsfel",
      message: error.message,
      details: error.validation
    });
  }

  // Handles all other server errors
  reply.status(500).send({
    status: 500,
    error: "Serverfel",
    message: error.message
  });
});

// Register all movie related routes into Fastify application
fastify.register(movieRoutes);

// Start the server and connect to the database
const start = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    await fastify.listen({ port: PORT, host: '0.0.0.0' });

    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
