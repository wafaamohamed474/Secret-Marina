"use client";
import { SignUpSchema, signUpSchema } from "@/lib/validations/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SignUpFields from "../molecules/SignUpFields";
import FormBtn from "../atoms/FormBtn";
import FormLink from "../atoms/FormLink";
import { useSignUpMutation } from "@/store/services/authApi";
import FormHeader from "../molecules/FormHeader";

export default function SignUpForm() {
  const [SignUp, { isLoading, isError, error }] = useSignUpMutation();
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignUpSchema) => {
    try {
      const res = await SignUp(data);
      if ("data" in res) {
        console.log("Sign up success:", res.data);
        form.reset();
      } else if ("error" in res) {
        console.log("sign up failed:", res.error);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <FormHeader label="Sign Up" />
      <SignUpFields register={form.register} errors={form.formState.errors} />
      <FormBtn label="Sign Up" loading={isLoading} />
      <div className="w-full flex justify-center items-center">
        <FormLink label="Already have an Account ?  " link="Login" path="login" />
      </div>
    </form>
  );
}
