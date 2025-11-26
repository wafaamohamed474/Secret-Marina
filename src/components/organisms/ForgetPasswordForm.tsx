"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormBtn from "../atoms/FormBtn";
import ForgetPasswordFields from "../molecules/ForgetPasswordFields";
import {
  forgetPasswordSchema,
  ForgetPasswordSchema,
} from "@/lib/validations/forgetPasswordSchema";
import FormHeader from "../molecules/FormHeader";

export default function ForgetPasswordForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<ForgetPasswordSchema>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: { phoneNumber: "" },
  });

  const onSubmit = async (data: ForgetPasswordSchema) => {
    setLoading(true);
    console.log("Forget Password Submitted:", data);
    await new Promise((res) => setTimeout(res, 1000));

    alert("Forget Password Success!");
    setLoading(false);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
      <FormHeader
        label="Forget Password"
        description="Enter your phone number and we’ll send you a code to reset your password."
      />
      <ForgetPasswordFields
        register={form.register}
        errors={form.formState.errors}
      />
      <FormBtn label="Reset Password" loading={loading} />
    </form>
  );
}
