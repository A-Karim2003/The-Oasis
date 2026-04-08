import type { Cabin } from "@/app/cabins/lib/types";

import { supabaseAdmin } from "../supabase/admin";
import { notFound } from "next/navigation";
import { cacheLife, cacheTag } from "next/cache";
import { eachDayOfInterval } from "date-fns";

// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCabins(): Promise<Cabin[]> {
  "use cache";
  cacheTag("cabins");
  cacheLife("hours");
  const { data, error } = await supabaseAdmin.from("cabins").select("*");

  if (error) {
    console.error("Supabase error:", error.message);
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

export async function getBookedDatesByCabinId(
  cabinId: number,
): Promise<Date[]> {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const todayISO = today.toISOString();

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .select("*")
    .eq("cabin_id", cabinId)
    .or(`start_date.gte.${todayISO},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  const bookedDates = data
    .map((booking) =>
      // returns every single day between these two dates
      eachDayOfInterval({
        start: new Date(booking.start_date),
        end: new Date(booking.end_date),
      }),
    )
    .flat();

  return bookedDates;
}

export async function getCabinPrice(id: number) {
  const { data, error } = await supabaseAdmin
    .from("cabins")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch price");
  }

  return data;
}
