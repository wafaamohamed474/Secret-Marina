import * as z from "zod";

export const forgetPasswordSchema = z.object({
   phoneNumber: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number is too long")
      .regex(/^\+?\d+$/, "Invalid phone number")
});

export type ForgetPasswordSchema = z.infer<typeof forgetPasswordSchema>;
