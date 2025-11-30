import * as z from "zod";

export const verificationSchema = z.object({
  phone: z.string(),
  otp: z.string().length(4, "Verification code must be 4 digits"),
});

export type VerificationSchema = z.infer<typeof verificationSchema>;
