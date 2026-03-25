import type { Metadata } from "next";
import PageDescription from "./_components/PageDescription";
import FilterTabs from "./_components/FilterTabs";

export const metadata: Metadata = {
  title: "Cabins",
  description:
    "Browse our collection of cabins at The Oasis. Find your perfect retreat and book your stay today.",
};

export default function page() {
  return (
    <section className="h-full border flex flex-col">
      <PageDescription />

      <div className="h-full">
        <FilterTabs />
      </div>
    </section>
  );
}
