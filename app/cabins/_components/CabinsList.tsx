import Cabin from "./Cabin";
import { getCabins } from "@/lib/data/cabins";

export default async function CabinsList({
  capacityFilter,
}: {
  capacityFilter: string;
}) {
  const cabins = await getCabins();
  const sortedCabins = cabins?.sort((a, b) => Number(a.name) - Number(b.name));

  const sortedFilteredCabins = sortedCabins?.filter((cabin) => {
    if (!capacityFilter) return true;

    const [min, max] = capacityFilter
      .split("-")
      .map((option) => Number(option));

    if (isNaN(min) || isNaN(max)) return true; // guards again invalid strings

    return cabin.capacity >= min && cabin.capacity <= max;
  });

  return (
    <div
      className="grid gap-12 mt-5"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 30rem), 1fr))",
      }}
    >
      {sortedFilteredCabins?.map((cabin) => (
        <Cabin key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}
