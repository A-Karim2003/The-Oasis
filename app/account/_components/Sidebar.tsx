"use client";

import { LogOut } from "lucide-react";
import { sidebarOptions } from "../_types/navigation";
import NavLink from "./NavLink";
import { signOut } from "@/app/lib/auth-client";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function Sidebar() {
  const [isPending, setIsPending] = useState(false);

  const handleSignOut = async () => {
    setIsPending(true);
    await signOut();
    setIsPending(false);
  };

  return (
    <div className="h-full w-65 border-r border-primary-900 flex flex-col justify-between">
      <ul className="flex flex-col gap-4">
        {sidebarOptions.map((option) => (
          <NavLink key={option.url} option={option} />
        ))}
      </ul>

      <div
        className={
          "flex gap-4 items-center px-4 py-3 text-primary-200 font-semibold hover:bg-primary-800 transition cursor-pointer"
        }
        onClick={handleSignOut}
      >
        {isPending && <Spinner className="size-5" />}
        <LogOut />
        <span>{isPending ? "Signing out" : "Sign out"}</span>
      </div>
    </div>
  );
}
