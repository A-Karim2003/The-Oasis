import { LogOut } from "lucide-react";
import { sidebarOptions } from "../_types/navigation";
import NavLink from "./NavLink";

export default function Sidebar() {
  return (
    <div className="h-full w-65 border-r border-primary-900 flex flex-col justify-between">
      <ul className="flex flex-col gap-4">
        {sidebarOptions.map((option) => (
          <NavLink key={option.url} option={option} />
        ))}
      </ul>

      <div
        className={
          "flex gap-4 items-center px-4 py-3 text-primary-200 font-semibold hover:bg-primary-800 transition"
        }
      >
        <LogOut />
        <span>Sign out</span>
      </div>
    </div>
  );
}
