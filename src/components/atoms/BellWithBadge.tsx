"use client";

import { FaRegBell } from "react-icons/fa";
import { Button } from "../ui/button";

export default function BellWithBadge({ count }: { count: number }) {
  return (
    <Button className="relative flex items-center justify-center bg-(--primary-foreground) text-(--primary)">
      {/* GIF Image */}
      {/* <img src={src} alt="bell" className="w-full h-full" /> */}
      <FaRegBell className="text-3xl font-bold" />

      {/* Badge */}
      {count > 0 && (
        <span
          className="
            absolute -top-1 -right-1 
            bg-(--primary) text-white 
            text-xs font-bold
            w-5 h-5 flex items-center justify-center 
            rounded-full shadow
          "
        >
          {count}
        </span>
      )}
    </Button>
  );
}
