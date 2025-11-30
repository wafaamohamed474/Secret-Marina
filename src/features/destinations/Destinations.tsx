"use client";
import UnderlineTitle from "@/components/atoms/UnderlineTitle";

import { categories, destinations } from "@/types/types";
import React from "react";
import SectionLink from "@/components/atoms/SectionLink";

import PopularCard from "../landing/popular/PopularCard";
import { usePathname } from "next/navigation";

interface PopularDestinationsProps {
  destinations?: destinations[];
}

const DestinationsSection: React.FC<PopularDestinationsProps> = ({
  destinations,
}) => {
  return (
    <section className="w-full">
      <div className="container-custom pb-20 pt-32">
        <UnderlineTitle bgColor="bg-(--primary)" textColor="text-(--primary)">
          Discover Popular Destinations
        </UnderlineTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 lg:w-[90%] xl:w-[80%] mx-auto py-12">
          {destinations?.map((dest) => (
            <PopularCard
              key={dest.id}
              img={dest.image}
              title={dest.title}
              color="bg-(--primary)"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
