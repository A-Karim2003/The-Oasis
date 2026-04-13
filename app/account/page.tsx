import { auth } from "@/lib/auth";
import Title from "../_components/Title";
import { headers } from "next/headers";

export default async function Homepage() {
  const session = await auth.api.getSession({ headers: await headers() });
  console.log();

  return (
    <div>
      <Title>Welcome, {session?.user?.name.split(" ")[0]}</Title>
    </div>
  );
}
