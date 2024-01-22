"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function NavDesktop() {
  const [activeId, setActiveId] = useState(1);
  const navItems = [
    {
      id: 1,
      title: "Live Ratings",
      link: "/",
    },
    {
      id: 2,
      title: "H2H",
      link: "/h2h",
    },
    {
      id: 3,
      title: "Players",
      link: "/players",
    },
    {
      id: 4,
      title: "Tournaments",
      link: "/tournaments",
    },
    {
      id: 5,
      title: "About",
      link: "/about",
    },
  ];
  return (
    <div className="hidden lg:flex w-full justify-between items-center">
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`text-base font-semibold cursor-pointer select-none ${
              activeId === item.id ? "text-green" : "text-darkerGray"
            }`}
            onClick={() => setActiveId(item.id)}
          >
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-1 px-4 py-2 border border-gray rounded-lg">
        <IoSearch className="text-lg text-darkGray" />
        <p className="font-semibold text-base text-darkerGray">Search</p>
      </div>
    </div>
  );
}
