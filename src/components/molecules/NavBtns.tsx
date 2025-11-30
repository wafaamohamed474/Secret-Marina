"use client"
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { openDialog } from "@/store/services/authDialogSlice";
import LangDropdown from "./LangDropdown";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function NavBtns({ onLinkClick }: { onLinkClick?: () => void }) {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(openDialog({ screen: "login", phone: "" }));
    onLinkClick?.();
  };

  const handleRegister = () => {
    dispatch(openDialog({ screen: "register", phone: "" }));
    onLinkClick?.();
  };
 
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuth(!!token);
  }, []);

  // Wait until we know auth state
  if (isAuth === null) return null;
  // const token = Cookies.get("token");
  // const isAuth = Boolean(token);
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
