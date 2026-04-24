import { DateRange } from "react-day-picker";
import RangeProvider from "./_context/RangeContext";
import { useState } from "react";

export default function CabinPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [globalRange, setGlobalRange] = useState<DateRange | undefined>();
  return <RangeProvider>{children}</RangeProvider>;
}
