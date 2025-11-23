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

      {/* PASSWORD */}
      <div className="space-y-2">
        <AuthInput
          label="Password"
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          iconLeft={<FaLock />}
          iconRight={showPassword ? <FaEye /> : <FaEyeSlash />}
          onRightIconClick={() => setShowPassword(!showPassword)}
          {...register("password")}
        />
        
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <div className="w-full flex justify-end items-center">
          <FormLink label="" link="Forget Password?" path="/" />
        </div>
      </div>
    </div>
  );
}
