import Link from "next/link";
import { CheckCircle2, CalendarDays } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="h-[66.6%] bg-primary-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-8">
        <CheckCircle2 className="w-20 h-20 text-accent-500" strokeWidth={1.5} />

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold text-primary-50 tracking-tight">
            You&apos;re all set!
          </h1>
          <p className="text-primary-300 text-lg leading-relaxed">
            Your reservation has been confirmed. We look forward to welcoming
            you. Pay on arrival — no payment needed now.
          </p>
        </div>

        <Link
          href="/account/reservations"
          className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-3 transition-colors"
        >
          <CalendarDays className="w-4 h-4" />
          View my reservations
        </Link>
      </div>
    </div>
  );
}
