"use client";

import { useState } from "react";
import { useReservation } from "../_context/ReservationContext";
import { format } from "date-fns";
import { X } from "lucide-react";

export default function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range?.from || !range?.to) return null;

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
        <strong>{format(range.from, "MMM dd yyyy")}</strong> to{" "}
        <strong>{format(range.to, "MMM dd yyyy")}</strong>
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
