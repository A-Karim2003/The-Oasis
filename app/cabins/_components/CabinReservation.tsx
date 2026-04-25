"use client";

import Title from "@/app/_components/Title";
import ReservationCalendar from "./ReservationCalendar";
import ReservationForm from "./ReservationForm";
import { useReservation } from "../_context/ReservationContext";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function CabinReservation() {
  const { cabin } = useReservation();
  // LOCAL state (per cabin)
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <div className="mt-15 h-full">
      <Title className="text-5xl text-center mb-12">
        Reserve {cabin.name} today. Pay on arrival.
      </Title>

      <div className="grid grid-cols-2 max-[900px]:grid-cols-1 border border-primary-800">
        <ReservationCalendar range={range} setRange={setRange} />
        <ReservationForm range={range} cabin={cabin} />
      </div>
    </div>
  );
}
