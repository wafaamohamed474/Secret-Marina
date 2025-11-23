"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import LoginFields from "@/components/molecules/LoginFields";

import { loginSchema, LoginSchema } from "@/lib/validations/loginSchema";
import FormBtn from "../atoms/FormBtn";
import FormLink from "../atoms/FormLink";



export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { phoneNumber: "", password: "" },
  });

  const onSubmit = async (data: LoginSchema) => {
    setLoading(true);
    console.log("Login Submitted:", data);
    await new Promise((res) => setTimeout(res, 1000));

    alert("Login Success!");
    setLoading(false);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
      <LoginFields register={form.register} errors={form.formState.errors} />
      <FormBtn label="Login" loading={loading} />
       <div className="w-full flex justify-center items-center">
        <FormLink label=" Don’t have an Account ?  " link="Register" path="/"/>
       </div>
      
    </form>
  );
}
