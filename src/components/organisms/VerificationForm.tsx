"use client";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import {
  VerificationSchema,
  verificationSchema,
} from "@/lib/validations/verificationSchema";
import {
  useVerifyOtpMutation,
  useResendOtpMutation,
} from "@/store/services/authApi";
import { closeDialog } from "@/store/services/authDialogSlice";
import type { RootState } from "@/store/store";
import FormHeader from "../molecules/FormHeader";
import FormBtn from "../atoms/FormBtn";
import FormLink from "../atoms/FormLink";
import { Input } from "../ui/input";

export default function VerificationForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const phone = useSelector((state: RootState) => state.authDialog.phone);

  const [
    verifyOtp,
    {
      data: verifyData,
      isLoading: isVerifying,
      isError: isVerifyError,
      error: verifyError,
    },
  ] = useVerifyOtpMutation();
  const [resendOtp] = useResendOtpMutation();

  const [code, setCode] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(0);
  const [resendError, setResendError] = useState<string | null>(null);

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const {
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = useForm<VerificationSchema>({
    resolver: zodResolver(verificationSchema),
    defaultValues: { phone: phone || "", otp: "" },
    mode: "onSubmit",
  });

  useEffect(() => {
    setValue("otp", code.join(""), { shouldValidate: false });
  }, [code, setValue]);

  useEffect(() => {
    if (!phone) return;
    setResendTimer(60); // start 60s countdown on login
  }, [phone]);

  // Countdown timer effect
  useEffect(() => {
    if (resendTimer === 0) return;

    const interval = setInterval(
      () => setResendTimer((prev) => prev - 1),
      1000
    );
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Verification success
  useEffect(() => {
    if (verifyData) {
      console.log("data after verfiy :" , verifyData)
      Cookies.set("token", verifyData?.data?.token, {
        expires: 7,  
        sameSite: "Strict",
        secure: process.env.NODE_ENV === "production",
      });
      dispatch(closeDialog());
      router.push(`/${currentLocale}/home`);
    }
  }, [verifyData, dispatch, router, currentLocale]);

  // OTP input change
  const handleChange = (val: string, idx: number) => {
    if (!/^[0-9]?$/.test(val)) return;
    const newCode = [...code];
    newCode[idx] = val;
    setCode(newCode);
    if (val && idx < 3) inputsRef.current[idx + 1]?.focus();
  };

  // Backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace" && !code[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  // Verify OTP
  const onSubmit = (formData: VerificationSchema) => {
    verifyOtp({
      phone: formData.phone,
      otp: formData.otp,
      lang: currentLocale,
    });
  };

  // Resend OTP
  const handleResend = () => {
    if (!phone || resendTimer > 0) return;

    setResendError(null);
    resendOtp({ phone, lang: currentLocale })
      .then((res: any) => {
        console.log(
          "OTP resent:",
          res.data?.message || "OTP sent successfully"
        );
        setResendTimer(60);
      })
      .catch((err: any) => {
        setResendError(err?.data?.message || "Failed to resend OTP");
      });
  };

  // Error messages
  const verifyErrorMessage =
    isVerifyError && "data" in (verifyError as any)
      ? (verifyError as any).data?.message
      : null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-6"
    >
      <FormHeader
        label="Verification"
        description="A verification code has been sent to you. Enter it to continue."
      />

      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex gap-2">
          {code.map((digit, idx) => (
            <Input
              key={idx}
              ref={(el) => {inputsRef.current[idx] = el}}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="w-14 h-14 text-center rounded-2xl placeholder-gray-400 border border-gray-300 focus:border-blue-500"
              style={{ outline: "none", boxShadow: "none" }}
              onFocus={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 2px #008AEF")
              }
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
            />
          ))}
        </div>

        {/* Dynamic countdown timer under OTP inputs */}

        <span className="text-xs text-(--input-placeholder) mt-1">
          You can resend OTP in{" "}
          <span className="text-red-500">{resendTimer}s</span>
        </span>
      </div>

      {errors.otp && touchedFields.otp && (
        <p className="text-red-500 text-sm">{errors.otp.message}</p>
      )}

      <FormBtn
        label="Verify"
        loading={isVerifying}
        disabled={code.join("").length < 4 || isVerifying}
      />

      <div className="w-full flex flex-col justify-center items-center gap-1">
        <FormLink
          label="Didn’t receive the code?"
          link="Resend"
          onClick={handleResend}
          className={`${
            resendTimer > 0 ? "pointer-events-none opacity-50" : ""
          }`}
        />
        {resendError && <p className="text-red-500 text-sm">{resendError}</p>}
      </div>
    </form>
  );
}
