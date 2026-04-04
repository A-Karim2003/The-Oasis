import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-18 animate-spin", className)}
      {...props}
    />
  );
}

export function LoadingSpinner() {
  return (
    <div className="h-full flex items-center justify-center text-accent-400">
      <Spinner />
    </div>
  );
}
