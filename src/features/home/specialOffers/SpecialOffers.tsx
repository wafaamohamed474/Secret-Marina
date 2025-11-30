"use client";
import UnderlineTitle from "@/components/atoms/UnderlineTitle";
import ActivityImg from "@/assets/images/ship.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SpecialOffersCard from "./SpecialOffersCard";
import { TopDiscountService } from "@/types/types";
import SectionLink from "@/components/atoms/SectionLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SpecialOffersProps {
  offers?: TopDiscountService[];
}

const SpecialOffers: React.FC<SpecialOffersProps> = ({ offers }) => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  return (
    <section className="w-full py-20 bg-(--background)">
      <div className="container-custom text-center md:text-left">
        <UnderlineTitle textColor="text-(--offer)" bgColor="bg-(--offer)">
          Special Offers
        </UnderlineTitle>

        <Carousel className="w-full py-12">
          <CarouselContent>
            {offers?.map((offer, index) => (
              <CarouselItem
                key={offer.id}
                className="md:basis-1/1 lg:basis-1/2"
              >
                <div className="p-1">
                  <Link href={`/${currentLocale}/home/trip/${offer?.id}`}>
                    <SpecialOffersCard data={offer} />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <SectionLink />
      </div>
    </section>
  );
};
export default SpecialOffers;
