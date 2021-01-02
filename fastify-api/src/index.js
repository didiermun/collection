// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  // Require external modules
const mongoose = require('mongoose')

const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
// Connect to DB
mongoose.connect('mongodb://localhost/myapp',{ 
    useUnifiedTopology: true,
    useNewUrlParser: true
} )
 .then(() => {
     console.log('MongoDB connected…')
  start()

    })
 .catch(err => console.log(err))