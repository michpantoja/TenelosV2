"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Select, { ControlProps, GroupBase, components } from "react-select";

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
  const players = [
    {
      value: "1",
      label: "Novak Djokovic",
      img: "/assets/novak.png",
      rank: "1",
      age: "36",
      country: "Serbia",
      weight: "77 kg",
      height: "188 cm",
      lastActive: "2024",
      status: "Active",
    },
    {
      value: "2",
      label: "Carlos Alcaraz",
      img: "/assets/carlos.jpg",
      rank: "2",
      age: "18",
      country: "Spain",
      weight: "77 kg",
      height: "188 cm",
      lastActive: "2024",
      status: "Active",
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
      <Select
        className="w-[250px] font-semibold text-base select-none outline-none"
        isSearchable={true}
        isClearable={true}
        options={players}
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
  );
}
