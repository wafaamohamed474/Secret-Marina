"use client";
import { useGetAllHomeDataQuery } from "@/store/services/authApi";
import EmptySection from "../organisms/EmptySectiob";
import { usePathname } from "next/navigation";
import ActivitiesSection from "@/features/activites/Activites";
import Activities from "@/features/home/activities/Activites";

export default function ActivitiesTemplate() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const { data, isLoading, error } = useGetAllHomeDataQuery({
    lang: currentLocale,
  });

 
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading activities data</p>;
  const isEmpty =
    data?.data?.activities_you_dont_miss?.length == 0 ? true : false;

  return (
    <>
      {isEmpty ? (
        <EmptySection  title="No activities yet" />
      ) : (
        <ActivitiesSection activities={data?.data?.activities_you_dont_miss} />
      )}
    </>
  );
}
