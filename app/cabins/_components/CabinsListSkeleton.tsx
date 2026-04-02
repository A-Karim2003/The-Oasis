import { Skeleton } from "@/components/ui/skeleton";

function CabinCardSkeleton() {
  return (
    <div className="flex border border-primary-800">
      {/* Left: image placeholder */}
      <Skeleton className="h-48 w-48 shrink-0 rounded-none" />

      <div className="flex flex-col flex-1">
        {/* Top: title + guests */}
        <div className="flex-1 p-4 border-b border-primary-800 flex flex-col gap-3">
          <Skeleton className="h-7 w-36" />
          <Skeleton className="h-4 w-28" />
        </div>

        {/* Bottom: price row */}
        <div className="flex items-center h-16 px-4 gap-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  );
}

export default function CabinsListSkeleton() {
  return (
    <div
      className="grid gap-12 mt-5"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 30rem), 1fr))",
      }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <CabinCardSkeleton key={i} />
      ))}
    </div>
  );
}
