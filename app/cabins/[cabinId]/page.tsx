import { getCabin } from "@/lib/data/cabins";
import CabinDetails from "../_components/CabinDetails";
import CabinReservation from "../_components/CabinReservation";
import { notFound } from "next/navigation";

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
