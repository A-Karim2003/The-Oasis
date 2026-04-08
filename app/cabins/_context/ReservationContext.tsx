"use client";
import { DateRange } from "react-day-picker";

import { createContext, useState } from "react";
type ReservationContextType = {
  range: DateRange | undefined;
  setRange: (range: DateRange) => void;
};
const ReservationContext = createContext<ReservationContextType | null>(null);

export function ReservationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [range, setRange] = useState<DateRange | undefined>();
  return (
    <ReservationContext value={{ range, setRange }}>
      {children}
    </ReservationContext>
  );
}
