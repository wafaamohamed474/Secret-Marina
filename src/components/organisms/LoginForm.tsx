"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import LoginFields from "@/components/molecules/LoginFields";

import { loginSchema, LoginSchema } from "@/lib/validations/loginSchema";
import FormBtn from "../atoms/FormBtn";
import FormLink from "../atoms/FormLink";
import { useLoginMutation } from "@/store/services/authApi";
import FormHeader from "../molecules/FormHeader";

export default function LoginForm() {
  const [Login, { isLoading, isError, error }] = useLoginMutation();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { phoneNumber: ""},
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const res = await Login(data);
      if ("data" in res) {
        console.log("Login success:", res.data);
        form.reset();
      } else if ("error" in res) {
        console.log("Login failed:", res.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
      <FormHeader
        label="Login"
        description="Welcome back! Access your account to start your journey."
      />
      <LoginFields register={form.register} errors={form.formState.errors} />
      <FormBtn
        label="Login"
        loading={isLoading}
        disabled={form.formState.isSubmitting}
      />
      <div className="w-full flex justify-center items-center">
        <FormLink label=" Don’t have an Account ?  " link="Register" path="register" />
      </div>
    </form>
  );
}
