"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

export default function NavMobile() {
  const [activeId, setActiveId] = useState(1);
  const [toggle, setToggle] = useState(false);
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
    <div className="flex lg:hidden items-center">
      <div
        className="z-40 text-3xl text-darkerGray cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <IoClose /> : <IoMenu />}
      </div>
      <div
        className={`fixed top-0 right-0 w-[60%] h-full z-10 flex flex-col items-center bg-lightGray px-8 pt-16 gap-4 transition-transform ease-in-out duration-500 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="w-full space-y-2">
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
        <div className="w-full flex items-center gap-1 px-4 py-2 border border-gray rounded-lg">
          <IoSearch className="text-lg text-darkGray" />
          <p className="font-semibold text-base text-darkerGray">Search</p>
        </div>
      </div>
    </div>
  );
}
