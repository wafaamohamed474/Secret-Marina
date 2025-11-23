"use client";
import UnderlineTitle from "@/components/atoms/UnderlineTitle";

import ActivityImg from "@/assets/images/ship.jpg";
import ActivityCard from "../activities/ActivityCard";
import MainText from "@/components/atoms/MainText";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function SpecialOffers() {
  return (
    <section className="w-full py-20 bg-(--background)">
      <div className="container-custom text-center md:text-left">
        <UnderlineTitle textColor="text-(--offer)" bgColor="bg-(--offer)">
          Special Offers
        </UnderlineTitle>
        
         
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mx-auto py-12">
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
          
           
        </div>
      </div>
    </section>
  );
}
