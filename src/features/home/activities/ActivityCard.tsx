"use client";
import Image, { StaticImageData } from "next/image";
import { FaClock, FaStar, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

type ActivityCardProps = {
  title: string;
  img: string | StaticImageData;
};

export default function ActivityCard({ title, img }: ActivityCardProps) {
  return (
    <div className="rounded-2xl  shadow-[0_0_3px_0_var(--primary)] bg-(--background) ">
      <div className="relative w-full h-36 rounded-2xl overflow-hidden">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      <div className="pt-3 pb-4 px-2 space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold text-center text-(--text-black)">
            {title}
          </p>
          <span className="text-(--price) text-xs font-semibold">ريال</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xs font-medium text-center text-(--paragraph-text)">
            Excursion Boat Trips
          </p>
          <span className="text-(--offer) text-xs font-semibold">1000ريال</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-1">
            <FaUser className="text-(--primary) text-xs" />
            <span className="text-(--primary) text-xs">12 Geust</span>
          </div>
          <div className="flex justify-between items-center gap-1">
            <FaLocationDot className="text-(--primary) text-xs" />
            <span className="text-(--primary) text-xs">Riyadh</span>
          </div>
          <div className="flex justify-between items-center gap-1">
            <FaClock className="text-(--primary) text-xs" />
            <span className="text-(--primary) text-xs">6h</span>
          </div>
          <div className="flex justify-between items-center gap-1">
            <FaStar className="text-amber-200 text-xs" />
            <span className="text-(--primary) text-xs">(4.5)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
