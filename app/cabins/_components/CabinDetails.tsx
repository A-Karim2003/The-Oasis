"use client";

import type { Cabin as CabinType } from "@/app/cabins/lib/types";
import { Users, MapPin, EyeOff } from "lucide-react";

import Image from "next/image";
import { useState } from "react";

type CabinDetailsProp = {
  cabin: CabinType;
};

export default function CabinDetails({ cabin }: CabinDetailsProp) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortText = cabin.description.slice(0, 250);

  return (
    <div className="flex max-[1024px]:flex-col min-h-120 relative border border-primary-900">
      <h2 className="text-accent-100 font-black max-sm:text-4xl text-7xl mb-5 t bg-primary-950 p-6 pb-1 absolute top-0 left-[25%] z-10">
        Cabin 001
      </h2>
      <div className="relative w-120 max-[1024px]:w-full max-[1024px]:aspect-4/3">
        <Image
          src={cabin.image_url}
          fill
          alt={cabin.name}
          sizes="(max-width: 1024px) 100vw, 480px"
          className="object-cover"
        />
      </div>
      <div className="flex-[1.5] text-lg text-primary-300 p-10 flex flex-col gap-8 min-w-120 mt-15">
        <p>
          {isExpanded ? cabin.description : shortText + ". . ."}
          <span
            className="underline ml-4 text-primary-600 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "Show more"}
          </span>
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-4">
            <Users className="w-5 h-5" />
            For up to <strong>2</strong> guests
          </li>
          <li className="flex items-center gap-4">
            <MapPin className="w-5 h-5" />
            Located in the heart of the <strong>Dolomites</strong> (Italy)
          </li>
          <li className="flex items-center gap-4">
            <EyeOff className="w-5 h-5" />
            Privacy <span>100%</span> guaranteed
          </li>
        </ul>
      </div>
    </div>
  );
}
