import * as React from "react";

 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroHome from "./Hero";

export function HeroSlider() {
  return (
    <div className="container-custom ">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <HeroHome />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
         
      </Carousel>
    </div>
  );
}
