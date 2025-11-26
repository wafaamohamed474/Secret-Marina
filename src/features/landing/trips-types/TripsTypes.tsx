import MainText from "@/components/atoms/MainText";
import MainTitle from "@/components/atoms/MainTitle";
import TripCard from "./TripCard";
import img1 from "@/assets/images/img1.jpg";
import img2 from "@/assets/images/img2.jpg";
import img3 from "@/assets/images/img3.jpg";
import { trip_types } from "@/types/types";
import React from "react";
import SectionLink from "@/components/atoms/SectionLink";

interface TripsTypesProps {
  trips?: trip_types[];
}

const TripsTypes: React.FC<TripsTypesProps> = ({ trips }) => {
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
            <TripCard key={trip.id} img={trip.image} title={trip.title} />
          ))}
        </div>
        <SectionLink/>
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
