"use client";

import { FaRegBell } from "react-icons/fa";
import notificatinImg from "@/assets/images/notification (2) 1.svg";
import { Button } from "../ui/button";
import Image from "next/image";

interface Props extends React.ComponentProps<"button"> {
  count: number;
}
export default function BellWithBadge({ count, ...props }: Props) {
  return (
    <Button
      type="button"
      {...props}
      className="relative p-2 flex items-center justify-center bg-(--primary-foreground) text-(--primary)"
    >
      <Image src={notificatinImg} alt="notification bell" className="w-6 h-6" />

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
