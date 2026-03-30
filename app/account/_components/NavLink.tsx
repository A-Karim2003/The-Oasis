"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, User } from "lucide-react";
import type { SidebarOption } from "../_types/navigation";

type NavLinkProp = {
  option: SidebarOption;
};

const icons = {
  home: Home,
  calendar: Calendar,
  user: User,
};

export default function NavLink({ option }: NavLinkProp) {
  const pathname = usePathname();
  const isActive = pathname === option.url;
  const Icon = icons[option.icon];

  return (
    <li>
      <Link
        href={option.url}
        className={`flex gap-4 items-center px-4 py-3 text-primary-200 font-semibold hover:bg-primary-800 transition ${isActive ? "bg-primary-900" : ""}`}
      >
        <Icon />
        {option.label}
      </Link>
    </li>
  );
}
