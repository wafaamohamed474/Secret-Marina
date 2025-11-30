"use client";
import TripTemplate from "@/components/templates/Trip";
import { useParams } from "next/navigation";

export default function Trip() {
  const { tripId } = useParams();
  console.log('trip id using useParams' , tripId)

  return (
    <div>
      <TripTemplate tripId={tripId as string} />
    </div>
  );
}
