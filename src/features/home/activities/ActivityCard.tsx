// "use client";
import Image from "next/image";
import {
  FaHeart,
  FaRegClock,
  FaRegHeart,
  FaStar,
  FaUser,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import Riyalsvg from "@/assets/images/Riyal.svg";
import RiyalRedsvg from "@/assets/images/RiyalRed.svg";
import { ActivityYouDontMiss } from "@/types/types";

type ActivityCardProps = {
  data: ActivityYouDontMiss;
};

export default function ActivityCard({ data }: ActivityCardProps) {
  return (
    <div className="rounded-2xl  shadow-[0_0_3px_0_var(--primary)] bg-(--background) ">
      <div className="relative w-full h-36 rounded-2xl overflow-hidden">
        <Image
          src={data?.images[0]?.path}
          alt={data?.title}
          fill
          className="object-cover"
        />
        <button
          className="
            absolute top-2 right-2 
            bg-(--background) backdrop-blur 
            w-8 h-8 rounded-full flex items-center justify-center
            shadow-md
          "
        >
          {data?.is_favorited ? (
            <FaHeart className="text-(--offer) text-sm" />
          ) : (
            <FaRegHeart className="text-(--offer) text-sm" />
          )}
        </button>
      </div>

      <div className="pt-3 pb-4 px-2 space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold text-center text-(--text-black)">
            {data?.title}
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-(--price) font-semibold">
              {data?.price_before_discount}
            </span>
            <div className="w-4 h-4 relative">
              <Image
                src={Riyalsvg}
                alt="Riyal"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xs font-medium text-center text-(--paragraph-text)">
            {data?.trip?.title}
          </p>
          <div className="flex items-center gap-1 ">
            <span className="text-[10px] text-(--offer) font-semibold line-through">
              {data?.price_after_discount}
            </span>
            <div className="w-3 h-3 relative">
              <Image
                src={RiyalRedsvg}
                alt="Riyal"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-1">
            <FaUser className="text-(--primary) text-xs" />
            <span className="text-(--primary) text-xs">
              {data?.guest_capacity} Geust
            </span>
          </div>
          <div className="flex justify-between items-center gap-1">
            <FaLocationDot className="text-(--primary) text-xs" />
            <span className="text-(--primary) text-xs">{data?.location}</span>
          </div>
          <div className="flex justify-between items-center gap-1">
            <FaRegClock className="text-(--primary) text-xs" />
            <span className="text-(--primary) text-xs">{data?.duration}h</span>
          </div>
          <div className="flex justify-between items-center gap-1">
            <FaStar className="text-amber-200 text-xs" />
            <span className="text-(--primary) text-xs">
              ({data?.average_rating})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
