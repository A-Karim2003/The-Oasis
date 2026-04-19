"use server";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { GuestFormData } from "../profile/ClientProfile";
import { getCurrentGuest } from "@/lib/data/guests";
import { revalidatePath } from "next/cache";

export async function updateGuest(formData: GuestFormData) {
  const currentGuest = await getCurrentGuest();

  if (!currentGuest?.userId) throw new Error("Unauthorized");

  const [country, flag] = formData.country.split("%");

  const { error } = await supabaseAdmin
    .from("guests")
    .update({
      nationality: country,
      nationality_id: formData.nationalId,
      country_flag: flag,
    })
    .eq("userId", currentGuest.userId);

  if (error) throw new Error(error.message);

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId: number) {
  const guest = await getCurrentGuest();

  if (!guest) throw new Error("Unauthorized");

  const { error } = await supabaseAdmin
    .from("bookings")
    .delete()
    .eq("id", bookingId)
    .eq("guest_id", guest.id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  revalidatePath("/account/reservations");
}

export async function updateReservation(bookingId: number) {
  const guest = await getCurrentGuest();

  if (!guest) throw new Error("Unauthorized");
}
