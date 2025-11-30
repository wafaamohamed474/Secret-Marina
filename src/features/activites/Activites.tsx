"use client";
import UnderlineTitle from "@/components/atoms/UnderlineTitle";
import { ActivityYouDontMiss } from "@/types/types";
import React from "react";

import ActivityCard from "@/features/home/activities/ActivityCard";

interface ActivitiesProps {
  activities?: ActivityYouDontMiss[];
}

const ActivitiesSection: React.FC<ActivitiesProps> = ({ activities }) => {
  return (
    <section className="w-full">
      <div className="container-custom pb-20 pt-32">
        <UnderlineTitle textColor="text-(--primary)" bgColor="bg-(--primary)">
          Activities you can’t miss
        </UnderlineTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mx-auto py-12">
          {activities?.map((activity) => (
            <ActivityCard data={activity} key={activity.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
