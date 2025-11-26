import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HeroHome from "./Hero";
import { banners } from "@/types/types";

interface HeroSliderProps {
  banners?: banners[];
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ banners }) => {
  return (
    <div className="container-custom ">
      <Carousel className="w-full">
        <CarouselContent>
          {banners?.map((ban, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <HeroHome img={ban.image} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
