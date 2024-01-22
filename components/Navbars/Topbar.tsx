"use client";

import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

export default function Topbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 xl:px-16 py-4">
      <div className=" w-52 font-black text-3xl text-green select-none">
        Ten ELOs
      </div>
      <NavDesktop />
      <NavMobile />
    </nav>
  );
}
