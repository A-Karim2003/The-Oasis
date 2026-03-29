import { Metadata } from "next";
import ClientProfileForm from "./ClientProfile";

export const metadata: Metadata = {
  title: "Guest Profile",
};

export default function ProfilePage() {
  return <ClientProfileForm />;
}
