"use client";
import { DateRange } from "react-day-picker";
import { createContext, useContext, useState } from "react";

type ReservationContextType = {
  range: DateRange | undefined;
  setRange: (range: DateRange) => void;
  resetRange: () => void;
};

const ReservationContext = createContext<ReservationContextType | null>(null);

export function ReservationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [range, setRange] = useState<DateRange | undefined>();

  const resetRange = () => setRange({ from: undefined, to: undefined });

  return (
    <ReservationContext value={{ range, setRange, resetRange }}>
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
