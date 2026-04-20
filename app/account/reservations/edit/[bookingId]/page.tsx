import { Metadata } from "next";
import Title from "@/app/_components/Title";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Edit Reservation",
};

export default async function EditReservationPage({
  params,
}: {
  params: Promise<{ reservationId: string }>;
}) {
  const { reservationId } = await params;

  return (
    <div>
      <Title>Edit Reservation #{reservationId}</Title>

      <form className="mt-8 flex flex-col gap-8 max-w-xl">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="num_of_guests"
            className="text-primary-200 text-base flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            Number of guests
          </Label>
          <Input
            id="num_of_guests"
            name="num_of_guests"
            type="number"
            min={1}
            className="bg-primary-800 border-primary-700 text-primary-100 placeholder:text-primary-500 focus-visible:ring-accent-500"
            placeholder="How many guests?"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="observations"
            className="text-primary-200 text-base flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Observations
          </Label>
          <Textarea
            id="observations"
            name="observations"
            rows={6}
            className="bg-primary-800 border-primary-700 text-primary-100 placeholder:text-primary-500 focus-visible:ring-accent-500 resize-none"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button
            variant="ghost"
            type="button"
            className="text-primary-300 hover:text-primary-100 hover:bg-primary-800"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8"
          >
            Update reservation
          </Button>
        </div>
      </form>
    </div>
  );
}
