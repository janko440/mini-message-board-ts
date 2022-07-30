import Fastify from 'fastify'
import prismaPlugin from './plugins/prisma'
import postRoutes from './routes/post.route';
import userRoutes from './routes/user.route';


const app = Fastify({ logger: true })

app.register(prismaPlugin);

app.get('/healthcheck', async (req, res) => {
   return { status: "OK" }
});

app.register(userRoutes, { prefix: 'api/users' })
app.register(postRoutes, { prefix: 'api/posts' })

/**
 * Run the server!
 */
async function main() {
   try {
      await app.listen({ port: 3000 })
   } catch (err) {
      app.log.error(err)
      process.exit(1)
   }
}
main()
