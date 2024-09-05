const fastify = require('fastify')({logger: true})
const path = require('node:path')

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
})

fastify.get('/file/:file', function (req, reply) {
  const { file } = req.params;
  if (!file) {
    throw new Error('Include filename');
  }
  return reply.sendFile(file);
})

// Run the server!
fastify.listen({ port: 3333 }, (err, address) => {
  if (err) throw err
})





