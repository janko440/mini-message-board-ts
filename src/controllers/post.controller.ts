import { FastifyReply, FastifyRequest } from "fastify";
import { CreatePostInput } from "../models/post.schema";



async function getPostsHandler(req: FastifyRequest, res: FastifyReply) {
   const app = req.server;

   try {
      const posts = await app.prisma.post.findMany();
      res.send(posts);
   } catch (err) {
      app.log.error(err);
   }
}


async function createPostHandler(req: FastifyRequest<{ Body: CreatePostInput }>, res: FastifyReply) {
   const app = req.server;

   try {
      let { content, userId } = req.body;

      const post = await app.prisma.post.create({
         data: {
            content: content,
            user: {
               connect: {
                  id: userId
               }
            }
         }
      });

      return res.code(201).send(post);

   } catch (err) {
      app.log.error(err);
      return res.code(400).send(err);
   }
}


export { getPostsHandler, createPostHandler }
