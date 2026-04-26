"use client";

import { Calendar } from "@/components/ui/calendar";
import { enGB } from "react-day-picker/locale";
import { Button } from "@/components/ui/button";
import { differenceInDays } from "date-fns";
import { useRange } from "../_context/RangeContext";
import { useReservation } from "../_context/ReservationContext";
import { DateRange } from "react-day-picker";

export type ReservationCalendarProps = {
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
};

export default function ReservationCalendar({
  range,
  setRange,
}: ReservationCalendarProps) {
  const { cabin, settings, bookedDates } = useReservation();

  // GLOBAL setter (for reservation reminder)
  const { setGlobalRange, setSelectedCabin } = useRange();

  const { min_booking_length, max_booking_length } = settings;

  const parsedBookedDates = bookedDates.map((date) => new Date(date));

  const numOfNights =
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;

  const totalPrice = numOfNights * (cabin.price - (cabin?.discount ?? 0));

  function formatCurrency(price: number) {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price);
  }

  function handleSelect(newRange: DateRange | undefined) {
    setRange(newRange); // local (this cabin only)
    setGlobalRange(newRange); // global (for reminder)

    setSelectedCabin(newRange?.from && newRange?.to ? cabin : undefined);
  }

  return (
    <div className="flex flex-col">
      <Calendar
        locale={enGB}
        mode="range"
        disabled={[{ before: new Date() }, ...parsedBookedDates]}
        min={min_booking_length ?? 2}
        max={max_booking_length || 21}
        numberOfMonths={2}
        selected={range}
        onSelect={handleSelect}
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
          <div className="flex items-center gap-4">
            <p>
              <b>x {numOfNights} nights</b>
            </p>
            <p>
              <b>Total: {formatCurrency(totalPrice)}</b>
            </p>
          </div>
        )}

        {(range?.from || range?.to) && (
          <Button
            onClick={() => handleSelect(undefined)} // clears both local and global state
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
