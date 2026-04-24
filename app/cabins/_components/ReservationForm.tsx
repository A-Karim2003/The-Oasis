"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useReservation } from "../_context/ReservationContext";

export default function ReservationForm() {
  const { cabin, session } = useReservation();

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
            {Array.from({ length: cabin.capacity }, (_, i) => i).map((item) => (
              <option key={item} value={item + 1}>
                {`${item + 1} guest`}
              </option>
            ))}
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

        <div className="flex justify-end mt-auto">
          <span className="text-primary-400 italic">
            Start by selecting dates
          </span>
        </div>
      </div>
    </form>
  );
}
