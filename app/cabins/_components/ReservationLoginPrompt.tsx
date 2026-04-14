"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ReservationLoginPrompt() {
  const pathname = usePathname();

  return (
    <div className="mt-15 h-full flex flex-col items-center justify-center gap-6 py-24">
      <p className="text-primary-200 text-xl text-center">
        Please{" "}
        <Link
          href={`/account?redirectTo=${pathname}`}
          className="text-accent-400 underline underline-offset-4 hover:text-accent-300 transition-colors"
        >
          log in
        </Link>{" "}
        to reserve this cabin right now
      </p>
      <p className="text-primary-500 text-sm text-center">
        Your perfect stay is just a sign-in away
      </p>
    </div>
  );
}
