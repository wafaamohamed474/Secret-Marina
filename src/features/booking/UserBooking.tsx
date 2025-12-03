"use client";
import EmptySection from "@/components/organisms/EmptySectiob";
import { useGetUserBookingQuery } from "@/store/services/authApi";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import BookingTabs from "./BookingTabs";
import { BookingCardStatus } from "@/types/types";
import BookingCard from "./BookingCard";

export default function UserBooking() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const [selectedTab, setSelectedTab] = useState("upcoming");

  const { data, isLoading, refetch } = useGetUserBookingQuery({
    lang: currentLocale,
    status: selectedTab,
  });

  const bookings: BookingCardStatus[] = data?.data || [];

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-(--primary) border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      );
    }

    if (bookings.length === 0) {
      // No bookings
      const emptyTitles: Record<string, string> = {
        upcoming: "No upcoming bookings",
        completed: "No completed bookings",
        cancelled: "No canceled bookings",
      };
      return (
        <EmptySection
          title={emptyTitles[selectedTab]}
          buttonLabel="Back home"
          className="p-0!"
          buttonHref={`/${currentLocale}/home`}
        />
      );
    }

    // Show bookings
    return (
      <div className="grid md:grid-cols-2 300 gap-5">
        {bookings.map((booking: any) => (
          <BookingCard data={booking} key={booking.id} refetch={refetch} />
        ))}
      </div>
    );
  };

  const tabs = [
    { value: "upcoming", label: "Upcoming" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Canceled" },
  ];

  return (
    <section className="w-full">
      <div className="container-custom pb-20 pt-32 flex justify-center">
        <div className="xl:w-[80%]">
          <BookingTabs
            tabs={tabs.map((tab) => ({
              ...tab,
              content: renderContent(),
            }))}
            selectedValue={selectedTab}
            onChange={(value) => setSelectedTab(value)}
          />
        </div>
      </div>
    </section>
  );
}
