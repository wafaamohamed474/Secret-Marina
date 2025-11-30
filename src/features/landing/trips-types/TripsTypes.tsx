"use client"
import MainText from "@/components/atoms/MainText";
import MainTitle from "@/components/atoms/MainTitle";
import TripCard from "./TripCard";
import { trip_types } from "@/types/types";
import React from "react";
import SectionLink from "@/components/atoms/SectionLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TripsTypesProps {
  trips?: trip_types[];
}

const TripsTypes: React.FC<TripsTypesProps> = ({ trips }) => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  return (
    <section className="py-20">
      <div className="container-custom text-center">
        <MainTitle>Secret Marina Trips Types</MainTitle>
        <MainText>
          Find your perfect sea escape — from island adventures to luxury yacht
          experiences.
        </MainText>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:w-[90%] xl:w-[80%] gap-10 mx-auto py-12">
          {trips?.map((trip) => (
            <Link href={`/${currentLocale}/home/trip-types/${trip.id}`} key={trip.id}>
              <TripCard  img={trip.image} title={trip.title} />
            </Link>
          ))}
        </div>
        {/* <SectionLink path={`/${currentLocale}/home/trip-types`}/> */}
      </div>
    </section>
  );
};

export default TripsTypes;

// const trips = [
//   { img: img1, title: "Excursion Boat Trips" },
//   { img: img2, title: "Fishing Trips" },
//   { img: img3, title: "Diving Trips" },
//   { img: img1, title: "Free Activities" },
//   { img: img2, title: "Luxury Yacht" },
// ];
