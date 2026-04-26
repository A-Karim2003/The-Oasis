"use client";

import { useForm } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useReservation } from "../_context/ReservationContext";
import type { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { Cabin } from "../lib/types";
import { addReservation } from "@/app/account/lib/actions";
import { toast } from "react-toastify";

type FormValues = {
  num_of_guests: number;
  observations?: string;
};

type Props = {
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
  cabin: Cabin;
};

export default function ReservationForm({ range, cabin, setRange }: Props) {
  const { session } = useReservation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const hasSelectedDates = range?.from && range?.to;

  async function onSubmit(data: FormValues) {
    if (!range?.from || !range?.to) return;

    const start_date = format(range.from, "yyyy-MM-dd HH:mm:ss");
    const end_date = format(range.to, "yyyy-MM-dd HH:mm:ss");
    const newBooking = {
      cabin_id: cabin.id,
      cabin_price: cabin.price,
      extras_price: 0,
      hasBreakfast: false,
      isPaid: false,
      num_of_guests: data.num_of_guests,
      observations: data.observations || null,
      end_date,
      start_date,
      status: "unconfirmed",
    };

    try {
      await addReservation(newBooking);
      toast.success("Reservation created successfully!");
      setRange(undefined);
    } catch {
      toast.error("Failed to create reservation. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-primary-900 flex flex-col"
    >
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

          <select
            className="bg-primary-800 text-primary-100 p-3 w-full border border-primary-700"
            {...register("num_of_guests", {
              required: "Please select number of guests",
              valueAsNumber: true,
            })}
          >
            <option value="">Select number of guests...</option>
            {Array.from({ length: cabin.capacity }, (_, i) => i + 1).map(
              (num) => (
                <option key={num} value={num}>
                  {num} guest{num > 1 ? "s" : ""}
                </option>
              ),
            )}
          </select>

          {errors.num_of_guests && (
            <span className="text-red-400 text-sm">
              {errors.num_of_guests.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-primary-200 text-lg">
            Anything we should know about your stay?
          </label>

          <textarea
            className="bg-primary-800 text-primary-100 p-3 border border-primary-700 resize-none h-32"
            placeholder="Any pets, allergies, special requirements, etc.?"
            {...register("observations")}
          />
        </div>

        <div className="flex justify-end mt-auto">
          {!hasSelectedDates ? (
            <span className="text-primary-400 italic">
              Start by selecting dates
            </span>
          ) : (
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-6 py-3"
            >
              Reserve now
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
