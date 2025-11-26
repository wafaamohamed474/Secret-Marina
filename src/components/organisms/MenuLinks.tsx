"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "../molecules/NavLinks";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import NavBtns from "../molecules/NavBtns";

export default function MenuLinks() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between gap-x-10 xl:gap-x-50">
        <NavLinks />
        <NavBtns />
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
              <SheetTitle></SheetTitle>
            </VisuallyHidden>

            <NavLinks onLinkClick={() => setOpen(false)} />
            <NavBtns onLinkClick={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
