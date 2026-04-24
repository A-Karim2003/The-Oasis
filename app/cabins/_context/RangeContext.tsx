"use client";

import { createContext, useContext, useState } from "react";
import { DateRange } from "react-day-picker";

type RangeContextType = {
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
  resetRange: () => void;
};

const RangeContext = createContext<RangeContextType | null>(null);

export default function RangeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [range, setRange] = useState<DateRange | undefined>();
  const resetRange = () => setRange({ from: undefined, to: undefined });

  return (
    <RangeContext value={{ range, setRange, resetRange }}>
      {children}
    </RangeContext>
  );
}

export function useRange() {
  const context = useContext(RangeContext);
  if (!context)
    throw new Error("useReservation must be used within a ReservationProvider");
  return context;
}
