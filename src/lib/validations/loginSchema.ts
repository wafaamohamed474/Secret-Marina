"use client";
import * as z from "zod";

import { parsePhoneNumberFromString } from "libphonenumber-js";
export const loginSchema = z.object({
  phone: z.string().refine((val) => {
    const phone = parsePhoneNumberFromString(val?.trim());
    if (!phone?.isValid()) return false;
    if (phone.country !== "EG" && phone.country !== "SA") return false;
    const nationalNumber = phone.nationalNumber; // string of digits
    if (phone.country === "EG" && nationalNumber.length !== 10) return false;
    if (phone.country === "SA" && nationalNumber.length !== 9) return false;

    return true;
  }, "Phone must be valid Egyptian (+20) or Saudi (+966) number"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
