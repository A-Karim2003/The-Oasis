"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useReservation } from "../_context/ReservationContext";
import { DateRange } from "react-day-picker";
import { differenceInDays } from "date-fns";
import { Button } from "@/components/ui/button";

export default function ReservationForm({
  range,
}: {
  range: DateRange | undefined;
}) {
  const { cabin, session } = useReservation();
  const hasSelectedDates = range?.from && range?.to;

  const numOfNights =
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;

  const totalPrice = numOfNights * (cabin.price - (cabin?.discount ?? 0));

  /*
    cabin_id: number | null;
    cabin_price: number | null;
    created_at: string;
    end_date: string;
    extras_price: number | null;
    guest_id: number | null;
    hasBreakfast: boolean | null;
    id: number;
    isPaid: boolean | null;
    num_of_guests: number;
    observations: string | null;
    start_date: string;
    status: string | null;
  */

  return (
    <form className="bg-primary-900 flex flex-col">
      <div className="bg-primary-950 flex items-center justify-around gap-3 p-4">
        <span className="text-primary-300 text-sm">Logged in as</span>
        <div className="flex items-center gap-4">
          <Avatar className="w-8 h-8">
            <AvatarImage src={session?.user?.image ?? ""} />
            <AvatarFallback suppressHydrationWarning>
              {session?.user?.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase() ?? "?"}
            </AvatarFallback>
          </Avatar>
          <span
            className="text-primary-100 font-semibold"
            suppressHydrationWarning
          >
            {session?.user?.name}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-primary-200 text-lg">How many guests?</label>
          <select className="bg-primary-800 text-primary-100 p-3 w-full border border-primary-700">
            <option value="">Select number of guests...</option>
            {Array.from({ length: cabin.capacity }, (_, i) => i + 1).map(
              (item) => (
                <option key={item} value={item + 1}>
                  {`${item} guest${item > 1 ? "s" : ""}`}
                </option>
              ),
            )}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-primary-200 text-lg">
            Anything we should know about your stay?
          </label>
          <textarea
            className="bg-primary-800 text-primary-100 p-3 border border-primary-700 resize-none h-32"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        {!hasSelectedDates ? (
          <span className="text-primary-400 italic">
            Start by selecting dates
          </span>
        ) : (
          <div className="border flex items-center justify-between">
            <span className="text-green-400">Dates selected ✅</span>
            <div className="text-right">
              <Button className="bg-accent-600 p-4 py-5 text-lg ">
                Reserve now
              </Button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
