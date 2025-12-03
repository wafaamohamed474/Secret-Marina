"use client";
import UnderlineTitle from "@/components/atoms/UnderlineTitle";
import { ServiceItem, TripTypesDetails } from "@/types/types";
import React from "react";
import TripTypeDetailsCard from "./TripTypeDetailsCard";
import EmptySection from "@/components/organisms/EmptySectiob";
import { usePathname } from "next/navigation";
import CustomTabs from "@/components/molecules/CustomTabs";

interface TripTypesDetailsProps {
  tripTypes?: TripTypesDetails;
}

const TripTypeDetails: React.FC<TripTypesDetailsProps> = ({ tripTypes }) => {
  if (!tripTypes?.data) return null;
  const pathname = usePathname();
  let currentLocale = pathname.split("/")[1] || "en";
  const categories = tripTypes.data.categories;
  const services_without_category = tripTypes.data.services_without_category;

  interface TabItem {
    value: string;
    label: string;
    content: React.ReactNode;
  }
  const tabs: TabItem[] = [
    
  ];

  if (categories?.length) {
    categories.forEach((cat) => {
      if (cat.services?.length) {
        tabs.push({
          value: `cat-${cat.id}`,
          label: cat.title,
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1200px] mx-auto">
              {cat.services?.map((service: ServiceItem) => (
                <TripTypeDetailsCard key={service.id} data={service} />
              ))}
            </div>
          ),
        });
      }
    });
  }

  if (services_without_category?.length) {
    tabs.push({
      value: "Other Services",
      label: "Other Services",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1200px] mx-auto">
          {services_without_category.map((service) => (
            <TripTypeDetailsCard key={service.id} data={service} />
          ))}
        </div>
      ),
    });
  }
  let isEmpty =
    categories.length == 0 && services_without_category.length == 0
      ? true
      : false;
  return (
    <section className="w-full">
      {isEmpty ? (
        <EmptySection
          title="There no Categoris for this trip type"
          buttonLabel="Back home"
          buttonHref={`/${currentLocale}/home`}
        />
      ) : (
        <div className="container-custom pb-20 pt-32">
          <UnderlineTitle textColor="text-(--primary)" bgColor="bg-(--primary)">
            {tripTypes.data.title}
          </UnderlineTitle>
          <CustomTabs tabs={tabs} />
        </div>
      )}
    </section>
  );
};

export default TripTypeDetails;
