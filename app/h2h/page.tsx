"use client";

import BarChart from "@/components/Charts/Bar";
import Graph from "@/components/Charts/Graph";
import H2HMatchHistoryTable from "@/components/Tables/H2HMatchHistory";
import React, { useState } from "react";
import Select from "react-select";
import Image from "next/image";

export default function H2H() {
  const [activeTab, setActiveTab] = useState("Bio");
  const tabs = ["Bio", "Charts", "Match History"];
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

  return (
    <div className="w-full flex flex-col gap-6">
      <p className="font-semibold text-xl text-darkerGray select-none text-center">
        Head 2 Head
      </p>
      {/* Desktop Screen */}
      <div className="hidden lg:flex flex-col justify-center gap-6">
        <div className="w-full flex justify-center md:justify-around lg:justify-between gap-6">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/novak.png"
              width={200}
              height={200}
              quality={100}
              alt={""}
              className={`bg-contain rounded-full w-[80px] sm:w-[120px] lg:w-[200px] h-[80px] sm:h-[120px] lg:h-[200px] select-none border-4 
          
        `}
            />
            <Select
              className="w-[160px] md:w-[280px] font-semibold text-base select-none outline-none"
              isSearchable={true}
              isClearable={true}
              defaultValue={players[0]}
              options={players}
              // onChange={handleChange}
              placeholder="Type player's name"
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: (provided: any) => ({
                  ...provided,
                  padding: "4px",
                  // border: head === 1 ? "2px solid green" : "2px solid gray",
                  cursor: "pointer",
                  borderRadius: "8px",
                  outline: "none",
                  // ":hover": {
                  //   borderColor: head === 1 ? "green" : "gray",
                  // },
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
                  // color: head === 1 ? "green" : "gray",
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
                  rank
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Age:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  age
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Country:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  country
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Weight:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  weight
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Height:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  height
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Last Active:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  lastActive
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Status:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  status
                </p>
              </div>
            </div>
          </div>
          <BarChart />
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/novak.png"
              width={200}
              height={200}
              quality={100}
              alt={""}
              className={`bg-contain rounded-full w-[80px] sm:w-[120px] lg:w-[200px] h-[80px] sm:h-[120px] lg:h-[200px] select-none border-4 
          
        `}
            />
            <Select
              className="w-[160px] md:w-[280px] font-semibold text-base select-none outline-none"
              isSearchable={true}
              isClearable={true}
              defaultValue={players[0]}
              options={players}
              // onChange={handleChange}
              placeholder="Type player's name"
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: (provided: any) => ({
                  ...provided,
                  padding: "4px",
                  // border: head === 1 ? "2px solid green" : "2px solid gray",
                  cursor: "pointer",
                  borderRadius: "8px",
                  outline: "none",
                  // ":hover": {
                  //   borderColor: head === 1 ? "green" : "gray",
                  // },
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
                  // color: head === 1 ? "green" : "gray",
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
                  rank
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Age:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  age
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Country:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  country
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Weight:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  weight
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Height:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  height
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Last Active:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  lastActive
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-regular text-base text-darkerGray select-none">
                  Status:
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  status
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="hidden lg:flex w-full border-gray" />
        <Graph />
        <hr className="hidden lg:flex w-full border-gray" />
        <H2HMatchHistoryTable />
      </div>

      {/* Mobile to tablet Screens */}
      <div className="flex lg:hidden flex-col gap-6">
        <div className="w-full flex justify-center md:justify-around lg:justify-between gap-6">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/novak.png"
              width={200}
              height={200}
              quality={100}
              alt={""}
              className={`bg-contain rounded-full w-[80px] sm:w-[120px] lg:w-[200px] h-[80px] sm:h-[120px] lg:h-[200px] select-none border-4 
          
        `}
            />
            <Select
              className="w-[160px] md:w-[280px] font-semibold text-base select-none outline-none"
              isSearchable={true}
              isClearable={true}
              defaultValue={players[0]}
              options={players}
              // onChange={handleChange}
              placeholder="Type player's name"
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: (provided: any) => ({
                  ...provided,
                  padding: "4px",
                  // border: head === 1 ? "2px solid green" : "2px solid gray",
                  cursor: "pointer",
                  borderRadius: "8px",
                  outline: "none",
                  // ":hover": {
                  //   borderColor: head === 1 ? "green" : "gray",
                  // },
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
                  // color: head === 1 ? "green" : "gray",
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
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/novak.png"
              width={200}
              height={200}
              quality={100}
              alt={""}
              className={`bg-contain rounded-full w-[80px] sm:w-[120px] lg:w-[200px] h-[80px] sm:h-[120px] lg:h-[200px] select-none border-4 
          
        `}
            />
            <Select
              className="w-[160px] md:w-[280px] font-semibold text-base select-none outline-none"
              isSearchable={true}
              isClearable={true}
              defaultValue={players[0]}
              options={players}
              // onChange={handleChange}
              placeholder="Type player's name"
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: (provided: any) => ({
                  ...provided,
                  padding: "4px",
                  // border: head === 1 ? "2px solid green" : "2px solid gray",
                  cursor: "pointer",
                  borderRadius: "8px",
                  outline: "none",
                  // ":hover": {
                  //   borderColor: head === 1 ? "green" : "gray",
                  // },
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
                  // color: head === 1 ? "green" : "gray",
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
        <ul className="flex justify-center gap-4 h-7 border-b border-gray">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`font-semibold text-lg select-none ${
                activeTab === tab
                  ? "text-green underline underline-offset-[6px]"
                  : "text-gray"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>

        {activeTab === "Bio" && (
          <div className="flex flex-col gap-6">
            <div className="w-full flex flex-col gap-3 px-4 py-5 border border-gray rounded-lg">
              <div className="flex justify-between">
                <p className="font-semibold text-base text-darkerGray select-none">
                  rank
                </p>
                <p className="font-regular text-base text-darkerGray select-none">
                  Rank
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  rank
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-base text-darkerGray select-none">
                  rank
                </p>
                <p className="font-regular text-base text-darkerGray select-none">
                  Rank
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  rank
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-base text-darkerGray select-none">
                  age
                </p>
                <p className="font-regular text-base text-darkerGray select-none">
                  Age
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  age
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-base text-darkerGray select-none">
                  country
                </p>
                <p className="font-regular text-base text-darkerGray select-none">
                  Country
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  country
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-base text-darkerGray select-none">
                  weight
                </p>
                <p className="font-regular text-base text-darkerGray select-none">
                  Weight
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  weight
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-base text-darkerGray select-none">
                  height
                </p>
                <p className="font-regular text-base text-darkerGray select-none">
                  Height
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  height
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-base text-darkerGray select-none">
                  lastActive
                </p>
                <p className="font-regular text-base text-darkerGray select-none">
                  Last Active
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  lastActive
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-base text-darkerGray select-none">
                  status
                </p>
                <p className="font-regular text-base text-darkerGray select-none">
                  Status
                </p>
                <p className="font-semibold text-base text-darkerGray select-none">
                  status
                </p>
              </div>
            </div>
            <BarChart />
          </div>
        )}

        {activeTab === "Charts" && <Graph />}
        {activeTab === "Match History" && (
          <div>
            <H2HMatchHistoryTable />
          </div>
        )}
      </div>
    </div>
  );
}
