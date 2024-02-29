"use client";

import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();
  return (
    <nav className="fixed z-40 bg-[#FFFFFF] w-full flex justify-between items-center px-6 xl:px-16 py-4 gap-8">
      <Image
        src="/assets/tenelos_logo.png"
        alt="logo"
        width={100}
        height={100}
        quality={100}
        className="cursor-pointer select-none"
        onClick={() => {
          router.push("/");
        }}
      />
      <NavDesktop />
      <NavMobile />
    </nav>
  );
}
