import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();




async function main() {

   // createMany not supported for sqlite :(
   const alice = await prisma.user.create({
      data: {
         name: 'Alice',
         posts: {
            create: [
               { content: "Alice's post 1" },
               { content: "Alice's post 2" },
               { content: "Alice's post 3" },
               { content: "Alice's post 4" },
            ],
         }
      }
   });

   const bob = await prisma.user.create({
      data: {
         name: 'Bob',
         posts: {
            create: [
               { content: "bob's post 1" },
               { content: "bob's post 2" },
               { content: "bob's post 3" },
               { content: "bob's post 4" },
            ],
         }
      }
   });

   await prisma.user.create({
      data: {
         name: 'Jimmy Buffet',
         posts: {
            create: [
               { content: "Margaritaville" },
               { content: "is in Jamaica" },
            ],
         }
      }
   });
   await prisma.user.create({
      data: {
         name: 'Harry Potter',
         posts: {
            create: [
               { content: "That's not just a broomstick, Harry." },
               { content: "That'a Nimbus 2000!" },
               { content: "HAAAARRRRRYY" },
            ],
         }
      }
   });
   await prisma.user.create({
      data: {
         name: 'Ray',
         posts: {
            create: [
               { content: "Hi, I'm Ray from starwars." },
               { content: "Wyaaaaaa. Ruh ruh." },
               { content: "Hello. How are you?" },
            ],
         }
      }
   });


   // print db
   const users = await prisma.user.findMany();
   const posts = await prisma.post.findMany();
   const usersWithPosts = await prisma.user.findMany({
      include: {
         posts: true,
      }
   });
   console.dir(users, { depth: null })
   console.dir(posts, { depth: null })
   console.dir(usersWithPosts, { depth: null });
}

main()
   .then(async () => {
      await prisma.$disconnect()
   })
   .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
   });
