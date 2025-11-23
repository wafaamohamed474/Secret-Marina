"use client";
import UnderlineTitle from "@/components/atoms/UnderlineTitle";

import ActivityImg from "@/assets/images/ship.jpg";

import ActivityCard from "./ActivityCard";
import MainTitle from "@/components/atoms/MainTitle";
import MainText from "@/components/atoms/MainText";

export default function Activities() {
  return (
    <section className="w-full py-20  bg-(--primary-foreground)">
      <div className="container-custom text-center">
        <MainTitle>Activities you can’t miss</MainTitle>
        <MainText>
          Don’t miss out on the top activities that define Secret Marina
        </MainText>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mx-auto py-12">
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
          <ActivityCard title="Jeddah Islands" img={ActivityImg} />
        </div>
      </div>
    </section>
  );
}
