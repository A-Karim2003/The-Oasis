import { Metadata } from "next";
import Sidebar from "./_components/Sidebar";

export const metadata: Metadata = {
  title: "Guest area",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full px-8 py-12">
      <Sidebar />
      <main className="px-8">{children}</main>
    </div>
  );
}
