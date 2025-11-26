"use client";
import FavoritesSection from "@/features/favorites/Favorites";
import { useGetFavoritesQuery } from "@/store/services/authApi";
import EmptySection from "../organisms/EmptySectiob";
import { usePathname } from "next/navigation";

export default function FavoritesTemplate() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const { data, isLoading, error } = useGetFavoritesQuery({
    lang: currentLocale,
  });

  console.log("data : ", data?.data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading favorites data</p>;
  const isEmpty = data?.data?.length == 0 ? true : false;
  return (
    <>
      {isEmpty ? (
        <EmptySection
          title="No favorites yet.Start exploring and add items to your favorites list."
          buttonLabel="Add Now"
        />
      ) : (
        <FavoritesSection favs={data?.data} />
      )}
    </>
  );
}
