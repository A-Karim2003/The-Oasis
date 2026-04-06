"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const tabs = [
  { value: "all", label: "All cabins" },
  { value: "2-3", label: "2-3 guests" },
  { value: "4-7", label: "4-7 guests" },
  { value: "8-12", label: "8-12 guests" },
] as const;

export default function FilterTabs() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeTab = searchParams.get("capacity") ?? "all";

  function handleTabChange(value: string) {
    const params = new URLSearchParams(searchParams);

    if (value === "all") {
      params.delete("capacity");
    } else {
      params.set("capacity", value);
    }

    // Construct new path and update the URL
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="h-16 flex justify-end">
      <Tabs defaultValue={activeTab} onValueChange={handleTabChange}>
        <TabsList className="bg-[#0f172a] rounded-none p-0 border h-16!">
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`h-full px-6 rounded-none data-[state=active]:bg-[#384c6b] data-[state=active]:text-white text-slate-300 transition-all hover:bg-primary-700 ${
                index !== tabs.length - 1 ? "border-r border-slate-800" : ""
              }`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
