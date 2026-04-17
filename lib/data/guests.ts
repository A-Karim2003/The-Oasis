import { headers } from "next/headers";
import { auth } from "../auth";
import { supabaseAdmin } from "../supabase/admin";

export async function getCurrentGuest() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) return null;

  const { data, error } = await supabaseAdmin
    .from("guests")
    .select("*")
    .eq("userId", session.user.id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}
