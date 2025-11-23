import Hero from "@/features/landing/hero/Hero";

import About from "@/features/landing/about/About";
import PopularDestinations from "@/features/landing/popular/PopularDestinations";
import TripsTypes from "@/features/landing/trips-types/TripsTypes";

export default function LandingTemplate() {
  return (
    <>
      <Hero />
      <About />
      <PopularDestinations />
      <TripsTypes />
    </>
  );
}
