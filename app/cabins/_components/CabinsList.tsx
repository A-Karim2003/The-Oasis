import { supabaseAdmin } from "@/lib/supabase/admin";
import Cabin from "./Cabin";

type Cabin = {
  id: number;
  created_at: string;
  name: string;
  capacity: number;
  price: number;
  discount: number;
  description: string;
  image_url: string;
};

export default async function CabinsList() {
  const { data } = await supabaseAdmin.from("cabins").select("*");

  const cabins = data as Cabin[] | null;

  return (
    <div className="grid lg:grid-cols-2 gap-12 mt-5">
      {cabins?.map((cabin) => (
        <Cabin key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}
