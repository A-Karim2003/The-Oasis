import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import type { Cabin as CabinType } from "../lib/types";

type CabinProps = {
  cabin: CabinType;
};

export default function Cabin({ cabin }: CabinProps) {
  const discountedPrice = cabin.price - cabin.discount;

  return (
    <div className="flex border border-primary-800">
      <div className="relative h-48 w-48 shrink-0">
        <Image
          src={cabin.image_url}
          alt={cabin.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex-1 p-4 border-b border-primary-800">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            {cabin.name}
          </h3>
          <p className="flex items-center gap-2 text-primary-200">
            <Users className="w-5 h-5" />
            For up to
            <span className="text-lg text-primary-200">
              <b>{cabin.capacity}</b>
            </span>
            guests
          </p>
        </div>

        <div className="flex items-center justify-between h-16 border-primary-800 border ">
          <div className="flex flex-1 h-full items-center gap-2 border-r px-2">
            <span className="text-3xl font-semibold text-primary-100">
              ${discountedPrice}
            </span>
            {cabin.discount > 0 && (
              <span className="text-primary-400 line-through text-sm">
                ${cabin.price}
              </span>
            )}
            <span className="text-primary-400 text-sm">/ night</span>
          </div>

          <Link
            href={`/cabins/${cabin.id}`}
            className="border-primary-800 pl-4 text-primary-200 hover:text-accent-400 transition-colors flex-1"
          >
            Details & reservation →
          </Link>
        </div>
      </div>
    </div>
  );
}
