"use client";

import { Bookings } from "@/lib/data/bookings";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";

export default function Reservations({
  reservations,
}: {
  reservations: Bookings;
}) {
  const [optimisticReservations, deleteOptimisticReservation] = useOptimistic<
    Bookings,
    number
  >(reservations, (currReservations, bookingId) =>
    currReservations.filter((reservation) => reservation.id !== bookingId),
  );

  return (
    <div className="flex flex-col gap-4">
      {optimisticReservations.map((reservation) => (
        <ReservationCard
          key={reservation.id}
          reservation={reservation}
          onOptimisticDelete={deleteOptimisticReservation}
        />
      ))}
    </div>
  );
}
