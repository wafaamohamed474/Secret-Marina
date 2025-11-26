import UnderlineTitle from "@/components/atoms/UnderlineTitle";
import PopularCard from "./PopularCard";
import { destinations } from "@/types/types";
import React from "react";

interface PopularDestinationsProps {
  destinations?: destinations[];
}

const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  destinations,
}) => {
  return (
    <section className="w-full py-20  bg-(--primary)">
      <div className="container-custom">
        <UnderlineTitle>Discover Popular Destinations</UnderlineTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 lg:w-[90%] xl:w-[80%] mx-auto py-12">
          {destinations?.map((dest) => (
            <PopularCard key={dest.id} img={dest.image} title={dest.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PopularDestinations;
