"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FormHeader from "@/components/molecules/FormHeader";
import { Button } from "@/components/ui/button";
import SetNewPasswordForm from "@/components/organisms/SetNewPasswordForm";

export default function SetNewPasswordDialog() {
  return (
    <Dialog>
      <DialogTrigger className="">
        <Button variant="outline">Set New Password</Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-md h-full sm:h-auto md:max-w-xl  bg-(--background) md:px-20 z-1000 py-10 flex flex-col gap-6
      justify-center ">
        <DialogHeader>
          <DialogTitle>
            <FormHeader label="Set New Password" />
          </DialogTitle>
        </DialogHeader>

        <SetNewPasswordForm />
      </DialogContent>
    </Dialog>
  );
}
