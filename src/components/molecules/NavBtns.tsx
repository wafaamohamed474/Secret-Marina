"use client"
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { openDialog } from "@/store/services/authDialogSlice";
import LangDropdown from "./LangDropdown";

export default function NavBtns({ onLinkClick , isAuth }: { onLinkClick?: () => void  ; isAuth : Boolean}) {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(openDialog({ screen: "login", phone: "" }));
    onLinkClick?.();
  };

  const handleRegister = () => {
    dispatch(openDialog({ screen: "register", phone: "" }));
    onLinkClick?.();
  };
 
   
  return (
    <>
      {isAuth ? (
        <LangDropdown />
      ) : (
        <div className="flex gap-x-2">
          <Button
            variant={"outline"}
            onClick={() => handleLogin()}
            className="rounded-md py-2 px-5 font-medium text-base w-26"
          >
            Login
          </Button>
          <Button
            variant={"default"}
            onClick={() => handleRegister()}
            className="rounded-md py-2 px-5 font-medium text-base w-26"
          >
            Sign Up
          </Button>
        </div>
      )}
    </>
  );
}
