import * as z from "zod";
// id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  username: z.string().toLowerCase().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Email is not valid"),
  website: z.string().min(1, { message: "Website is required" }),
});
