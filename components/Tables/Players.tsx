"use client";

import React, { useState } from "react";
import DropdownButton from "../DropdownButton";
import { IoChevronDownOutline } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";
import ReactCountryFlag from "react-country-flag";
import Pagination from "../Pagination";

export default function PlayersTable() {
  const [toggleRecords, seToggleRecords] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [DataPerPage, setDataPerPage] = useState(20);

  const tableHead = [
    "#",
    "Name",
    "ATP",
    "ATP Peak",
    "Overall",
    "Overall Peak",
    "Hard",
    "Hard Peak",
    "Clay",
    "Clay Peak",
    "Grass",
    "Grass Peak",
  ];

  const tableRows = [
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      atp: "3093",
      atpPeak: "3092(2023-09)",
      overall: "3093",
      overallPeak: "3092(2023-09)",
      hard: "3093",
      hardPeak: "3092(2023-09)",
      clay: "3093",
      clayPeak: "3092(2023-09)",
      grass: "3093",
      grassPeak: "3092(2023-09)",
    },
  ];

  const handleCountryChange = (newCountryChange: number) => {
    // setDataPerPage(newCountryChange);
    setCurrentPage(1);
  };

  const handleDataPerPageChange = (newDataPerPage: number) => {
    setDataPerPage(newDataPerPage);
    setCurrentPage(1);
  };

  //Get index of the last Data
  const indexOfLastData = currentPage * DataPerPage;
  const indexOfFirstData = indexOfLastData - DataPerPage;
  const currentData = tableRows.slice(indexOfFirstData, indexOfLastData);

  //Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center sticky top-[67.5px] md:top-[67px] lg:top-[73px] z-20 pb-2.5 bg-[#FFFFFF] gap-2.5">
        <div className="w-full flex flex-wrap gap-1 sm:gap-2.5">
          <DropdownButton
            options={[{ value: "All Countries", label: "All Countries" }]}
            onChange={handleCountryChange}
          />
          <DropdownButton
            options={[
              { value: "20", label: "20 per page" },
              { value: "50", label: "50 per page" },
              { value: "100", label: "100 per page" },
            ]}
            onChange={handleDataPerPageChange}
          />
        </div>
        <div className="flex gap-4 self-end">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-hard rounded-sm"></div>
            <p className="text-xs font-semibold text-gray select-none">Hard</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-clay rounded-sm"></div>
            <p className="text-xs font-semibold text-gray select-none">Clay</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-grass rounded-sm"></div>
            <p className="text-xs font-semibold text-gray select-none">Grass</p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto max-h-[500px]">
        <table className="mt-2.5 w-full min-w-max table-auto text-left bg-[#FFFFFF]">
          <thead>
            <tr className="sticky top-0 md:-top-1 z-10 border-b-2 border-b-gray">
              {tableHead.map((head, index) => (
                <th key={index} className="bg-[#FFFFFF] p-2 select-none">
                  <div
                    className={`w-full flex justify-between items-center gap-0.5 xs:gap-1 text-xs text-darkGray select-none`}
                  >
                    {head}
                  </div>
                </th>
              ))}
            </tr>
            {/* <tr>
            <hr className="max-w-full border-b-2 border-b-gray"></hr>
          </tr> */}
          </thead>
          <tbody>
            {currentData?.map(
              (
                {
                  rank,
                  countryCode,
                  name,
                  atp,
                  atpPeak,
                  overall,
                  overallPeak,
                  hard,
                  hardPeak,
                  clay,
                  clayPeak,
                  grass,
                  grassPeak,
                },
                index
              ) => {
                const isLast = index === tableRows.length - 0;
                const classes = isLast
                  ? "p-2 xs:py-4"
                  : "p-2 xs:py-4 border-b-2 border-lightGray";

                return (
                  <tr key={name}>
                    <td className={`${classes}`}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {rank}
                      </p>
                    </td>
                    <td className={`${classes}`}>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                        <ReactCountryFlag
                          countryCode={countryCode}
                          style={{
                            // filter: "drop-shadow(0 0 0.12rem black)",
                            userSelect: "none",
                          }}
                          svg
                        />
                        <p className="font-semibold text-sm select-none text-darkerGray hover:text-green cursor-pointer">
                          {name}
                        </p>
                      </div>
                    </td>
                    <td className={`${classes}`}>
                      <p className="px-2 py-1 bg-atp rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center ">
                        {atp}
                      </p>
                    </td>
                    <td className={`${classes}`}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {atpPeak}
                      </p>
                    </td>
                    <td className={`${classes}`}>
                      <p className="px-2 py-1 bg-overall rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center ">
                        {overall}
                      </p>
                    </td>
                    <td className={`${classes}`}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {overallPeak}
                      </p>
                    </td>
                    <td className={`${classes}`}>
                      <p className="px-2 py-1 bg-hard rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center">
                        {hard}
                      </p>
                    </td>
                    <td className={`${classes}`}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {hardPeak}
                      </p>
                    </td>
                    <td className={`${classes}`}>
                      <p className="px-2 py-1 bg-clay rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center">
                        {clay}
                      </p>
                    </td>
                    <td className={`${classes}`}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {clayPeak}
                      </p>
                    </td>
                    <td className={`${classes}`}>
                      <p className="px-2 py-1 bg-grass rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center">
                        {grass}
                      </p>
                    </td>
                    <td className={`${classes}`}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {grassPeak}
                      </p>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        dataPerPage={DataPerPage}
        totalData={tableRows.length}
        paginate={paginate}
      />
    </div>
  );
}
