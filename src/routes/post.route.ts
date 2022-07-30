import { Post } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { createPostHandler, getPostsHandler } from '../controllers/post.controller';

async function postRoutes(app: FastifyInstance, options: Object) {
   app.get('/', getPostsHandler);

   app.post('/', createPostHandler);
}

export default postRoutes;
