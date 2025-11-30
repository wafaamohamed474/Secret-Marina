"use client"
import Activities from '@/features/home/activities/Activites'
import { HeroSlider } from '@/features/home/hero/HeroSlider'
import Recommended from '@/features/home/recommended/Recommended'
import SpecialOffers from '@/features/home/specialOffers/SpecialOffers'
import TopCategory from '@/features/home/topCategorey/TopCategory'
import PopularDestinations from '@/features/landing/popular/PopularDestinations'
import TripsTypes from '@/features/landing/trips-types/TripsTypes'
import { useGetAllHomeDataQuery } from '@/store/services/authApi'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HomeTemplate() {
  const pathname = usePathname()
  const currentLocale = pathname.split("/")[1] || "en";
  const { data, isLoading, error } = useGetAllHomeDataQuery({ lang: currentLocale });

   
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading home data</p>;
  return (
    <>
      {/* <HeroHome/> */}
      <HeroSlider banners={data?.data?.banners} />
      <TripsTypes trips={data?.data?.trip_types} />
      <TopCategory categories={data?.data?.categories} />
      <Recommended services={data?.data?.recommended_services} />
      <PopularDestinations destinations={data?.data?.destinations} />
      <SpecialOffers offers={data?.data?.top_discount_services} />
      <Activities activities={data?.data?.activities_you_dont_miss} />
    </>
  )
}
