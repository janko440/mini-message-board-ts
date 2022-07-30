import { z } from 'zod';

const createUserSchema = z.object({
   name: z.string({
      required_error: "Name is required.",
      invalid_type_error: "Name must be a string."
   }),
})

export type CreateUserInput = z.infer<typeof createUserSchema>;
