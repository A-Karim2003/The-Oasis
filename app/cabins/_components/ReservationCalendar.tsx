"use client";

import { Calendar } from "@/components/ui/calendar";
import type { Cabin as CabinType } from "@/app/cabins/lib/types";
import { enGB } from "react-day-picker/locale";
import { useReservation } from "../_context/ReservationContext";

const MIN_BOOKING_LENGTH = 1;
const MAX_BOOKING_LENGTH = 23;

export default function ReservationCalendar({}) {
  const { range, setRange, cabin } = useReservation();

  return (
    <div className="flex flex-col">
      <Calendar
        locale={enGB}
        mode="range"
        required={false}
        disabled={{ before: new Date() }}
        min={MIN_BOOKING_LENGTH}
        max={MAX_BOOKING_LENGTH}
        endMonth={new Date(new Date().getFullYear() + 2, new Date().getMonth())}
        numberOfMonths={2}
        selected={range}
        onSelect={setRange}
        className="bg-primary-950 text-white p-4 w-full flex-1"
      />
      <div className="bg-accent-500 text-primary-900 p-4 flex items-center h-20">
        <span className="text-3xl font-bold">
          ${cabin.price - (cabin?.discount || 0)}
        </span>
        <span className="text-sm ml-1">/night</span>
      </div>
    </div>
  );
}
