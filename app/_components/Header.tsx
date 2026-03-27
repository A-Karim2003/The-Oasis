import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type NavLink = {
  label: string | React.ReactNode;
  url: string;
};

const navLinks: NavLink[] = [
  { label: "Cabins", url: "/cabins" },
  { label: "About", url: "/about" },

  {
    label: (
      <span className="flex items-center gap-5">
        <Avatar>
          {/* <AvatarImage src="avatar" /> */}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <span>Guest area</span>
      </span>
    ),

    url: "/account",
  },
] as const;

export default function Header() {
  return (
    <header className="px-8 py-5 border-b border-primary-600">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-4 z-10">
          <Image src={logo} height="60" width="60" alt="The Wild Oasis logo" />
          <span className="text-xl font-semibold text-primary-100">
            The Wild Oasis
          </span>
        </Link>

        <nav>
          <ul className="flex gap-16 items-center">
            {navLinks.map((navLink) => (
              <li key={navLink.url}>
                <Link
                  href={navLink.url}
                  className="hover:text-accent-400 transition-colors text-primary-100 text-lg"
                >
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
