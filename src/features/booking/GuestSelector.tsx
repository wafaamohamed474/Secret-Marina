"use client";
import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

interface GuestSelectorProps {
  data?: {
    price_after_discount: number;
    child_free?: boolean;
  };
  onChange?: (adults: number, children: number) => void;
}

export default function GuestSelector({
  data,
  onChange,
}: GuestSelectorProps) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // Helper to update state & notify parent
  const updateGuests = (newAdults: number, newChildren: number) => {
    setAdults(newAdults);
    setChildren(newChildren);
    onChange?.(newAdults, newChildren);
  };

  // Increment / Decrement handlers
  const increment = (type: "adult" | "child") => {
    if (type === "adult") updateGuests(adults + 1, children);
    if (type === "child") updateGuests(adults, children + 1);
  };

  const decrement = (type: "adult" | "child") => {
    if (type === "adult" && adults > 1) updateGuests(adults - 1, children); // min 1 adult
    if (type === "child" && children > 0) updateGuests(adults, children - 1); // min 0 child
  };

  return (
    <div className="flex flex-col justify-around py-5 md:p-0">
      {/* Adults */}
      <div className="flex justify-between items-center gap-2">
        <span className="text-sm font-semibold">Adults</span>
        <div className="flex items-center gap-2">
          <button onClick={() => decrement("adult")} className="text-(--primary)"><CiCircleMinus /></button>
          <span className="flex text-sm items-center gap-2">
            {adults} <FaUser className="text-xs text-(--primary)" />
          </span>
          <button onClick={() => increment("adult")} className="text-(--primary)"><CiCirclePlus /></button>
        </div>
        <span className="text-xs font-medium text-(--primary)">
          {data?.price_after_discount} SAR
        </span>
      </div>

      {/* Children */}
      <div className="flex justify-between items-center gap-2 mt-3">
        <span className="text-sm font-semibold">Children</span>
        <div className="flex items-center gap-2">
          <button onClick={() => decrement("child")} className="text-(--primary)"><CiCircleMinus /></button>
          <span className="flex text-sm items-center gap-2">
            {children} <FaUser className="text-xs text-(--primary)" />
          </span>
          <button onClick={() => increment("child")} className="text-(--primary)"><CiCirclePlus /></button>
        </div>
        <span className="text-xs font-medium text-(--primary)">
          {data?.child_free ? "Free" : `${data?.price_after_discount} SAR`}
        </span>
      </div>
    </div>
  );
}
