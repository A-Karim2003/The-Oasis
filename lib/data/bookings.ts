import { supabaseAdmin } from "../supabase/admin";
import { getCurrentGuest } from "./guests";

export async function getBookings() {
  const guest = await getCurrentGuest();

  if (!guest) throw new Error("Not authenticated");

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .select("*, cabins(name, image_url)")
    .eq("guest_id", guest.id)
    .order("start_date");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  //reservations are bookings where status are unconfirmed
  return data;
}

export async function getBooking(id: number) {
  const { data, error } = await supabaseAdmin
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}
