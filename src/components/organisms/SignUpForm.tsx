"use client";
import { SignUpSchema, signUpSchema } from "@/lib/validations/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SignUpFields from "../molecules/SignUpFields";
import FormBtn from "../atoms/FormBtn";
import FormLink from "../atoms/FormLink";

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    console.log("Sign Up Submitted:", data);
    await new Promise((res) => setTimeout(res, 1000));
    alert("Sign Up Success!");
    setLoading(false);
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <SignUpFields register={form.register} errors={form.formState.errors} />
      <FormBtn label="Sign Up" loading={loading} />
       <div className="w-full flex justify-center items-center">
      <FormLink label="Already have an Account ?  " link="Login" path="/"/>
      </div>
    </form>
  );
}
