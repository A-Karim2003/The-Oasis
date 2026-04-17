"use client";

import Title from "@/app/_components/Title";
import ReservationCalendar from "./ReservationCalendar";
import ReservationForm from "./ReservationForm";
import { useReservation } from "../_context/ReservationContext";

export default function CabinReservation() {
  const { cabin } = useReservation();

  return (
    <div className="mt-15 h-full">
      <Title className="text-5xl text-center mb-12">
        Reserve {cabin.name} today. Pay on arrival.
      </Title>

      <div className="grid grid-cols-2 max-[900px]:grid-cols-1 border border-primary-800">
        <ReservationCalendar />
        <ReservationForm />
      </div>
    </div>
  );
}
