// app/login/page.tsx
import { signIn } from "@/app/lib/auth-client";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-primary-950 flex items-center justify-center relative overflow-hidden">
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_0%,rgba(161,120,76,0.12),transparent_65%)]" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-8">
        <Image
          src={logo}
          width={52}
          height={52}
          alt="The Wild Oasis"
          className="mb-6"
        />

        <h1 className="font-serif text-3xl font-light text-primary-100 tracking-wide mb-1 text-center">
          Welcome to <em className="italic text-accent-400">The Oasis</em>
        </h1>
        <p className="text-xs font-light text-primary-500 tracking-widest uppercase mb-8">
          Guest area
        </p>

        <div className="w-10 h-px bg-accent-500/40 mb-8" />

        <button
          onClick={signIn}
          className="w-full flex items-center justify-center gap-3 px-6 py-3.5
                     border border-accent-600/35 text-primary-300 text-xs tracking-widest uppercase
                     hover:border-accent-500/65 hover:text-primary-100 hover:bg-accent-900/20
                     transition-all duration-200 active:scale-[0.99]"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <p className="mt-8 text-xs font-light text-primary-600 text-center leading-relaxed">
          By continuing, you agree to our terms of service.
          <br />
          Your cabin awaits.
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908C16.658 12.035 17.64 9.728 17.64 9.2z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}
