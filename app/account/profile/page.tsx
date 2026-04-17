import { Metadata } from "next";
import ClientProfileForm from "./ClientProfile";
import { getCurrentGuest } from "@/lib/data/guests";

export const metadata: Metadata = {
  title: "Guest Profile",
};

export default async function ProfilePage() {
  const guest = await getCurrentGuest();

  return <ClientProfileForm guest={guest} />;
}
