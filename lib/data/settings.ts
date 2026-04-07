import { cacheLife, cacheTag } from "next/cache";
import { supabaseAdmin } from "../supabase/admin";

type Settings = {
  min_booking_length: number;
  max_booking_length: number;
  max_guest_per_booking: number;
  breakfast_price: number;
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getSettings(): Promise<Settings> {
  "use cache";
  cacheTag("settings");
  cacheLife("hours");

  await wait(5000);
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
