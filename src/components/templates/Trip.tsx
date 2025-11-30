"use client";
import TripDetailes from "@/features/trip/Trip";
import { useGetTripByIdQuery } from "@/store/services/authApi";
import { usePathname } from "next/navigation";
import React from "react";

export default function TripTemplate({ tripId }: { tripId?: string }) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  if (!tripId) return;
  const { data, isLoading, isError } = useGetTripByIdQuery({
    id: tripId,
    lang: currentLocale,
  });
  console.log("trip id :", tripId);
  console.log("data from id :", data?.data);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <div>
      <TripDetailes />
    </div>
  );
}
