import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { openDialog } from "@/store/services/authDialogSlice";
import LangDropdown from "./LangDropdown";

export default function NavBtns({ onLinkClick }: { onLinkClick?: () => void }) {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(openDialog("login"));
    onLinkClick?.(); // close sheet if provided
  };

  const handleRegister = () => {
    dispatch(openDialog("register"));
    onLinkClick?.();
  };

  const isAuth = true;
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
