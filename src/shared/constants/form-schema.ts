import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name should has at least 2 characters" }),
  email: z.string().email({ message: "Required field" }),
  message: z
    .string()
    .min(2, { message: "Message should has at least 2 characters" }),
});

export type FormSchemaValuesT = z.infer<typeof formSchema>;
