"use client"
import { useParams } from 'next/navigation';
import React from 'react'

export default function TripTypesDetails() {
    const { tripTypeId } = useParams();
    console.log(tripTypeId)
  return (
    <div>
      
    </div>
  )
}
