"use client";
import Image from "next/image";
import heroImage from "@/assets/images/img2.jpg";

export default function HeroHome() {
  return (
    <div className="container-custom pb-20 pt-32">
      <div className="relative w-full h-96 rounded-4xl overflow-hidden">
        <Image
          src={heroImage}
          alt="hero home img"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
