"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarOption } from "../_types/navigation";

type NavLinkProp = {
  option: SidebarOption;
};

export default function NavLink({ option }: NavLinkProp) {
  const pathname = usePathname();
  const isActive = pathname === option.url;

  return (
    <li>
      <Link
        href={option.url}
        className={`flex items-center px-4 py-3 text-primary-200 font-semibold hover:bg-primary-800 transition ${isActive ? "bg-primary-900" : ""}`}
      >
        {option.label}
      </Link>
    </li>
  );
}
