import type { Cabin } from "@/app/cabins/lib/types";

import { supabaseAdmin } from "../supabase/admin";

// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCabins() {
  const { data, error } = await supabaseAdmin.from("cabins").select("*");

  if (error) throw new Error("Failed to fetch cabins");

  return data;
}

export async function getCabin(id: string): Promise<Cabin> {
  const { data, error } = await supabaseAdmin
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Failed to retrieve cabin details");

  return data;
}
