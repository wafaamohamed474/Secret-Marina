"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";
import AuthInput from "../atoms/AuthInput";

import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { useState } from "react";

interface SetNewPasswordFieldsProps {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

export default function SetNewPasswordFields({
  register,
  errors,
}: SetNewPasswordFieldsProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="grid gap-6">
      {/*Set New PASSWORD */}
      <div className="space-y-2">
        <AuthInput
          label="New Password"
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your new password"
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
