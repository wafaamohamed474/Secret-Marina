"use client";
import TripTypesTemplate from "@/components/templates/TripTypes";
import { useParams } from "next/navigation";
import React from "react";

export default function TripType() {
  const { tripTypeId } = useParams();
  console.log(tripTypeId);
  return (
    <>
      <TripTypesTemplate tripTypeId={tripTypeId as string} />
    </>
  );
}
