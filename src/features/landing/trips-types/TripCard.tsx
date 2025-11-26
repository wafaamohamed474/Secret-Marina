"use client";
import Image, { StaticImageData } from "next/image";

type TripCardProps = {
  img: string | StaticImageData;
  title: string;
};

export default function TripCard({ img, title }: TripCardProps) {
  return (
    <div className="flex flex-col items-center gap-7">
      <div className="w-40 h-60 relative">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h5 className="text-base font-semibold text-(--text-primary) w-full">{title}</h5>
    </div>
  );
}
