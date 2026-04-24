import type { Metadata } from "next";
import PageDescription from "./_components/PageDescription";
import FilterTabs from "./_components/FilterTabs";
import CabinsList from "./_components/CabinsList";
import { Suspense } from "react";
import CabinsListSkeleton from "./_components/CabinsListSkeleton";
import ReservationReminder from "./_components/ReservationReminder";

export const metadata: Metadata = {
  title: "Cabins",
  description:
    "Browse our collection of cabins at The Oasis. Find your perfect retreat and book your stay today.",
};

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ capacity: string }>;
}) {
  const { capacity: capacityFilter } = await searchParams;

  return (
    <section className="flex flex-col">
      <PageDescription />

      <div className="h-full">
        <Suspense fallback={null}>
          <FilterTabs />
        </Suspense>

        <Suspense fallback={<CabinsListSkeleton />} key={capacityFilter}>
          <CabinsList capacityFilter={capacityFilter} />
          <ReservationReminder />
        </Suspense>
      </div>
    </section>
  );
}
