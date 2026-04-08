import { ReservationProvider } from "./_context/ReservationContext";

export default function CabinPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReservationProvider>{children}</ReservationProvider>;
}
