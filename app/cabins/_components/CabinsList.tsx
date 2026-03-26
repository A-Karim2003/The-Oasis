import Cabin from "./Cabin";

export default function CabinsList() {
  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <Cabin />
      <Cabin />
      <Cabin />
      <Cabin />
    </div>
  );
}
