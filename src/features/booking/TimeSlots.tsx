"use client";
import React, { useState, useMemo } from "react";
import { useGetBookSlotsByIdQuery } from "@/store/services/authApi";
import {
  calcEndTime,
  convertTo24Hour,
  formatTo12Hour,
} from "./GenerateTimeRanges";
import TimeSlotBtn, { TimeSlot } from "./TimeSlotBtn";

interface TimeSlotsProps {
  id: string;
  selectedDate: string;
  duration: number;
  onSelect: (start24: string, end24: string, labelStart: string, labelEnd: string) => void;

}

export default function TimeSlots({
  id,
  selectedDate,
  duration,
  onSelect,
}: TimeSlotsProps) {
  const [selected, setSelected] = useState<{
    start24: string;
    end24: string;
  } | null>(null);

  const { data, isLoading, isError } = useGetBookSlotsByIdQuery({
    id,
    date: selectedDate,
  });

  // ==========================
  //   Memoized Slot Builder
  // ==========================
  const formattedSlots = useMemo(() => {
    if (!data?.data || data.data.length === 0) return [];

    const backendSlot = data.data[0];
    const { start_time, end_time } = backendSlot;

    const start24 = convertTo24Hour(start_time);
    const end24 = convertTo24Hour(end_time);

    const slots: TimeSlot[] = [];
    let current = start24;

    while (current < end24) {
      const next = calcEndTime(current, duration);
      if (next > end24) break;

      slots.push({
        start: formatTo12Hour(current),
        duration,
        labelStart: formatTo12Hour(current),
        labelEnd: formatTo12Hour(next),
        labelFull: `${formatTo12Hour(current)}  ${formatTo12Hour(next)}`,
      });

      current = next;
    }

    return slots;
  }, [data, duration]);

  // ==========================
  //   Handle Select
  // ==========================
  const handleSelect = (slot: TimeSlot) => {
    const start24 = convertTo24Hour(slot.labelStart);
    const end24 = calcEndTime(start24, slot.duration);

    setSelected({ start24, end24 });
    onSelect(start24, end24, slot.labelStart, slot.labelEnd);
  };

  // ==========================
  //   UI States
  // ==========================
  if (isLoading) return <p className="text-sm py-5">Loading...</p>;
  if (isError)
    return <p className="text-sm py-5 text-red-400">Error loading bookings</p>;
  if (formattedSlots.length === 0)
    return <p className="text-sm py-5">No bookings available on this date</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-4">
      {formattedSlots.map((slot) => {
        const slotStart24 = convertTo24Hour(slot.labelStart);
        const isSelected = selected?.start24 === slotStart24;

        return (
          <TimeSlotBtn
            key={slot.labelFull}
            slot={slot}
            isSelected={isSelected}
            onSelect={handleSelect}
          />
        );
      })}
    </div>
  );
}
