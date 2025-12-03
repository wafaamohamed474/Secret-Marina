"use client";

import { Button } from "@/components/ui/button";
import { useCancelUserBookingMutation } from "@/store/services/authApi";
import { usePathname } from "next/navigation";

export default function CancelBooking({ data, refetch }: any) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const [cancelBooking, { isLoading: isCanceling }] =
    useCancelUserBookingMutation();

  const handleCancel = async () => {
    try {
      await cancelBooking({
        lang: currentLocale,
        id: data?.id,
      }).unwrap();

      console.log("Booking canceled successfully");

      refetch?.(); // 👈 refresh parent data list
    } catch (err: any) {
      console.error(err?.data?.message || "Failed to cancel booking");
    }
  };

  return (
    <>
      {data?.status === "pending" && (
        <Button
          className="bg-(--offer) rounded-full cursor-pointer"
          onClick={handleCancel}
          disabled={isCanceling}
        >
          {isCanceling ? "Cancelling..." : "Cancel Booking"}
        </Button>
      )}
    </>
  );
}
