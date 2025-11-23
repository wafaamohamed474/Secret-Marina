"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoginForm from "@/components/organisms/LoginForm";
import FormHeader from "@/components/molecules/FormHeader";
import { Button } from "@/components/ui/button";
import ForgetPasswordForm from "@/components/organisms/ForgetPasswordForm";

export default function ForgetPasswordDialog() {
  return (
    <Dialog>
      <DialogTrigger className="">
        <Button variant="outline">Forget Password</Button>
      </DialogTrigger>

      <DialogContent 
      className="
      w-full max-w-md 
      h-full sm:h-auto md:max-w-xl  
      bg-(--background) md:px-20 z-1000 py-10 
      flex flex-col gap-6
      justify-center 
      
      ">
        <DialogHeader>
          <DialogTitle>
            <FormHeader
              label="Forget Password"
              description="Enter your phone number and we’ll send you a code to reset your password."
            />
          </DialogTitle>
        </DialogHeader>

        <ForgetPasswordForm />
      </DialogContent>
    </Dialog>

    //   className="
    //     w-full
    //     max-w-md
    //     h-dvh        /* Full height on mobile */
    //     sm:rounded-xl        /* Rounded on desktop only */
    //     bg-(--background)
    //     px-6 sm:px-10 lg:px-16
    //     py-8
    //     flex flex-col gap-6
    //     justify-center sm:justify-start
    //      /* Better spacing */
    //   "
    // >
  );
}
