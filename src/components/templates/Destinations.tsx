"use client";
import DestinationsSection from "@/features/destinations/Destinations";
import { useGetAllHomeDataQuery } from "@/store/services/authApi";
import { usePathname } from "next/navigation";
import React from "react";

export default function DestinationsTemplate() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const { data, isLoading, error } = useGetAllHomeDataQuery({
    lang: currentLocale,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading Destinations data</p>;
  return (
    <div>
      <DestinationsSection destinations={data?.data?.destinations}/>
    </div>
  );
}
