import { supabaseAdmin } from "@/lib/supabase/admin";
import type { Cabin as CabinType } from "../lib/types";
import Cabin from "./Cabin";

export default async function CabinsList() {
  const { data, error } = await supabaseAdmin.from("cabins").select("*");

  const cabins = data as CabinType[] | null;

  return (
    <div className="grid lg:grid-cols-2 gap-12 mt-5">
      {cabins?.map((cabin) => (
        <Cabin key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}
