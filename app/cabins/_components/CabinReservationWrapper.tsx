import type { Cabin as CabinType } from "@/app/cabins/lib/types";

import { getBookedDatesByCabinId } from "@/lib/data/cabins";
import CabinReservation from "./CabinReservation";
import { getSettings } from "@/lib/data/settings";
import { getCurrentGuest } from "@/lib/data/guests";

type cabinProp = {
  cabin: CabinType;
};

export default async function CabinReservationWrapper({ cabin }: cabinProp) {
  const [settings, bookedDates, currentGuest] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
    getCurrentGuest(),
  ]);

  return (
    <CabinReservation
      cabin={cabin}
      bookedDates={bookedDates}
      settings={settings}
      currentGuest={currentGuest}
    />
  );
}
