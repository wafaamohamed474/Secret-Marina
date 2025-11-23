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
import VerificationForm from "@/components/organisms/VerificationForm";

export default function VerificationDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">Verification</Button>
      </DialogTrigger>

      <DialogContent
        className="w-full max-w-md h-full sm:h-auto md:max-w-xl  bg-(--background) md:px-20 z-1000 py-10 flex flex-col gap-6
      justify-center "
      >
        <DialogHeader>
          <DialogTitle>
            <FormHeader
              label="Verification"
              description="A verification code has been sent to you. Enter it to continue."
            />
          </DialogTitle>
        </DialogHeader>

        <VerificationForm />
      </DialogContent>
    </Dialog>
  );
}
