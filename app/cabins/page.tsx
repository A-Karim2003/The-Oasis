import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabins",
  description:
    "Browse our collection of cabins at The Oasis. Find your perfect retreat and book your stay today.",
};

export default function page() {
  return (
    <div>
      <h1>This is cabins page</h1>
    </div>
  );
}
