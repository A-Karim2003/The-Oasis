import Title from "@/app/_components/Title";
import { Metadata } from "next";
import Link from "next/link";
import ReservationCard from "../_components/ReservationCard";
import { getBookings } from "@/lib/data/bookings";

export const metadata: Metadata = {
  title: "Reservations",
};

export default async function ReservationsPage() {
  const bookings = await getBookings();
  const reservations = bookings.filter(
    (booking) => booking.status === "unconfirmed",
  );

  return (
    <div>
      <Title>Your reservations</Title>
      {!reservations.length && (
        <p className="text-lg text-primary-200">
          You have no reservations yet. Check out our{" "}
          <Link href="/cabins" className="underline text-accent-500">
            luxury cabins →
          </Link>
        </p>
      )}

      <div className="flex flex-col gap-4">
        {reservations.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </div>
  );
}
