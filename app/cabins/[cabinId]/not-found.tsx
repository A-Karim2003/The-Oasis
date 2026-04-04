import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cabin Not Found",
  description: "The Cabin you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <h2 className="text-7xl font-black text-accent-500">404</h2>
      <p className="text-xl text-primary-300">
        Could not find the page you were looking for.
      </p>
      <Link
        href="/cabins"
        className="bg-accent-500 text-primary-900 px-6 py-3 font-semibold hover:bg-accent-600 transition-colors"
      >
        Return to Cabins
      </Link>
    </div>
  );
}
