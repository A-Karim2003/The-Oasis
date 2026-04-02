import { supabaseAdmin } from "../supabase/admin";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCabins() {
  await wait(20_000);

  const { data, error } = await supabaseAdmin.from("cabins").select("*");

  if (error) throw new Error("Failed to fetch cabins");

  return data;
}
