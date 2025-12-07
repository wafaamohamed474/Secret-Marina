"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

interface BookCalendarProps {
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

export default function BookCalender({
  selectedDate,
  onDateChange,
}: BookCalendarProps) {
  const [disabledDate, setDisabledDate] = useState<Date | null>(null);

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;
    setDisabledDate(date);
    onDateChange(date);
  };

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={handleSelect}
      className="
        border border-(--primary) rounded-3xl
        w-full
        [&_.rdp-day]:w-10! 
        [&_.rdp-day]:h-8!
         
        "
      buttonVariant="ghost"
      disabled={(date: Date) =>
        disabledDate
          ? date.toDateString() === disabledDate.toDateString()
          : false
      }
    />
  );
}
