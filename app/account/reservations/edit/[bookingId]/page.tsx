import { Metadata } from "next";
import Title from "@/app/_components/Title";
import { getSettings } from "@/lib/data/settings";
import EditReservationForm from "@/app/account/_components/EditReservationForm";
import { Label } from "@/components/ui/label";
import { MessageSquare, Users } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { getBooking } from "@/lib/data/bookings";

export const metadata: Metadata = {
  title: "Edit Reservation",
};

export default async function EditReservationPage({
  params,
}: {
  params: Promise<{ bookingId: string }>;
}) {
  const { bookingId } = await params;

  const [settings, booking] = await Promise.all([
    getSettings(),
    getBooking(Number(bookingId)),
  ]);

  const { max_guest_per_booking } = settings;
  const { num_of_guests, observations } = booking;

  return (
    <div>
      <Title>Edit Reservation #{bookingId}</Title>

      <EditReservationForm>
        <input type="hidden" name="bookingId" value={bookingId} />
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="num_of_guests"
            className="text-primary-200 text-base flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            Number of guests
          </Label>

          <select
            defaultValue={num_of_guests}
            id="num_of_guests"
            name="num_of_guests"
            className="bg-primary-800 border-primary-700 text-primary-100 placeholder:text-primary-500 focus-visible:ring-accent-500 p-3 rounded-md"
          >
            {Array.from(
              { length: max_guest_per_booking! },
              (_, i) => i + 1,
            ).map((guest) => (
              <option key={guest} value={guest}>
                {guest} guest
              </option>
            ))}
          </select>
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
            defaultValue={observations ?? ""}
            id="observations"
            name="observations"
            rows={6}
            className="text-lg p-3 bg-primary-800 border-primary-700 text-primary-100 placeholder:text-primary-500 focus-visible:ring-accent-500 resize-none"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>
      </EditReservationForm>
    </div>
  );
}
