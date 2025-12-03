"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import EmptyImg from "@/assets/images/empty.png";

interface EmptySectionProps {
  title: string;

  buttonLabel?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  className?:string
}

export default function EmptySection({
  title,
  buttonLabel,
  buttonHref,
  onButtonClick,
  className
}: EmptySectionProps) {
  return (
    <section className={`container-custom pb-20 pt-32 flex flex-col items-center text-center h-full justify-center ${className}`}>
      <div className="relative w-80 md:w-1/2 xl:w-1/3 h-80  ">
        <Image src={EmptyImg} alt="empty state" fill className="object-cober" />
      </div>

      <p className="text-(--paragraph-text) text-base   font-medium">{title}</p>

      {buttonLabel && (
        <>
          {buttonHref ? (
            <Link
              href={buttonHref}
              className="mt-6 px-8 py-3 rounded-2xl bg-(--primary) text-white font-semibold text-xs hover:opacity-90"
            >
              {buttonLabel}
            </Link>
          ) : (
            <button
              onClick={onButtonClick}
              className="mt-6 px-8 py-3 rounded-2xl bg-(--primary) text-white font-semibold text-xs font-medium hover:opacity-90"
            >
              {buttonLabel}
            </button>
          )}
        </>
      )}
    </section>
  );
}
