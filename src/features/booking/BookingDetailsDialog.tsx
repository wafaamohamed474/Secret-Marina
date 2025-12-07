"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useGetBookingByIdQuery } from "@/store/services/authApi";
import Image from "next/image";
import Riyalsvg from "@/assets/images/RiyalBlue.svg";
import { GiCaptainHatProfile } from "react-icons/gi";
import { facilityIcons } from "@/lib/icons";
import { FaRegClock, FaToilet, FaUser } from "react-icons/fa";
import TripServiceBtn from "@/components/atoms/TripServiceBtn";
import { FaLocationDot } from "react-icons/fa6";
import { BedDouble, Sofa, X } from "lucide-react";
import MainText from "@/components/atoms/MainText";
import Rating from "@/components/molecules/Rating";
import TicketCard from "./TicketCard";
import TripFacilities from "@/components/molecules/TripFacilities";

interface BookingDetailsDialogProps {
  bookingId: string;
}

export default function BookingDetailsDialog({
  bookingId,
}: BookingDetailsDialogProps) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const { data, isLoading, error } = useGetBookingByIdQuery({
    id: bookingId,
    lang: currentLocale,
  });

  const trip = data?.data?.service || [];
  const isHaveCateigories = trip?.category == null ? false : true;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-(--primary) text-white rounded-full cursor-pointer">
          View Details
        </Button>
      </DialogTrigger>

      <DialogContent
        className="w-full max-w-md h-full sm:h-auto  md:max-w-2xl lg:max-w-3xl bg-(--background) md:px-10 z-1000   flex flex-col gap-4
      justify-center  rounded-4xl border-0"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-base font-semibold text-(--primary)">
            Booking Details
          </DialogTitle>
        </DialogHeader>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Failed to load details</p>}

        {data?.data && (
          <div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold   text-(--text-black)">
                {trip?.title}
              </p>
              <div className="flex items-center  gap-1 ">
                <span className="text-xl text-(--primary) font-semibold">
                  {trip?.price}
                </span>
                <div className="w-5 h-5 relative">
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

            <p className="text-base font-medium   text-(--paragraph-text)">
              {trip?.trip?.title}
            </p>

            <Rating rating={Number(trip?.average_rating)} />

            {isHaveCateigories && (
              <div className="flex flex-wrap gap-2">
                <TripServiceBtn
                  label={`${trip?.guest_capacity ?? ""} Guest`}
                  Icon={FaUser}
                />

                <TripServiceBtn
                  label={trip?.location ?? ""}
                  Icon={FaLocationDot}
                />

                <TripServiceBtn
                  label={
                    trip?.duration != null
                      ? `${Number(trip.duration) / 60} h`
                      : ""
                  }
                  Icon={FaRegClock}
                />

                <TripServiceBtn
                  label={`${trip?.lounges ?? ""} lounges`}
                  Icon={Sofa}
                />

                <TripServiceBtn
                  label={`${trip?.bedrooms ?? ""} Bedrooms`}
                  Icon={BedDouble}
                />

                <TripServiceBtn
                  label={`${trip?.toilets ?? ""} Toilets`}
                  Icon={FaToilet}
                />

                <TripServiceBtn
                  label={`Captain : ${trip?.captain ?? ""}`}
                  Icon={GiCaptainHatProfile}
                />
              </div>
            )}

            {isHaveCateigories && (trip?.facilities?.length || 0) > 0 && (
              <div>
                <p className="text-base font-semibold   text-(--text-black) my-2">
                  Available Facilities
                </p>

                <TripFacilities trip={trip} />
              </div>
            )}
            <div>
              {trip?.description != null && (
                <div>
                  <p className="text-base font-semibold   text-(--text-black) my-2">
                    Description
                  </p>
                  <div className="bg-(--paragraph-bg) p-2 rounded-xl my-2 text-end">
                    <MainText>{trip?.description ?? ""}</MainText>
                  </div>
                </div>
              )}
            </div>
            <TicketCard
              title={trip?.title}
              type={trip?.category?.title}
              date={data?.data?.date}
              time={`${data?.data?.start_time} to ${data?.data?.end_time}`}
              location={trip?.destination?.title}
              total={data?.data?.total_price}
              guests={trip?.guest_capacity}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
