"use client";
import TicketCard from "./TicketCard";
import PaymentMethods from "./PaymentMethods";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openActivity, openTrip } from "@/store/services/bookDialogSlice";
import { RootState } from "@/store/store";
import { useCreateBookingMutation } from "@/store/services/authApi";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Payment() {
  const pathName = usePathname();
  let currentLocale = pathName.split("/")[1];
  const dispatch = useDispatch();
  const { paymentData } = useSelector((state: RootState) => state.bookDialog);
  
  const [createBooking, { isLoading, isError, error }] =
    useCreateBookingMutation();
  const [method, setMethod] = useState<string>("visa");
  
  const prevDialog = () => {
    if (paymentData?.isTrip) dispatch(openTrip({}));
    else dispatch(openActivity({}));
  };

  const handleBooking = async () => {
    const payload: any = {
      service_id: paymentData.id,
      payment_method: method,
      date: paymentData.date,
      start_time: paymentData.start_time,
      end_time: paymentData.end_time,
    };

    if (!paymentData.isTrip) {
      if (paymentData.adult_tickets)
        payload.adult_tickets = paymentData.adult_tickets;
      if (paymentData.child_tickets)
        payload.child_tickets = paymentData.child_tickets;
    }
    console.log(payload)
    await createBooking({ body: payload , lang: currentLocale });
  };

  return (
    <div className="w-full flex flex-col gap-5 justify-start">
      <Button
        className="bg-(--primary-foreground) text-(--primary) absolute top-3 left-3 rounded-lg text-sm p-2"
        onClick={prevDialog}
      >
        <FaArrowLeft />
      </Button>

      <h1 className="text-center text-base font-semibold ">Payment Method</h1>

      <TicketCard
        title={paymentData?.data?.title}
        type={paymentData?.data?.trip?.title}
        date={paymentData?.date}
        time={`${paymentData?.start_time}-${paymentData?.end_time}`}
        location={paymentData?.data?.location}
        total={paymentData?.data?.price_after_discount}
        guests={paymentData?.data?.guest_capacity}
      />
      <PaymentMethods onSelect={(val)=>setMethod(val)}/>
      <div className="flex justify-between items-center">
        <Button variant={"outline"}>
          Total {paymentData?.data?.price_after_discount} SAR
        </Button>
        <Button className="px-12" type="submit" onClick={handleBooking} disabled={!method || isLoading}>
          {isLoading ? "Booking..." : "Book"}
        </Button>
      </div>
      {isError && (
        <p className="text-red-500 text-sm mt-2 flex justify-center items-center">
          {(error as any)?.data?.message || "Something went wrong"}
        </p>
      )}
    </div>
  );
}
