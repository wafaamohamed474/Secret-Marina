"use client"
import Hero from "@/features/landing/hero/Hero";

import About from "@/features/landing/about/About";
import PopularDestinations from "@/features/landing/popular/PopularDestinations";
import TripsTypes from "@/features/landing/trips-types/TripsTypes";
import { usePathname } from "next/navigation";
import { useGetAllHomeDataQuery } from "@/store/services/authApi";

export default function LandingTemplate() {
  const pathname = usePathname()
    const currentLocale = pathname.split("/")[1] || "en";
    const { data, isLoading, error } = useGetAllHomeDataQuery({ lang: currentLocale });
  
     
    console.log("data : ", data?.data);
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading home data</p>;
  return (
    <>
      <Hero />
      <About />
       <PopularDestinations destinations={data?.data?.destinations} />
      <TripsTypes trips={data?.data?.trip_types} />
    </>
  );
}
