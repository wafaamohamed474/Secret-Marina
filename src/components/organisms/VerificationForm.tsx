"use client";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  verificationSchema,
  VerificationSchema,
} from "@/lib/validations/verificationSchema";
import FormBtn from "../atoms/FormBtn";
import { Input } from "../ui/input";
import FormLink from "../atoms/FormLink";

export default function VerificationForm() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VerificationSchema>({
    resolver: zodResolver(verificationSchema),
  });

  const handleChange = (val: string, idx: number) => {
    if (!/^[0-9]?$/.test(val)) return;
    const newCode = [...code];
    newCode[idx] = val;
    setCode(newCode);

    if (val && idx < 3) {
      inputsRef.current[idx + 1]?.focus();
    }

    // Update react-hook-form field
    setValue("code", newCode.join(""));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace" && !code[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const onSubmit = (data: VerificationSchema) => {
    console.log("Verification code submitted:", data.code);
    // Call your API here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-6"
    >
      <div className="flex gap-2">
        {code.map((digit, idx) => (
          <Input
            key={idx}
            ref={(el) => {
              inputsRef.current[idx] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className="w-14 h-14 text-center rounded-2xl
            placeholder-(--input-placeholder) text-base border-(--input-border) on focus:border-(--primary)
             "
            style={{
              outline: "none",
              boxShadow: "none",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 2px #008AEF")
            }
            onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          />
        ))}
      </div>
      {errors.code && <p className="text-red-500">{errors.code.message}</p>}
      <FormBtn label="Verify" />
      <div className="w-full flex justify-center items-center">
       <FormLink label="Didn’t receive the code?" link="Resend" path="/"/>
       </div>
    </form>
  );
}
