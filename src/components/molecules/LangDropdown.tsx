"use client";

import Image from "next/image";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import USFlag from "@/assets/images/US_flag.svg";
import ARFlag from "@/assets/images/flag.png";
import { usePathname ,  useRouter } from "next/navigation";
 

export default function LangDropdown() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const segments = pathname.split("/");
  let currentLocale = segments[1] || "en";

  const handleSelect = (selected: string) => {
    segments[1] = selected;
    const newPath = segments.join("/") || "/";
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left items-center pt-2   px-2">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <Image
          src={currentLocale === "en" ? USFlag : ARFlag}
          alt=""
          className="w-6 h-full"
        />
        <span className="font-normal text-base">
          {currentLocale === "en" ? "English" : "Arabic"}
        </span>
        <IoMdArrowDropdown className="text-(--primary)" />
      </button>

      {/* Menu */}
      {open && (
        <div
          className="absolute mt-3 bg-white shadow-xl rounded-md border border-(--input-border) z-30 flex px-2 py-2 w-full cursor-pointer justify-around"
          onClick={() => handleSelect(currentLocale === "en" ? "ar" : "en")}
        >
          <Image
            src={currentLocale === "en" ? ARFlag : USFlag}
            alt=""
            className="w-6 h-6"
          />
          <span className="font-normal text-base">
            {currentLocale === "en" ? "Arabic" : "English"}
          </span>
        </div>
      )}
    </div>
  );
}
