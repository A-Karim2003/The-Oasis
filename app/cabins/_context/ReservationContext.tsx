"use client";
import { DateRange } from "react-day-picker";
import { createContext, useContext, useState } from "react";
import type { Tables } from "@/types/supabase";
import { Cabin } from "../lib/types";
import { authClient } from "@/app/lib/auth-client";

type Guest = Tables<"guests">;
type Settings = Tables<"settings">;

export type ReservationContextType = {
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
  resetRange: () => void;
  settings: Settings;
  cabin: Cabin;
  bookedDates: Date[];
  currentGuest: Guest | null;
  session: ReturnType<typeof authClient.useSession>["data"];
};

type ReservationProviderProps = {
  children: React.ReactNode;
  settings: Settings;
  cabin: Cabin;
  bookedDates: Date[];
  currentGuest: Guest | null;
};

const ReservationContext = createContext<ReservationContextType | null>(null);

export function ReservationProvider({
  children,
  settings,
  cabin,
  bookedDates,
  currentGuest,
}: ReservationProviderProps) {
  const [range, setRange] = useState<DateRange | undefined>();

  const resetRange = () => setRange({ from: undefined, to: undefined });

  const { data: session } = authClient.useSession();

  return (
    <ReservationContext
      value={{
        range,
        setRange,
        resetRange,
        cabin,
        settings,
        bookedDates,
        currentGuest,
        session,
      }}
    >
      {children}
    </ReservationContext>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context)
    throw new Error("useReservation must be used within a ReservationProvider");
  return context;
}
