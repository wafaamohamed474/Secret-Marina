import { useState } from "react";
import TripServiceBtn from "../atoms/TripServiceBtn";
import { facilityIcons } from "@/lib/icons";
import { BsThreeDots } from "react-icons/bs";

export default function TripFacilities({ trip }: any) {
  const [showAll, setShowAll] = useState(false);

  if (!trip?.facilities) return null;

  const maxVisible = 4;
  const facilitiesToShow = showAll
    ? trip.facilities
    : trip.facilities.slice(0, maxVisible);

  return (
    <div className="flex flex-wrap gap-2">
      {facilitiesToShow.map((f: any) => {
        const Icon = facilityIcons[f.title] || null;
        return <TripServiceBtn key={f.id} label={f.title} Icon={Icon} />;
      })}
      {trip.facilities.length > maxVisible && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex flex-col justify-center items-center py-1 px-5 rounded-xl   shadow-[0_0_2px_#008AEF] text-(--primary) text-sm font-semibold"
        >
          <BsThreeDots className="text-sm p-0" />
          {showAll ? "less" : `more`}
        </button>
      )}
    </div>
  );
}
