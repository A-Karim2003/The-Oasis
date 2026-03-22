import Link from "next/link";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = use(params);
  console.log(slug);

  return (
    <div>
      <h1>This is a dynamic route</h1>
      <Link href={"https://www.youtube.com/"}>Youtube</Link>
    </div>
  );
}
