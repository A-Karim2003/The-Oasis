"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center py-24 gap-6">
      <h2 className="text-2xl font-semibold text-primary-100">
        Something went wrong!
      </h2>
      <p className="text-primary-400">
        {error.message || "Failed to load cabins"}
      </p>
      <button
        onClick={unstable_retry}
        className="bg-accent-500 text-primary-900 px-6 py-3 hover:bg-accent-600 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
