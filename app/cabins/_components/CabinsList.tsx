import type { Cabin as CabinType } from "../lib/types";
import Cabin from "./Cabin";
import { getCabins } from "@/lib/data/cabins";

export default async function CabinsList() {
  const data = await getCabins();

  const cabins = data as CabinType[] | null;

  return (
    <div
      className="grid gap-12 mt-5"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 30rem), 1fr))",
      }}
    >
      {cabins?.map((cabin) => (
        <Cabin key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}
