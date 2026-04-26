"use server";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { GuestFormData } from "../profile/ClientProfile";
import { getCurrentGuest } from "@/lib/data/guests";
import { revalidatePath } from "next/cache";
import { Tables } from "@/types/supabase";
export type NewBooking = Tables<"bookings">;

// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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

export async function updateReservation(
  prevState: unknown,
  formData: FormData,
) {
  const guest = await getCurrentGuest();
  if (!guest) throw new Error("Unauthorized");

  const { bookingId, num_of_guests, observations } = Object.fromEntries(
    formData,
  ) as Record<string, string>;

  const { error } = await supabaseAdmin
    .from("bookings")
    .update({ num_of_guests: Number(num_of_guests), observations })
    .eq("id", Number(bookingId));

  if (error) {
    console.log(error);
    return { success: false, message: "Failed to update reservation" };
  }
  revalidatePath("/account/reservations");
  return { success: true, message: "Reservation updated successfully" };
}

export async function addReservation(
  booking: Omit<NewBooking, "id" | "created_at" | "guest_id">,
) {
  const currentGuest = await getCurrentGuest();
  if (!currentGuest) throw new Error("Unauthorized");

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .insert({ ...booking, guest_id: currentGuest.id })
    .select()
    .single();

  if (error) throw new Error("Booking could not be created");

  return data;
}
