import Image from "next/image";

import Riyalsvg from "@/assets/images/RiyalGreen.png";

import { BookingCardStatus } from "@/types/types";
import { IoMdCalendar } from "react-icons/io";
import { Button } from "@/components/ui/button";
import CancelBooking from "./CancelBooking";
import BookingDetailsDialog from "./BookingDetailsDialog";

type BookingCardProps = {
  data: BookingCardStatus;
  refetch?: any;
};

export default function BookingCard({ data, refetch }: BookingCardProps) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }
  console.log("all data", data);
  return (
    <div className="rounded-2xl shadow-[0_0_3px_0_var(--primary)] bg-(--background) relative overflow-hidden ">
      <div className=" bg-(--primary) flex justify-between items-center p-3">
        <div className="flex bg-(--background) p-3 rounded-2xl justify-center items-center gap-2">
          <IoMdCalendar className="text-3xl text-(--active-link) " />
          <div className="flex flex-col">
            <span className="text-xs font-semibold">
              {data?.date ? formatDate(data.date) : ""}
            </span>
            <span className="text-[10px] font-medium text-(--paragraph-text)">{`${data?.start_time} ${data?.end_time}`}</span>
          </div>
        </div>
        <div className="px-5 py-3 rounded-full bg-(--active-link) text-sm  font-bold text-(--background)">
          <span>
            {data?.status
              ? data.status.charAt(0).toUpperCase() + data.status.slice(1)
              : ""}
          </span>
        </div>
      </div>

      <div className="flex items-center md:items-start px-3 pt-5 gap-2">
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image
            src={data?.service?.images[0]?.path}
            alt={data?.service?.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-start flex-col flex-1 md:pt-5 ">
          <div className="flex justify-between items-center w-full">
            <p className="text-sm font-semibold   text-(--text-black)">
              {data?.service?.title}
            </p>
            <div className="flex items-center gap-1">
              <span className="text-base text-(--price) font-semibold">
                {data?.service?.price_after_discount}
              </span>
              <div className="w-4 h-4 relative">
                <Image
                  src={Riyalsvg}
                  alt="Riyal"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <p className="text-xs font-medium   text-(--paragraph-text) pt-1">
            {data?.service?.trip?.title}
          </p>
          <p className="text-[10px] font-normal  text-(--black-text) py-2 md:py-3 text-left">
            {data?.service?.description}
          </p>
        </div>
      </div>
      <div className="p-3 flex gap-2 justify-end">
        <BookingDetailsDialog bookingId={String(data?.id)} />
        <CancelBooking data={data} refetch={refetch} />
      </div>
    </div>
  );
}
