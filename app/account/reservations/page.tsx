import Title from "@/app/_components/Title";
import { Metadata } from "next";
import Link from "next/link";
import { getBookings } from "@/lib/data/bookings";
import Reservations from "../_components/Reservations";

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

      <Reservations reservations={reservations} />
    </div>
  );
}
