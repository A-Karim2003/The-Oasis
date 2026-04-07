import type { Cabin as CabinType } from "@/app/cabins/lib/types";

import { getBookedDatesByCabinId } from "@/lib/data/cabins";
import CabinReservation from "./CabinReservation";

type cabinProp = {
  cabin: CabinType;
};

export default async function CabinReservationWrapper({ cabin }: cabinProp) {
  const bookedDates = await getBookedDatesByCabinId(cabin.id);

  return <CabinReservation cabin={cabin} bookedDates={bookedDates} />;
}
