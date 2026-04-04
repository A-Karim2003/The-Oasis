"use client";
import { useState } from "react";

import { Users, MapPin, EyeOff } from "lucide-react";

export default function CabinDetailsText({
  description,
}: {
  description: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortText = description.slice(0, 250);

  return (
    <div className="flex-[1.5] text-lg text-primary-300 p-10 flex flex-col gap-8 min-w-120 mt-15">
      <p>
        {isExpanded ? description : shortText + ". . ."}
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
  );
}
