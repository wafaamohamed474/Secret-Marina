"use client";
import UnderlineTitle from "@/components/atoms/UnderlineTitle";
import { ActivityYouDontMiss } from "@/types/types";
import React from "react";
import SectionLink from "@/components/atoms/SectionLink";
import ActivityCard from "@/features/home/activities/ActivityCard";

interface ActivitiesProps {
 favs?: ActivityYouDontMiss[];
}

const FavoritesSection: React.FC<ActivitiesProps> = ({ favs }) => {
  return (
    <section className="w-full">
      <div className="container-custom pb-20 pt-32">
        <UnderlineTitle textColor="text-(--primary)" bgColor="bg-(--primary)">
          Your Favorites
        </UnderlineTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mx-auto py-12">
          {favs?.map((fav) => (
            <ActivityCard data={fav} key={fav.id} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FavoritesSection;
