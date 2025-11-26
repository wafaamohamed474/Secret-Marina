"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";
import AuthInput from "../atoms/AuthInput";
import { FaEye, FaEyeSlash, FaLock, FaMobile } from "react-icons/fa";
import FormLink from "../atoms/FormLink";
 
import { useState } from "react";

 

export default function LoginFields({ register, errors }: any) {
 
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="grid gap-6">
      {/* Phone number */}
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
