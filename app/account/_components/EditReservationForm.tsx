"use client";

import { Button } from "@/components/ui/button";
import { updateReservation } from "@/app/account/lib/actions";
import { ReactNode, useActionState, useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "react-toastify";

export default function EditReservationForm({
  children,
}: {
  children: ReactNode;
}) {
  const [state, action, isPending] = useActionState(updateReservation, null);

  useEffect(() => {
    if (state?.success) toast.success(state.message);
    if (state?.success === false) toast.error(state.message);
  }, [state]);

  return (
    <form action={action} className="mt-8 flex flex-col gap-8 max-w-xl">
      {children}

      <div className="flex items-center justify-end gap-4">
        <Button
          type="submit"
          className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 flex items-center justify-evenly"
        >
          {isPending && <Spinner />}
          Update reservation
        </Button>
      </div>
    </form>
  );
}
