import * as z from "zod";

export const verificationSchema = z.object({
  code: z.string().length(4, "Verification code must be 4 digits"),
});

export type VerificationSchema = z.infer<typeof verificationSchema>;
