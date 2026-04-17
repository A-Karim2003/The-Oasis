"use client";

import Title from "@/app/_components/Title";
import type { Cabin } from "@/app/cabins/lib/types";
import type { Settings } from "@/lib/data/settings";
import ReservationCalendar from "./ReservationCalendar";
import ReservationForm from "./ReservationForm";
import { authClient } from "@/app/lib/auth-client";
import ReservationLoginPrompt from "./ReservationLoginPrompt";
import { Guest } from "@/lib/data/guests";

type CabinReservationProps = {
  cabin: Cabin;
  bookedDates: Date[];
  settings: Settings;
  currentGuest: Guest;
};

export default function CabinReservation({
  cabin,
  bookedDates,
  settings,
  currentGuest,
}: CabinReservationProps) {
  const { data: session } = authClient.useSession();

  if (!session) return <ReservationLoginPrompt />;

  return (
    <div className="mt-15 h-full">
      <Title className="text-5xl text-center mb-12">
        Reserve {cabin.name} today. Pay on arrival.
      </Title>

      <div className="grid grid-cols-2 max-[900px]:grid-cols-1 border border-primary-800">
        <ReservationCalendar cabin={cabin} />
        <ReservationForm cabin={cabin} session={session} />
      </div>
    </div>
  );
}
