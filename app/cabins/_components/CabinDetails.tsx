import type { Cabin as CabinType } from "@/app/cabins/lib/types";
import Image from "next/image";
import CabinDetailsText from "./CabinDetailsText";

type CabinDetailsProp = {
  cabin: CabinType;
};

export default function CabinDetails({ cabin }: CabinDetailsProp) {
  return (
    <div className="flex max-[1024px]:flex-col min-h-120 relative border border-primary-900">
      <h2 className="text-accent-100 font-black max-sm:text-4xl text-7xl mb-5 t bg-primary-950 p-6 pb-1 absolute top-0 left-[25%] z-10">
        Cabin {cabin.name}
      </h2>
      <div className="relative w-120 max-[1024px]:w-full max-[1024px]:aspect-4/3">
        <Image
          src={cabin.image_url}
          fill
          alt={cabin.name}
          sizes="(max-width: 1024px) 100vw, 480px"
          className="object-cover"
          priority
        />
      </div>

      <CabinDetailsText description={cabin.description} />
    </div>
  );
}
