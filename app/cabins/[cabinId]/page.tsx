import { getCabin } from "@/lib/data/cabins";
import CabinDetails from "../_components/CabinDetails";
import CabinReservation from "../_components/CabinReservation";

export default async function CabinDetailPage({
  params,
}: {
  params: Promise<{ cabinId: string }>;
}) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <div>
      <CabinDetails cabin={cabin} />
      <CabinReservation cabin={cabin} />
    </div>
  );
}
