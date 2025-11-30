"use client";
import CategoriesSection from "@/features/categories/Categories";
import { useGetAllHomeDataQuery } from "@/store/services/authApi";
import React from "react";
import EmptySection from "../organisms/EmptySectiob";
import { usePathname } from "next/navigation";

export default function CategoriesTemplate() {
   const pathname = usePathname()
    const currentLocale = pathname.split("/")[1] || "en";
  const { data, isLoading, error } = useGetAllHomeDataQuery({ lang: currentLocale });

 
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading Categories data</p>;

  return (
    <>
      <CategoriesSection categories={data?.data?.categories} />
    </>
  );
}
