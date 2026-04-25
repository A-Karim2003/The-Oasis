import RangeProvider from "./_context/RangeContext";

export default function CabinPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RangeProvider>{children}</RangeProvider>;
}
