"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import Select, { ControlProps, GroupBase, components } from "react-select";

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
  const CustomControl = (
    props: React.JSX.IntrinsicAttributes &
      ControlProps<unknown, boolean, GroupBase<unknown>>
  ) => {
    return (
      <components.Control {...props}>
        <IoSearch color="#444444" />
        {props.children}
      </components.Control>
    );
  };

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
              onClick={() => {
                setActiveId(item.id);
                setToggle(false);
              }}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <Select
          className="w-full font-semibold text-base select-none outline-none"
          isSearchable={true}
          isClearable={true}
          // options={players}
          placeholder="Search player"
          components={{
            Control: CustomControl,
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          styles={{
            control: (provided) => ({
              ...provided,
              display: "flex",
              alignItems: "center",
              padding: "2px 4px",
              paddingLeft: "8px",
              cursor: "pointer",
              borderRadius: "8px",
              outline: "none",
            }),
            option: (provided) => ({
              ...provided,
              ":hover": {
                backgroundColor: "#F5F6F6",
                color: "#878787",
              },
              cursor: "pointer",
              color: "#878787",
              fontSize: "14px",
              fontWeight: "500",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "#444444",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "none",
            },
          })}
        />
      </div>
    </div>
  );
}
