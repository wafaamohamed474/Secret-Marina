import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import BellWithBadge from "../atoms/BellWithBadge";
import { FaX } from "react-icons/fa6";
import alertNotificationImg from "@/assets/images/Group 18.png";
import Image from "next/image";
import { Pointer } from "lucide-react";

export function NotificationMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <BellWithBadge count={7} />
      </PopoverTrigger>
      <PopoverContent
        className="bg-white z-9999 mt-5 border py-10 px-0 w-screen md:w-[80vw] lg:w-[60vw] "
        align="end"
        sideOffset={10}
        side="bottom"
      >
        <div className="grid gap-8">
          <div className="space-y-5">
            <h2 className="leading-none font-semibold text-base text-center text-(--primary)">
              Notification
            </h2>
          </div>
          <div>
            <div className="flex items-center justify-between bg-(--card-bg) px-5 py-3 w-full border-b border-(--input-border)">
              <div className="flex items-center justify-between gap-2 md:gap-4">
                <div>
                  <Image
                    src={alertNotificationImg}
                    alt="alert notification img"
                    className="w-10 md:w-14 h-10 md:h-14"
                  />
                </div>
                <p className="text-xs md:text-sm font-normal text-[#00002B]">
                  Reminder Your trip is tomorrow get ready for the adventure.
                </p>
              </div>
              <button className="cursor-pointer">
                <FaX className="text-(--primary) text-xs md:text-sm " />
              </button>
            </div>
              <div className="flex items-center justify-between   px-5 py-3 w-full border-b border-(--input-border)">
              <div className="flex items-center justify-between gap-2 md:gap-4">
                <div>
                  <Image
                    src={alertNotificationImg}
                    alt="alert notification img"
                    className="w-10 md:w-14 h-10 md:h-14"
                  />
                </div>
                <p className="text-xs md:text-sm font-normal text-[#00002B]">
                  Reminder Your trip is tomorrow get ready for the adventure.
                </p>
              </div>
              <button className="cursor-pointer">
                <FaX className="text-(--primary) text-xs md:text-sm " />
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
