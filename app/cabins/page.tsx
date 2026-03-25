import type { Metadata } from "next";
import PageDescription from "./_components/PageDescription";

export const metadata: Metadata = {
  title: "Cabins",
  description:
    "Browse our collection of cabins at The Oasis. Find your perfect retreat and book your stay today.",
};

export default function page() {
  return (
    <div>
      <PageDescription />
    </div>
  );
}
