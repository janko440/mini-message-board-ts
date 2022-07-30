import { FastifyInstance } from "fastify";
import { CreateUserInput } from "../models/user.schema";


export async function getAllUsers(app: FastifyInstance) {
   const users = await app.prisma.user.findMany({
      include: {
         posts: true,
      }
   });
   return users;
}

export async function createUser(app: FastifyInstance, input: CreateUserInput) {
   const user = await app.prisma.user.create({
      data: input
   });

   return user;
}
