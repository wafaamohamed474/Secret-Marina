"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";
import AuthInput from "../atoms/AuthInput";

import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaMobile,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";

 
export default function SignUpFields({ register, errors }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* NAME */}
      <div className="space-y-2">
        <AuthInput
          label="Name"
          id="name"
          type="text"
          placeholder="Enter your name"
          iconLeft={<FaUser />}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* EMAIL */}
      <div className="space-y-2">
        <AuthInput
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email"
          iconLeft={<FaEnvelope />}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
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
      </div>

      {/* CONFIRM PASSWORD */}
      <div className="space-y-2">
        <AuthInput
          label="Confirm Password"
          id="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm your password"
          iconLeft={<FaLock />}
          iconRight={showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          onRightIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
    </div>
  );
}
