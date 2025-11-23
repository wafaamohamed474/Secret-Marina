"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";
import AuthInput from "../atoms/AuthInput";

import { FaMobile } from "react-icons/fa";

interface ForgetPasswordFieldsProps {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

export default function ForgetPasswordFields({
  register,
  errors,
}: ForgetPasswordFieldsProps) {
  return (
    <div className="grid gap-6">
      {/* PHONE NUMBER */}
      <div className="space-y-2">
        <AuthInput
          label="Phone Number"
          id="phoneNumber"
          type="tel"
          placeholder="Enter your phone number"
          iconLeft={<FaMobile />}
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>
    </div>
  );
}
