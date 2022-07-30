import { FastifyInstance } from "fastify";
import { getUsersHandler, createUserHandler } from '../controllers/user.controller';


async function userRoutes(app: FastifyInstance, options: Object) {
   app.get('/', getUsersHandler);

   app.post('/', createUserHandler);
}

export default userRoutes;
