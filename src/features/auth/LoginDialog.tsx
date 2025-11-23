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
 

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
   
};

export default function LoginDialog({open , onOpenChange}:Props ) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger className="hidden lg:flex border  text-(--primary) bg-(--background) rounded-md py-2 px-5 font-medium text-base  ">
        Log In
      </DialogTrigger>

      <DialogContent
        className="w-full max-w-md h-full sm:h-auto md:max-w-xl  bg-(--background) md:px-20 py-10 z-1000  flex flex-col gap-6
      justify-center "
      >
        <DialogHeader>
          <DialogTitle>
            <FormHeader
              label="Login"
              description="Welcome back! Access your account to start your journey."
            />
          </DialogTitle>
        </DialogHeader>

        <LoginForm />
      </DialogContent>
    </Dialog>
  );
}
