"use client";

import Image from "next/image";
import { format, formatDistanceToNow, isPast } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export type Reservation = {
  id: number;
  cabinName: string;
  cabinImage: string;
  nights: number;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  guests: number;
  bookedAt: Date;
};

export default function ReservationCard({
  reservation,
}: {
  reservation: Reservation;
}) {
  const isPastReservation = isPast(new Date(reservation.endDate));

  return (
    <div className="flex border border-primary-800">
      <div className="relative w-32 aspect-square shrink-0">
        <Image
          src={reservation.cabinImage}
          fill
          alt={reservation.cabinName}
          className="object-cover"
        />
      </div>

      <div className="flex-1 px-6 py-4 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-primary-100 font-semibold text-lg">
              {reservation.nights} nights in {reservation.cabinName}
            </h3>
            <p className="text-primary-300 text-sm mt-1">
              {format(reservation.startDate, "EEE, MMM dd yyyy")} (
              {formatDistanceToNow(reservation.startDate, {
                addSuffix: true,
              })}
              ) &mdash; {format(reservation.endDate, "EEE, MMM dd yyyy")}
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
              ${reservation.totalPrice}
            </span>
            <span className="text-primary-500">&bull;</span>
            <span className="text-primary-300">
              {reservation.guests} guest{reservation.guests > 1 ? "s" : ""}
            </span>
            <span className="text-primary-500">&bull;</span>
            <span className="text-primary-500 text-xs">
              Booked{" "}
              {format(reservation.bookedAt, "EEE, MMM dd yyyy, hh:mm aa")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col border-l border-primary-800 divide-y divide-primary-800">
        <Link
          href={`/account/reservations/edit/${reservation.id}`}
          className="flex items-center gap-2 px-6 flex-1 text-primary-300 hover:bg-primary-800 hover:text-primary-100 transition-colors text-sm font-medium"
        >
          <Pencil className="w-4 h-4" />
          Edit
        </Link>
        <button className="flex items-center gap-2 px-6 flex-1 text-primary-300 hover:bg-primary-800 hover:text-primary-100 transition-colors text-sm font-medium">
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
}
