// "use client";
import Image, { StaticImageData } from "next/image";
import { FaRegClock, FaRegHeart, FaStar, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import Riyalsvg from "@/assets/images/RiyalBlue.svg";
import RiyalRedsvg from "@/assets/images/RiyalRed.svg";
import { TopDiscountService } from "@/types/types";

type SpecialOffersCardProps = {
  data: TopDiscountService;
};

export default function SpecialOffersCard({ data }: SpecialOffersCardProps) {
  return (
    
    <div className="rounded-2xl shadow-[0_0_3px_0_var(--primary)] bg-(--background) relative overflow-hidden">
      <div className="absolute top-0 left-0 bg-(--offer) flex justify-center items-center px-8 py-2 rounded-ee-2xl">
        <span className="text-(--background) font-bold text-base">
          Up to {data?.discount_percentage} % off
        </span>
      </div>

      <div className="flex flex-col items-end pt-5 pr-5">
        <div className="flex items-center  gap-1 ">
          <span className="text-base text-(--primary) font-semibold">{data?.price_before_discount}</span>
          <div className="w-5 h-5 relative">
            <Image
              src={Riyalsvg}
              alt="Riyal"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>

        <div className="flex items-center gap-1 pr-1.5">
          <span className="text-xs text-(--offer) font-semibold line-through">
             {data?.price_after_discount}
          </span>
          <div className="w-4 h-4 relative">
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




      <div className="flex items-center md:items-start px-3  md:pl-5 md:pr-16 pb-5 gap-2">
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image src={data?.images[0]?.path} alt={data?.title} fill className="object-cover" />
        </div>

        <div className="flex items-start flex-col flex-1 md:pt-5 ">
          <p className="text-sm font-semibold   text-(--text-black)">{data?.title}</p>
          <p className="text-xs font-medium   text-(--paragraph-text) pt-1">
             {data?.trip?.title}
          </p>
          <p className="text-[10px] font-normal  text-(--black-text) py-2 md:py-3 text-left">
           {data?.description}
          </p>
          <div className="flex justify-start md:items-center gap-2 md:gap-x-3 flex-wrap">
            <div className="flex justify-between items-center gap-1 bg-(--card-bg) rounded-xl py-1  md:py-2 px-3">
              <FaUser className="text-(--primary) text-[10px] md:text-xs" />
              <span className="text-(--primary) text-[10px] md:text-xs">
                {data?.guest_capacity} Geust
              </span>
            </div>
            <div className="flex justify-between items-center gap-1 bg-(--card-bg) rounded-xl py-1 md:py-2 px-3">
              <FaStar className="text-amber-200 text-xs" />
              <span className="text-(--primary) text-[10px] md:text-xs">
                ({data?.average_rating})
              </span>
            </div>
            <div className="flex justify-between items-center gap-1 bg-(--card-bg) rounded-xl py-1 md:py-2 px-3">
              <FaLocationDot className="text-(--primary) text-[10px] md:text-xs" />
              <span className="text-(--primary) text-[10px] md:text-xs">
                 {data?.location}
              </span>
            </div>
            <div className="flex justify-between items-center gap-1 bg-(--card-bg) rounded-xl py-1 md:py-2 px-3">
              <FaRegClock className="text-(--primary) text-[10px] md:text-xs" />
              <span className="text-(--primary) text-[10px] md:text-xs">
                {data?.duration}h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
