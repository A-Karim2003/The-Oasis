import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Image
        src="/images/bg.png"
        alt="background image"
        quality={100}
        fill
        className="object-cover object-center -z-10"
        priority
      />
      <section className="h-full flex justify-center relative">
        <div className="flex flex-col items-center absolute top-[20%]">
          <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
            Welcome to the Oasis
          </h1>

          <Link
            className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            href={""}
          >
            Explore luxury cabins
          </Link>
        </div>
      </section>
    </>
  );
}
