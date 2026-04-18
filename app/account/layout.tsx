import { Metadata } from "next";
import Sidebar from "./_components/Sidebar";
import { auth } from "@/lib/auth";
import LoginPage from "../_components/LoginPage";
import { headers } from "next/headers";
import { Bounce, ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Guest area",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) return <LoginPage />;

  return (
    <div className="grid grid-cols-[16rem_1fr] h-full px-8 py-12">
      <Sidebar />
      <main className="px-8">
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          theme="dark"
          transition={Bounce}
        />
      </main>
    </div>
  );
}
