import { z } from 'zod';


const createPostSchema = z.object({
   content: z.string({
      required_error: "posts must have content.",
      invalid_type_error: "content must be a string."
   }),
   userId: z.string({
      required_error: "userId is required",
      invalid_type_error: "userId must be a string."
   })
})


export type CreatePostInput = z.infer<typeof createPostSchema>;
