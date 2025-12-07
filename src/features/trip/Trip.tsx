import { Button } from "@/components/ui/button";
import { ServiceItem } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import Riyalsvg from "@/assets/images/RiyalBlue.svg";
import { GiCaptainHatProfile } from "react-icons/gi";
import { IoBed, IoBedOutline, IoBedSharp } from "react-icons/io5";
import { facilityIcons } from "@/lib/icons";
import {
  FaArrowLeft,
  FaClock,
  FaHeart,
  FaRegClock,
  FaRegHeart,
  FaToilet,
  FaUser,
} from "react-icons/fa";
import TripServiceBtn from "@/components/atoms/TripServiceBtn";
import { FaLocationDot, FaToiletPortable } from "react-icons/fa6";
import { BedDouble, BedIcon, Sofa, Toilet } from "lucide-react";
import MainText from "@/components/atoms/MainText";
import FormBtn from "@/components/atoms/FormBtn";
import Rating from "@/components/molecules/Rating";
import TripGallery from "@/components/molecules/TripGallery";
import TripLocation from "@/components/molecules/TripLocation";
import TripMap from "@/components/molecules/TripLocation";
import TripFacilities from "@/components/molecules/TripFacilities";
import { BookingButton } from "../booking/BookingButton";

interface SingleTripDetailsProps {
  trip?: ServiceItem;
}

const SingleTripDetailes = ({ trip }: SingleTripDetailsProps) => {
  const isHaveCateigories = trip?.category == null ? false : true;
  return (
    <section className="w-full">
      <div className="container-custom pb-20 pt-32">
        <div className="flex justify-between items-center mb-5">
          <Link
            className="bg-(--primary-foreground) text-(--primary) p-2 rounded-lg"
            href={"/en/home"}
          >
            <FaArrowLeft />
          </Link>
          <button
            className="
                      top-2 right-2 
                      bg-(--background) backdrop-blur 
                      w-8 h-8 rounded-full flex items-center justify-center
                      shadow-md
                    "
          >
            {trip?.is_favorited ? (
              <FaHeart className="text-(--offer) text-sm" />
            ) : (
              <FaRegHeart className="text-(--offer) text-sm" />
            )}
          </button>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <TripGallery images={trip?.images || []} />

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

            <p className="text-base font-medium   text-(--paragraph-text) pt-1">
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
                <p className="text-base font-semibold   text-(--text-black) my-4">
                  Available Facilities
                </p>
                <TripFacilities trip={trip} />
              </div>
            )}

            <div>
              {trip?.description != null && (
                <div>
                  <p className="text-base font-semibold   text-(--text-black) my-4">
                    Description
                  </p>
                  <div className="bg-(--paragraph-bg) p-2 rounded-xl my-4 text-end">
                    <MainText>{trip?.description ?? ""}</MainText>
                  </div>
                </div>
              )}
            </div>
            {!isHaveCateigories && (
              <div>
                {trip?.details != null && (
                  <div>
                    <p className="text-base font-semibold   text-(--text-black) my-4">
                      Details
                    </p>
                    <div className="bg-(--paragraph-bg) p-2 rounded-xl my-4 text-end">
                      <MainText>{trip?.details ?? ""}</MainText>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div>
              {trip?.location != null && (
                <div>
                  <p className="text-base font-semibold   text-(--text-black) my-4">
                    Location
                  </p>
                  <TripMap
                    latitude={trip?.latitude ?? 0}
                    longitude={trip?.longitude ?? 0}
                    height="250px"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end pt-5">
              {trip && <BookingButton data={trip} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleTripDetailes;
