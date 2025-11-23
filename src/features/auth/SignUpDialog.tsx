import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FormHeader from "@/components/molecules/FormHeader";
import SignUpForm from "@/components/organisms/SignUpForm";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
   
};

export default function SignUpDialog({open , onOpenChange}:Props ) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger className="hidden lg:flex border  text-(--background) bg-(--primary) rounded-md py-2 px-5 font-medium text-base">
        Sign Up
      </DialogTrigger>

      <DialogContent
        className="w-full max-w-md h-full sm:h-auto  md:max-w-2xl lg:max-w-3xl bg-(--background) md:px-10 z-1000 py-10 flex flex-col gap-6
      justify-center "
      >
        <DialogHeader>
          <DialogTitle>
            <FormHeader label="Sign Up" />
          </DialogTitle>
        </DialogHeader>

        <SignUpForm />
      </DialogContent>
    </Dialog>
  );
}
