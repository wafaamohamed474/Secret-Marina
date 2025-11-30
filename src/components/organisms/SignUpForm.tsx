"use client";
import { SignUpSchema, signUpSchema } from "@/lib/validations/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SignUpFields from "../molecules/SignUpFields";
import FormBtn from "../atoms/FormBtn";
import FormLink from "../atoms/FormLink";
import { useSignUpMutation } from "@/store/services/authApi";
import FormHeader from "../molecules/FormHeader";
import { useDispatch } from "react-redux";
import { openDialog } from "@/store/services/authDialogSlice";
import { usePathname } from "next/navigation";

export default function SignUpForm() {
  const [SignUp, { data, isLoading, isError, error }] = useSignUpMutation();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { handleSubmit, reset, formState } = form;
  const dispatch = useDispatch();
  const onSubmit = async (values: SignUpSchema) => {
    SignUp({ ...values, lang: currentLocale });
  };

  useEffect(() => {
    if (data?.data) {
      form.reset();
      dispatch(openDialog({ screen: "login", phone: "" }));
    }
  }, [data, dispatch, form]);

  const errorMessage =
    isError && "data" in (error as any) && (error as any).data?.message
      ? (error as any).data.message
      : null;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <FormHeader label="Sign Up" />

      <SignUpFields register={form.register} errors={formState.errors} />

      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}

      <FormBtn
        label="Sign Up"
        loading={isLoading}
        disabled={formState.isSubmitting}
      />

      <div className="w-full flex justify-center items-center">
        <FormLink label="Already have an account?" link="Login" path="login" />
      </div>
    </form>
  );
}
