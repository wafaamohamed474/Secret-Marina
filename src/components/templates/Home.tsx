 
import Activities from '@/features/home/activities/Activites'
import HeroHome from '@/features/home/hero/Hero'
import { HeroSlider } from '@/features/home/hero/HeroSlider'
import Recommended from '@/features/home/recommended/Recommended'
import SpecialOffers from '@/features/home/specialOffers/SpecialOffers'
import TopCategory from '@/features/home/topCategorey/TopCategory'
import PopularDestinations from '@/features/landing/popular/PopularDestinations'
import TripsTypes from '@/features/landing/trips-types/TripsTypes'
import React from 'react'

export default function HomeTemplate() {
  return (
    <>
      {/* <HeroHome/> */}
      <HeroSlider/>
      <TripsTypes/>
      <TopCategory/>
      <Recommended/>
      <PopularDestinations/>
      <SpecialOffers/>
      <Activities/>
    </>
  )
}
