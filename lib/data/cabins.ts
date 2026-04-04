import type { Cabin } from "@/app/cabins/lib/types";

import { supabaseAdmin } from "../supabase/admin";
import { notFound } from "next/navigation";
import { cacheLife, cacheTag } from "next/cache";

// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCabins(): Promise<Cabin[]> {
  "use cache";
  cacheTag("cabins");
  cacheLife("hours");
  const { data, error } = await supabaseAdmin.from("cabins").select("*");

  if (error) {
    console.error("Supabase error:", error);
    throw new Error("Failed to fetch cabins");
  }

  return data;
}

export async function getCabin(id: string): Promise<Cabin> {
  "use cache";
  cacheTag(`cabins-${id}`);
  cacheLife("hours");
  const { data, error } = await supabaseAdmin
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Supabase error:", error);
    notFound();
  }

  return data;
}
