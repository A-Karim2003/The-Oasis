import { Metadata } from "next";
import Sidebar from "./_components/Sidebar";
import { getSession } from "../lib/auth-client";

export const metadata: Metadata = {
  title: "Guest area",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (session) return <div>Login</div>;

  return (
    <div className="grid grid-cols-[16rem_1fr] h-full px-8 py-12">
      <Sidebar />
      <main className="px-8">{children}</main>
    </div>
  );
}
