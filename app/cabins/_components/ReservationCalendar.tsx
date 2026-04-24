"use client";

import { Calendar } from "@/components/ui/calendar";
import { enGB } from "react-day-picker/locale";
import { useReservation } from "../_context/ReservationContext";
import { Button } from "@/components/ui/button";
import { differenceInDays } from "date-fns";
import { useRange } from "../_context/RangeContext";

export default function ReservationCalendar() {
  const { cabin, settings, bookedDates } = useReservation();
  const { range, setRange, resetRange } = useRange();
  const { min_booking_length, max_booking_length } = settings;

  const parsedBookedDates = bookedDates.map((date) => new Date(date));

  // number of nights chosen on the calender
  const numOfNights =
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;

  const totalPrice = numOfNights * (cabin.price - (cabin?.discount ?? 0));

  function formatCurrency(price: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }

  return (
    <div className="flex flex-col">
      <Calendar
        locale={enGB}
        mode="range"
        required={false}
        disabled={[{ before: new Date() }, ...parsedBookedDates]}
        min={min_booking_length ?? 2}
        max={max_booking_length || 21}
        endMonth={new Date(new Date().getFullYear() + 2, new Date().getMonth())}
        numberOfMonths={2}
        selected={range}
        onSelect={setRange}
        className="bg-primary-950 text-white p-4 w-full flex-1"
      />
      <div className="bg-accent-500 text-primary-900 p-4 flex items-center h-20 justify-between px-8">
        <div className="h-full flex items-center">
          <span className="text-3xl font-bold">
            {formatCurrency(cabin.price - (cabin?.discount || 0))}
          </span>
          <span className="text-sm ml-1">/night</span>
        </div>
        {(range?.from || range?.to) && (
          <div className="flex items-center justify-between gap-4">
            <p className="p-4">
              <b>x {numOfNights} nights</b>
            </p>
            <p className="p-4">
              <b>Total: {formatCurrency(totalPrice)}</b>
            </p>
          </div>
        )}

        {(range?.from || range?.to) && (
          <Button
            onClick={resetRange}
            variant="outline"
            className="text-black bg-transparent border-black hover:bg-black hover:text-white"
          >
            clear
          </Button>
        )}
      </div>
    </div>
  );
}
