import { sidebarOptions } from "../_types/navigation";
import NavLink from "./NavLink";

export default function Sidebar() {
  return (
    <div className="h-full w-65 border-r border-primary-900">
      <ul className="flex flex-col gap-4">
        {sidebarOptions.map((option) => (
          <NavLink key={option.url} option={option} />
        ))}
      </ul>
    </div>
  );
}
