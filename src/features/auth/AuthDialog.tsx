"use client";

import LoginForm from "@/components/organisms/LoginForm";

import SignUpForm from "@/components/organisms/SignUpForm";
import VerificationForm from "@/components/organisms/VerificationForm";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { closeDialog } from "@/store/services/authDialogSlice";
import { RootState } from "@/store/store";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useDispatch, useSelector } from "react-redux";

export default function AuthDialog() {
  const dispatch = useDispatch();
  const { open, screen } = useSelector((state: RootState) => state.authDialog);
  const isSignUp =
    screen == "register"
      ? "md:max-w-2xl lg:max-w-3xl md:px-10"
      : "md:max-w-xl md:px-20";

  const renderScreen = () => {
    switch (screen) {
      case "login":
        return <LoginForm />;
      case "register":
        return <SignUpForm />;

      case "verify":
        return <VerificationForm />;

      default:
        return <LoginForm />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => dispatch(closeDialog())}>
      <DialogContent
        className={`w-full max-w-md h-full sm:h-auto ${isSignUp}   bg-(--background)  py-10 z-1000  flex flex-col gap-6
      justify-center `}
      >
        <DialogTitle>
          <VisuallyHidden></VisuallyHidden>
        </DialogTitle>
        {renderScreen()}
      </DialogContent>
    </Dialog>
  );
}
