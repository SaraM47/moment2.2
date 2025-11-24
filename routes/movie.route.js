const controller = require('../controllers/movie.controller');

// Register movie routes with Fastify 
async function movieRoutes(fastify) {

  // JSON Schema for movie validation incoming POST and PUT requests and ensure that all required fields are present and correctly used
  const movieSchema = {
    body: {
      type: 'object',
      required: ['title', 'studio', 'releaseYear', 'rating', 'animated'],
      properties: {
        title: { type: 'string' },
        studio: { type: 'string' },
        releaseYear: { type: 'number' },
        rating: { type: 'number', minimum: 0, maximum: 10 },
        animated: { type: 'boolean' }
      }
    }
  };

  // Define routes for CRUD operations on movies
  // GET /movies is to return all stored movies
  fastify.get('/movies', async () => {
    return await controller.getAll();
  });

  // GET /movies/:id is to return a specific movie by its ID
  fastify.get('/movies/:id', async (req) => {
    return await controller.getById(req.params.id);
  });

  // POST /movies is to create a new movie (with validation using movieSchema)
  fastify.post('/movies', { schema: movieSchema }, async (req) => {
    return await controller.create(req.body);
  });

  // PUT /movies/:id is to update an existing movie by its ID (using validation)
  fastify.put('/movies/:id', { schema: movieSchema }, async (req) => {
    return await controller.update(req.params.id, req.body);
  });

  // DELETE /movies/:id is to remove a movie by ID
  fastify.delete('/movies/:id', async (req) => {
    return await controller.remove(req.params.id);
  });
}

module.exports = movieRoutes;
