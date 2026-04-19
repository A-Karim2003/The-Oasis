import Title from "@/app/_components/Title";
import { Metadata } from "next";
import Link from "next/link";
import ReservationCard from "../_components/ReservationCard";

export const metadata: Metadata = {
  title: "Reservations",
};

const fakeReservations = [
  {
    id: 1,
    cabinName: "Forest Hideaway",
    cabinImage: "https://placehold.co/128x128?text=Cabin+1",
    nights: 3,
    startDate: new Date("2026-05-10"),
    endDate: new Date("2026-05-13"),
    totalPrice: 450,
    guests: 2,
    bookedAt: new Date("2026-04-01T10:30:00"),
  },
  {
    id: 2,
    cabinName: "Mountain Retreat",
    cabinImage: "https://placehold.co/128x128?text=Cabin+2",
    nights: 7,
    startDate: new Date("2026-06-01"),
    endDate: new Date("2026-06-08"),
    totalPrice: 1260,
    guests: 4,
    bookedAt: new Date("2026-03-15T14:00:00"),
  },
  {
    id: 3,
    cabinName: "Lakeside Cabin",
    cabinImage: "https://placehold.co/128x128?text=Cabin+3",
    nights: 2,
    startDate: new Date("2026-03-01"),
    endDate: new Date("2026-03-03"),
    totalPrice: 280,
    guests: 1,
    bookedAt: new Date("2026-02-10T09:15:00"),
  },
  {
    id: 4,
    cabinName: "Desert Oasis",
    cabinImage: "https://placehold.co/128x128?text=Cabin+4",
    nights: 5,
    startDate: new Date("2025-12-20"),
    endDate: new Date("2025-12-25"),
    totalPrice: 875,
    guests: 3,
    bookedAt: new Date("2025-11-30T16:45:00"),
  },
];

export default function ReservationsPage() {
  return (
    <div>
      <Title>Your reservations</Title>

      <p className="text-lg text-primary-200">
        You have no reservations yet. Check out our{" "}
        <Link href="/cabins" className="underline text-accent-500">
          luxury cabins →
        </Link>
      </p>

      <div className="flex flex-col gap-4">
        {fakeReservations.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </div>
  );
}
