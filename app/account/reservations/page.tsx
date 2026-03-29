import Title from "@/app/_components/Title";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reservations",
};

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
    </div>
  );
}
