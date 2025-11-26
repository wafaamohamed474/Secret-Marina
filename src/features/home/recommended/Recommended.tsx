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
import { recommended_service } from "@/types/types";
import RecommendedCard from "./RecommendedCard";
import SectionLink from "@/components/atoms/SectionLink";

interface RecommendedProps {
  services?: recommended_service[];
}

const Recommended: React.FC<RecommendedProps> = ({ services }) => {
  return (
    <section className="w-full py-20 bg-(--background)">
      <div className="container-custom text-center md:text-left">
        <UnderlineTitle textColor="text-(--primary)">
          Recommended
        </UnderlineTitle>
        <MainText>Top picks chosen just for you.</MainText>

        <Carousel className="w-full py-12">
          <CarouselContent>
            {services?.map((serv, index) => (
              <CarouselItem key={serv.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <RecommendedCard data={serv} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <SectionLink/>
      </div>
    </section>
  );
};
export default Recommended;
