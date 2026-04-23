import { getCabin } from "@/lib/data/cabins";
import CabinDetails from "../_components/CabinDetails";
import { getSettings } from "@/lib/data/settings";
import CabinReservationWrapper from "../_components/CabinReservationWrapper";
import { Suspense } from "react";
import { LoadingSpinner } from "@/app/_components/LoadingSpinner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cabinId: string }>;
}) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return {
    title: `Cabin ${cabin.name}`,
    description: cabin?.description?.slice(0, 150) ?? "",
  };
}

// export async function generateStaticParams() {
//   const cabins = await getCabins();
//   return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
// }

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

      <Suspense
        fallback={
          <div className="min-h-120 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <CabinReservationWrapper cabin={cabin} />
      </Suspense>
    </div>
  );
}
