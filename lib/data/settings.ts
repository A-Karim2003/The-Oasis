import { cacheLife, cacheTag } from "next/cache";
import { supabaseAdmin } from "../supabase/admin";
import type { Tables } from "@/types/supabase";

// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type Settings = Tables<"settings">;

export async function getSettings() {
  "use cache";
  cacheTag("settings");
  cacheLife("hours");

  const { data, error } = await supabaseAdmin
    .from("settings")
    .select("*")
    .single();

  if (error) {
    console.error("Supabase error:", error);
    throw new Error("Failed to fetch settings");
  }

  return data;
}
