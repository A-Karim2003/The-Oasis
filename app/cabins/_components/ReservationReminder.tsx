"use client";

import { format } from "date-fns";
import { X } from "lucide-react";
import { useRange } from "../_context/RangeContext";

export default function ReservationReminder() {
  const { globalRange, resetRange } = useRange();

  if (!globalRange?.from || !globalRange?.to) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
      }}
      className="bg-accent-500 text-primary-800 py-3 px-6 rounded-full shadow-xl flex items-center gap-4 whitespace-nowrap"
    >
      <span>
        👋 Don&apos;t forget to reserve your dates —{" "}
        <strong>{format(globalRange.from, "MMM dd yyyy")}</strong> to{" "}
        <strong>{format(globalRange.to, "MMM dd yyyy")}</strong>
      </span>
      <button
        onClick={resetRange}
        className="hover:bg-accent-600 rounded-full p-1 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
