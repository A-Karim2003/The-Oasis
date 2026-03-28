import { Metadata } from "next";
import NavLink from "./_components/NavLink";
import { sidebarOptions } from "./_types/navigation";

export const metadata: Metadata = {
  title: "Guest area",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full px-8 py-12">
      <div className="border border-red-500 h-full w-65">
        <ul className="border">
          {sidebarOptions.map((option) => (
            <NavLink key={option.url} option={option} />
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
}
