import { supabaseAdmin } from "@/lib/supabase/admin";
import Cabin from "./Cabin";

export default async function CabinsList() {
  const { data: cabins, error } = await supabaseAdmin
    .from("cabins")
    .select("*");
  return (
    <div className="grid lg:grid-cols-2 gap-12 mt-5">
      <Cabin />
      <Cabin />
      <Cabin />
      <Cabin />
    </div>
  );
}
