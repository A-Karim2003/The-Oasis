"use server";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { GuestFormData } from "../profile/ClientProfile";
import { getCurrentGuest } from "@/lib/data/guests";

export async function updateGuest(formData: GuestFormData) {
  const currentGuest = await getCurrentGuest();

  if (!currentGuest?.userId) throw new Error("Unauthorized");

  const { error } = await supabaseAdmin
    .from("guests")
    .update({
      nationality: formData.country,
      nationality_id: formData.nationalId,
    })
    .eq("userId", currentGuest.userId);

  if (error) throw new Error(error.message);
}
