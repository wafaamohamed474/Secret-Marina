"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "../molecules/NavLinks";
import LoginDialog from "@/features/auth/LoginDialog";
import SignUpDialog from "@/features/auth/SignUpDialog";
import ForgetPasswordDialog from "@/features/auth/ForgetPasswordDailog";
import SetNewPasswordDialog from "@/features/auth/SetNewPasswordDialog";
import VerificationDialog from "@/features/auth/VerificationDialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { Button } from "../ui/button";

export default function MenuLinks() {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleOpenDialog = (setter: (v: boolean) => void) => {
    // close sheet first
    setOpen(false);

    // small timeout so the sheet animation finishes before dialog opens
    setTimeout(() => setter(true), 80);
  };

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between items-center w-2/3 ">
        <NavLinks />
        <div className="flex gap-x-2">
          <LoginDialog open={openLogin} onOpenChange={setOpenLogin} />
          <SignUpDialog open={openSignup} onOpenChange={setOpenSignup} />
        </div>
        {/* <ForgetPasswordDialog/>
        <SetNewPasswordDialog/>
        <VerificationDialog/> */}
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu className="w-7 h-7 text-black" />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[270px] bg-white shadow-xl border-r border-gray-200 z-9999 px-6 pt-20"
          >
            <VisuallyHidden>
              <SheetTitle>Sidebar Menu</SheetTitle>
            </VisuallyHidden>

            <NavLinks onLinkClick={() => setOpen(false)} />
            <div className="flex items-center justify-between">
              <Button
                variant={"outline"}
                onClick={() => handleOpenDialog(setOpenLogin)}
                className="rounded-md py-2 px-5 font-medium text-base w-26"
              >
                Login
              </Button>
              <Button
                variant={"default"}
                onClick={() => handleOpenDialog(setOpenSignup)}
                className="rounded-md py-2 px-5 font-medium text-base w-26"
              >
                Sign Up
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
