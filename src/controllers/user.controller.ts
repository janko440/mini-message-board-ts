import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserInput } from "../models/user.schema";
import { createUser, getAllUsers } from "../services/user.service";

async function getUsersHandler(req: FastifyRequest, res: FastifyReply) {
   const server = req.server; // app/fastify/server

   try {
      const users = await getAllUsers(server);
      res.send(users);

   } catch (err) {
      server.log.error(err);
   }
}

async function createUserHandler(req: FastifyRequest<{ Body: CreateUserInput }>, res: FastifyReply) {
   const app = req.server; // access the fastify app
   try {
      const user = await createUser(app, req.body);
      return res.code(201).send(user);
   } catch (err) {
      app.log.error(err);
      return res.code(400).send(err);
   }
}

export { getUsersHandler, createUserHandler }
