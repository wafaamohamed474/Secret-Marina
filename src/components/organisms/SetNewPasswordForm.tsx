"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormBtn from "../atoms/FormBtn";
import ForgetPasswordFields from "../molecules/ForgetPasswordFields";
import { setNewPasswordSchema, SetNewPasswordSchema } from "@/lib/validations/setNewPasswordSchema";
import SetNewPasswordFields from "../molecules/SetNewPasswordFields";
import FormHeader from "../molecules/FormHeader";



export default function SetNewPasswordForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<SetNewPasswordSchema>({
    resolver: zodResolver(setNewPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const onSubmit = async (data: SetNewPasswordSchema) => {
    setLoading(true);
    console.log("Reset Password Submitted:", data);
    await new Promise((res) => setTimeout(res, 1000));

    alert("Reset Password Success!");
    setLoading(false);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
      <FormHeader label="Set New Password" />
      <SetNewPasswordFields register={form.register} errors={form.formState.errors} />
      <FormBtn label="Reset Password" loading={loading} />
    </form>
  );
}
