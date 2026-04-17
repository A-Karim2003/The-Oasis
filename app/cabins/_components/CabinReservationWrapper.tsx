import type { Cabin as CabinType } from "@/app/cabins/lib/types";

import { getBookedDatesByCabinId } from "@/lib/data/cabins";
import CabinReservation from "./CabinReservation";
import { getSettings } from "@/lib/data/settings";
import { getCurrentGuest } from "@/lib/data/guests";
import { ReservationProvider } from "../_context/ReservationContext";
import ReservationLoginPrompt from "./ReservationLoginPrompt";

type cabinProp = {
  cabin: CabinType;
};

export default async function CabinReservationWrapper({ cabin }: cabinProp) {
  const [settings, bookedDates, currentGuest] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
    getCurrentGuest(),
  ]);

  if (!currentGuest) return <ReservationLoginPrompt />;

  return (
    <ReservationProvider
      cabin={cabin}
      bookedDates={bookedDates}
      settings={settings}
      currentGuest={currentGuest}
    >
      <CabinReservation />
    </ReservationProvider>
  );
}
