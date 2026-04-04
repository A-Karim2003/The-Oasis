import type { Cabin as CabinType } from "@/app/cabins/lib/types";
import Cabin from "./Cabin";
import { getCabins } from "@/lib/data/cabins";

export default async function CabinsList() {
  const data = await getCabins();

  const cabins = data as CabinType[] | null;
  const sortedCabins = cabins?.sort((a, b) => Number(a.name) - Number(b.name));

  return (
    <div
      className="grid gap-12 mt-5"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 30rem), 1fr))",
      }}
    >
      {sortedCabins?.map((cabin) => (
        <Cabin key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}
