import {
  getBookedDatesByCabinId,
  getCabin,
  getCabins,
} from "@/lib/data/cabins";
import CabinDetails from "../_components/CabinDetails";
import CabinReservation from "../_components/CabinReservation";
import { getSettings } from "@/lib/data/settings";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cabinId: string }>;
}) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return {
    title: `Cabin ${cabin.name}`,
    description: cabin.description.slice(0, 150),
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export default async function CabinDetailPage({
  params,
}: {
  params: Promise<{ cabinId: string }>;
}) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
  const settings = await getSettings();

  const bookedDated = await getBookedDatesByCabinId(298);

  return (
    <div>
      <CabinDetails cabin={cabin} />
      <CabinReservation cabin={cabin} />
    </div>
  );
}
