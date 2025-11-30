"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";

import LoginFields from "@/components/molecules/LoginFields";
import FormBtn from "../atoms/FormBtn";
import FormLink from "../atoms/FormLink";
import FormHeader from "../molecules/FormHeader";

import { loginSchema, LoginSchema } from "@/lib/validations/loginSchema";
import { useLoginMutation } from "@/store/services/authApi";
import { openDialog } from "@/store/services/authDialogSlice";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoginForm() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const dispatch = useDispatch();
  const [login, { data, isLoading, isError, error }] = useLoginMutation();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { phone: "" },
  });

  const { handleSubmit, reset, formState } = form;

  const onSubmit = (values: LoginSchema) => {
    login({...values , lang : currentLocale});
  };

  useEffect(() => {
    if (data?.data?.user?.phone) {
      form.reset();
      dispatch(
        openDialog({
          screen: "verify",
          phone: data.data.user.phone,
        })
      );
    }
  }, [data, dispatch, form]);

  const errorMessage =
    isError && "data" in (error as any) && (error as any).data?.message
      ? (error as any).data?.message
      : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <FormHeader
        label="Login"
        description="Welcome back! Access your account to start your journey."
      />

      <LoginFields register={form.register} errors={formState.errors} />

      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}

      <FormBtn
        label="Login"
        loading={isLoading}
        disabled={formState.isSubmitting}
      />

      <div className="w-full flex justify-center items-center">
        <FormLink
          label="Don’t have an account?"
          link="Register"
          path="register"
        />
      </div>
    </form>
  );
}
