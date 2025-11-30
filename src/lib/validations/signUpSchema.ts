import * as z from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";
export const signUpSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().refine((val) => {
      const phone = parsePhoneNumberFromString(val?.trim());
      if (!phone?.isValid()) return false;
      if (phone.country !== "EG" && phone.country !== "SA") return false;
      const nationalNumber = phone.nationalNumber; // string of digits
      if (phone.country === "EG" && nationalNumber.length !== 10) return false;
      if (phone.country === "SA" && nationalNumber.length !== 9) return false;

      return true;
    }, "Phone must be a valid Egyptian (+20) or Saudi (+966) mobile number"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
