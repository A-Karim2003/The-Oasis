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
import { deleteReservation } from "../lib/actions";
import { toast } from "react-toastify";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type ReservationCardProp = {
  reservation: Booking;
  onOptimisticDelete: (bookingId: number) => void;
};

export default function ReservationCard({
  reservation,
  onOptimisticDelete,
}: ReservationCardProp) {
  const isPastReservation = isPast(new Date(reservation.start_date));
  const numOfNights = differenceInDays(
    new Date(reservation.end_date),
    new Date(reservation.start_date),
  );
  const totalPrice =
    (reservation.cabin_price ?? 0) * numOfNights +
    (reservation.extras_price ?? 0);

  async function handleDelete(reservationId: number) {
    onOptimisticDelete(reservationId);
    try {
      await deleteReservation(reservationId);
    } catch {
      toast.error("Failed to delete reservation");
    }
  }

  return (
    <div className="flex flex-col min-[1000px]:flex-row border border-primary-800">
      <div className="relative w-full h-48 min-[1000px]:w-32 min-[1000px]:h-auto min-[1000px]:aspect-square shrink-0">
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

      <div className="flex min-[1000px]:flex-col border-t min-[1000px]:border-t-0 min-[1000px]:border-l w-full min-[1000px]:w-32 border-primary-800">
        {!isPastReservation && (
          <>
            <Button
              variant="ghost"
              asChild
              className="flex-1 gap-2 px-6 text-primary-300 hover:bg-primary-800 hover:text-primary-100 transition-colors text-sm font-medium h-full w-full rounded-none min-h-12"
            >
              <Link href={`/account/reservations/edit/${reservation.id}`}>
                <Pencil className="w-4 h-4" />
                Edit
              </Link>
            </Button>
            <hr className="border-accent-600" />
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-6 flex-1 text-primary-300 hover:bg-primary-800 hover:text-primary-100 transition-colors text-sm font-medium rounded-none h-full w-full min-h-12"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-primary-900">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-accent-100 text-xl">
                    Delete reservation?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-md">
                    This will permanently delete your reservation in{" "}
                    {reservation.cabins?.name}. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="bg-primary-600">
                  <AlertDialogCancel className="bg-primary-800 border-none text-accent-100 cursor-pointer">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-600 text-accent-100 cursor-pointer"
                    onClick={() => handleDelete(reservation.id)}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )}
      </div>
    </div>
  );
}
