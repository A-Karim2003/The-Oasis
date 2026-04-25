"use client";

import { createContext, useContext, useState } from "react";
import { DateRange } from "react-day-picker";

type RangeContextType = {
  globalRange: DateRange | undefined;
  setGlobalRange: (range: DateRange | undefined) => void;
  resetRange: () => void;
};

const RangeContext = createContext<RangeContextType | null>(null);

export default function RangeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [globalRange, setGlobalRange] = useState<DateRange | undefined>();

  const resetRange = () => setGlobalRange(undefined);

  return (
    <RangeContext value={{ globalRange, setGlobalRange, resetRange }}>
      {children}
    </RangeContext>
  );
}

export function useRange() {
  const context = useContext(RangeContext);
  if (!context) throw new Error("useRange must be used within RangeProvider");
  return context;
}
