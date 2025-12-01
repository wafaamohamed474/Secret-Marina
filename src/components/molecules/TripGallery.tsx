"use client";
import { useState } from "react";

interface ImageItem {
  id: number | string;
  path: string;
}

interface TripGalleryProps {
  images: ImageItem[];
}

export default function TripGallery({ images }: TripGalleryProps) {
  const firstImage = images?.[0]?.path;
  const [heroImage, setHeroImage] = useState(firstImage);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full">
      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3   justify-center lg:justify-start mt-4 overflow-x-auto">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setHeroImage(img.path)}
            className={`w-full sm:w-[150px] h-[100px] rounded-2xl overflow-hidden border-2 transition
              ${heroImage === img.path ? "border-gray-400" : "border-transparent"}
            `}
          >
            <img
              src={img.path}
              alt={`Thumbnail ${img.id}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
