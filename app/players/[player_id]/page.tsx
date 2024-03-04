"use client";

import News from "@/components/News";
import PlayerMatchHistoryTable from "@/components/Tables/PlayerMatchHistory";
import Image from "next/image";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function PlayerProfile() {
  const [activeTab, setActiveTab] = useState("Bio");
  const tabs = ["Bio", "Charts", "Match History"];

  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full h-[380px] md:h-[450px] bg-gradient-to-r from-[#84C1B1] to-[#C0C3C2] rounded-b-lg px-4 lg:px-10 py-8 flex items-end gap-12">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-green">Novak Djokovic</h1>
          <p className="font-semibold text-darkerGray text-sm">Player Data:</p>
          <div className="overflow-x-auto w-full xl:w-fit border border-darkerGray rounded-lg p-4">
            <div className="w-fit min-w-max flex">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Overall Rank:
                  </p>
                  <div className="w-3/5 self-center">
                    <p className="w-fit px-2 py-1 bg-overall rounded-full font-semibold text-xs select-none text-[#FFFFFF] text-center ">
                      3213
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Peak Overall Rank:
                  </p>
                  <p className="w-3/5 rounded-full font-semibold text-xs select-none text-darkerGray">
                    1 (Sep 11 2011)
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Peak Overall Rating:
                  </p>
                  <p className="w-3/5 rounded-full font-semibold text-xs select-none text-darkerGray">
                    3216 (Jul 01 2016)
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pl-4 border-l border-gray">
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    ATP Rank:
                  </p>
                  <div className="w-3/5 self-center">
                    <p className="w-fit px-2 py-1 bg-atp rounded-full font-semibold text-xs select-none text-[#FFFFFF] text-center ">
                      3213
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Peak ATP Rank:
                  </p>
                  <p className="w-3/5 rounded-full font-semibold text-xs select-none text-darkerGray">
                    1 (Sep 11 2011)
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Peak ATP Rating:
                  </p>
                  <p className="w-3/5 rounded-full font-semibold text-xs select-none text-darkerGray">
                    3216 (Jul 01 2016)
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pl-4 border-l border-gray">
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Hard Rank:
                  </p>
                  <div className="w-3/5 self-center">
                    <p className="w-fit px-2 py-1 bg-hard rounded-full font-semibold text-xs select-none text-[#FFFFFF] text-center ">
                      3213
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Peak Hard Rank:
                  </p>
                  <p className="w-3/5 rounded-full font-semibold text-xs select-none text-darkerGray">
                    1 (Sep 11 2011)
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Peak Hard Rating:
                  </p>
                  <p className="w-3/5 rounded-full font-semibold text-xs select-none text-darkerGray">
                    3216 (Jul 01 2016)
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pl-4 border-l border-gray">
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Clay Rank:
                  </p>
                  <div className="w-3/5 self-center">
                    <p className="w-fit px-2 py-1 bg-clay rounded-full font-semibold text-xs select-none text-[#FFFFFF] text-center ">
                      3213
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Peak Clay Rank:
                  </p>
                  <p className="w-3/5 rounded-full font-semibold text-xs select-none text-darkerGray">
                    1 (Sep 11 2011)
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Peak Clay Rating:
                  </p>
                  <p className="w-3/5 rounded-full font-semibold text-xs select-none text-darkerGray">
                    3216 (Jul 01 2016)
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pl-4 border-l border-gray">
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Grass Rank:
                  </p>
                  <div className="w-3/5 self-center">
                    <p className="w-fit px-2 py-1 bg-grass rounded-full font-semibold text-xs select-none text-[#FFFFFF] text-center ">
                      3213
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Peak Grass Rank:
                  </p>
                  <p className="w-3/5 rounded-full font-semibold text-xs select-none text-darkerGray">
                    1 (Sep 11 2011)
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="w-2/5 text-xs font-medium text-darkerGray">
                    Peak Grass Rating:
                  </p>
                  <p className="w-3/5 rounded-full font-semibold text-xs select-none text-darkerGray">
                    3216 (Jul 01 2016)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-24 right-5 md:right-10 flex flex-col ">
          <Image
            src="/assets/novak.png"
            width={200}
            height={200}
            quality={100}
            alt={""}
            className="rounded-full w-[100px] md:w-[150px] lg:w-[180px] h-[100px] md:h-[150px] lg:h-[180px] border-4 border-green"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <ul className="min-w-max flex w-full gap-4 h-7 border-b border-gray">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={` font-semibold text-lg select-none cursor-pointer text-center ${
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
      </div>

      {activeTab === "Bio" && (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/4 h-fit flex flex-col gap-3 p-8 bg-lightGray rounded-lg">
            <p className="font-semibold text-darkerGray text-lg">
              Player Information
            </p>
            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-8">
              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between">
                  <p className="font-regular text-base text-darkerGray select-none">
                    Age
                  </p>
                  <p className="font-semibold text-base text-darkerGray select-none">
                    36
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-regular text-base text-darkerGray select-none">
                    Country
                  </p>
                  <p className="flex items-center gap-2 font-semibold text-base text-darkerGray select-none">
                    <ReactCountryFlag
                      countryCode="RS"
                      style={{
                        filter: "drop-shadow(0 0 0.12rem black)",
                        userSelect: "none",
                      }}
                      svg
                    />
                    Serbia
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-regular text-base text-darkerGray select-none">
                    Weight
                  </p>
                  <p className="font-semibold text-base text-darkerGray select-none">
                    77 kgs
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-regular text-base text-darkerGray select-none">
                    Height
                  </p>
                  <p className="font-semibold text-base text-darkerGray select-none">
                    188 cm
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between">
                  <p className="font-regular text-base text-darkerGray select-none">
                    Plays
                  </p>
                  <p className="font-semibold text-base text-darkerGray select-none">
                    Right-handed
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-regular text-base text-darkerGray select-none">
                    Last Active
                  </p>
                  <p className="font-semibold text-base text-darkerGray select-none">
                    Jan 28 2024
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-regular text-base text-darkerGray select-none">
                    Status
                  </p>
                  <p className="px-2 py-1 bg-green rounded-full font-semibold text-base select-none text-[#FFFFFF] text-center ">
                    Active
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <News />
          </div>
        </div>
      )}

      {activeTab === "Charts" && <div></div>}
      {activeTab === "Match History" && <>
      <div className="flex flex-col gap-6 p-8 bg-lightGray rounded-lg">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center max-lg:gap-2">
            <p className="font-semibold text-darkerGray text-lg">
              ELO Performance
            </p>
            <div className="flex gap-4 self-end">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-hard rounded-sm"></div>
                <p className="text-xs font-semibold text-gray select-none">
                  Hard
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-clay rounded-sm"></div>
                <p className="text-xs font-semibold text-gray select-none">
                  Clay
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-grass rounded-sm"></div>
                <p className="text-xs font-semibold text-gray select-none">
                  Grass
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p>Overall:</p>
                <p className="px-2 py-1 bg-overall rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center ">
                  3213
                </p>
              </div>
              <div className="flex justify-between">
                <p>Last 10:</p>
                <p className="px-2 py-1 bg-overall rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center ">
                  3213
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p>Hard:</p>
                <p className="px-2 py-1 bg-hard rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center ">
                  3213
                </p>
              </div>
              <div className="flex justify-between">
                <p>Last 10:</p>
                <p className="px-2 py-1 bg-hard rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center ">
                  3213
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p>Clay:</p>
                <p className="px-2 py-1 bg-clay rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center ">
                  3213
                </p>
              </div>
              <div className="flex justify-between">
                <p>Last 10:</p>
                <p className="px-2 py-1 bg-clay rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center ">
                  3213
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p>Grass:</p>
                <p className="px-2 py-1 bg-grass rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center ">
                  3213
                </p>
              </div>
              <div className="flex justify-between">
                <p>Last 10:</p>
                <p className="px-2 py-1 bg-grass rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center ">
                  3213
                </p>
              </div>
            </div>
          </div>
        </div>
        <PlayerMatchHistoryTable />
      </>
      }
    </div>
  );
}
