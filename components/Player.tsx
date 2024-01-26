"use client";

import React, { useState } from "react";
import Select from "react-select";
import Image from "next/image";

export default function Player({ head }: { head: number }) {
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

  // State to hold the selected player
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  // Function to handle change in selection
  const handleChange = (player: any) => {
    setSelectedPlayer(player || players[0]);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src={selectedPlayer.img}
        width={200}
        height={200}
        quality={100}
        alt={""}
        className={`bg-contain rounded-full w-[200px] h-[200px] select-none border-4 
            ${head === 1 ? "border-green" : "border-gray"}
        `}
      />
      <Select
        className="w-[280px] font-semibold text-base select-none outline-none"
        isSearchable={true}
        isClearable={true}
        defaultValue={players[0]}
        options={players}
        onChange={handleChange}
        placeholder="Type player's name"
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (provided: any) => ({
            ...provided,
            padding: "4px 14px",
            border: head === 1 ? "2px solid green" : "2px solid gray",
            cursor: "pointer",
            borderRadius: "8px",
            outline: "none",
            ":hover": {
              borderColor: head === 1 ? "green" : "gray",
            },
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
            color: head === 1 ? "green" : "gray",
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
      <div className="w-[280px] flex flex-col gap-3 px-4 py-5 border border-gray rounded-lg">
        <div className="flex justify-between">
          <p className="font-regular text-base text-darkerGray select-none">
            Rank:
          </p>
          <p className="font-semibold text-base text-darkerGray select-none">
            {selectedPlayer.rank}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-regular text-base text-darkerGray select-none">
            Age:
          </p>
          <p className="font-semibold text-base text-darkerGray select-none">
            {selectedPlayer.age}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-regular text-base text-darkerGray select-none">
            Country:
          </p>
          <p className="font-semibold text-base text-darkerGray select-none">
            {selectedPlayer.country}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-regular text-base text-darkerGray select-none">
            Weight:
          </p>
          <p className="font-semibold text-base text-darkerGray select-none">
            {selectedPlayer.weight}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-regular text-base text-darkerGray select-none">
            Height:
          </p>
          <p className="font-semibold text-base text-darkerGray select-none">
            {selectedPlayer.height}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-regular text-base text-darkerGray select-none">
            Last Active:
          </p>
          <p className="font-semibold text-base text-darkerGray select-none">
            {selectedPlayer.lastActive}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-regular text-base text-darkerGray select-none">
            Status:
          </p>
          <p className="font-semibold text-base text-darkerGray select-none">
            {selectedPlayer.status}
          </p>
        </div>
      </div>
    </div>
  );
}
