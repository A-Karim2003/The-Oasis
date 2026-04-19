"use client";

import Image from "next/image";
import {
  format,
  formatDistanceToNow,
  isPast,
  differenceInDays,
} from "date-fns";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { Booking } from "@/lib/data/bookings";
import { Button } from "@/components/ui/button";

export default function ReservationCard({
  reservation,
}: {
  reservation: Booking;
}) {
  const isPastReservation = isPast(new Date(reservation.start_date));
  const numOfNights = differenceInDays(
    new Date(reservation.end_date),
    new Date(reservation.start_date),
  );
  const totalPrice =
    (reservation.cabin_price ?? 0) * numOfNights +
    (reservation.extras_price ?? 0);

  return (
    <div className="flex border border-primary-800">
      <div className="relative w-32 aspect-square shrink-0">
        <Image
          src={reservation.cabins?.image_url || ""}
          fill
          alt={reservation.cabins?.name || "Cabin"}
          className="object-cover"
        />
      </div>

      <div className="flex-1 px-6 py-4 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-primary-100 font-semibold text-lg">
              {numOfNights} nights in {reservation.cabins?.name}
            </h3>
            <p className="text-primary-300 text-sm mt-1">
              {format(reservation.start_date, "EEE, MMM dd yyyy")} (
              {formatDistanceToNow(reservation.start_date, {
                addSuffix: true,
              })}
              ) &mdash; {format(reservation.end_date, "EEE, MMM dd yyyy")}
            </p>
          </div>

          <span
            className={`text-xs font-bold px-3 py-1 uppercase tracking-wider ${
              isPastReservation
                ? "bg-yellow-800 text-yellow-200"
                : "bg-green-800 text-green-200"
            }`}
          >
            {isPastReservation ? "Past" : "Upcoming"}
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-accent-400 font-semibold text-base">
              ${totalPrice}
            </span>
            <span className="text-primary-500">&bull;</span>
            <span className="text-primary-300">
              {reservation.num_of_guests} guest
              {reservation.num_of_guests > 1 ? "s" : ""}
            </span>
            <span className="text-primary-500">&bull;</span>
            <span className="text-primary-500 text-xs">
              Booked{" "}
              {format(reservation.created_at, "EEE, MMM dd yyyy, hh:mm aa")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col border-l border-primary-800 divide-y divide-primary-800">
        {!isPastReservation && (
          <>
            <Button
              variant="ghost"
              asChild
              className="flex-1 gap-2 px-6 text-primary-300 hover:bg-primary-800 hover:text-primary-100 transition-colors text-sm font-medium h-full w-full rounded-none"
            >
              <Link href={`/account/reservations/edit/${reservation.id}`}>
                <Pencil className="w-4 h-4" />
                Edit
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center gap-2 px-6 flex-1 text-primary-300 hover:bg-primary-800 hover:text-primary-100 transition-colors text-sm font-medium rounded-none"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
