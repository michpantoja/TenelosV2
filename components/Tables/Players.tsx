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
  const recordType = [
    {
      id: 1,
      name: "Overall",
    },
    {
      id: 2,
      name: "Hard",
    },
    {
      id: 3,
      name: "Clay",
    },
    {
      id: 4,
      name: "Grass",
    },
    {
      id: 5,
      name: "ATP",
    },
  ];

  const tableHead = ["#", "Name", "Overall", "Overall Peak"];

  const tableRows = [
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
    },
    {
      rank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      overall: "3093",
      overallPeak: "3092(2023-09)",
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
      <div className="flex flex-col sticky top-16 z-20 pb-2.5 bg-[#FFFFFF] gap-2.5">
        <div className="flex gap-2.5 pt-3">
          {recordType.map((item) => (
            <div
              key={item.id}
              className={`text-base font-semibold cursor-pointer select-none ${
                toggleRecords === item.id
                  ? "text-green underline underline-offset-2"
                  : "text-darkGray"
              }`}
              onClick={() => seToggleRecords(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
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
      </div>
      <table className="mt-2.5 w-full min-w-min table-auto text-left bg-[#FFFFFF]">
        <thead>
          <tr className="sticky top-[160px] z-10 border-b-2 border-b-gray">
            {tableHead.map((head, index) => (
              <th
                key={index}
                className="bg-[#FFFFFF] px-0.5 py-2 xs:p-2 select-none"
              >
                <div
                  className={` w-full flex justify-between items-center gap-0.5 xs:gap-1 text-xs text-darkGray select-none`}
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
            ({ rank, countryCode, name, overall, overallPeak }, index) => {
              const isLast = index === tableRows.length - 0;
              const classes = isLast
                ? "px-0.5 xs:px-2 py-2 xs:py-4"
                : "px-0.5 xs:px-2 py-2 xs:py-4 border-b-2 border-lightGray";

              return (
                <tr key={name}>
                  <td className={`w-[50px] ${classes}`}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {rank}
                    </p>
                  </td>
                  <td className={`w-[500px] ${classes}`}>
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
                  <td className={`w-[100px] ${classes}`}>
                    <p className="font-semibold text-sm select-none text-darkerGray ">
                      {overall}
                    </p>
                  </td>
                  <td className={`w-[120px] ${classes}`}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {overallPeak}
                    </p>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <Pagination
        dataPerPage={DataPerPage}
        totalData={tableRows.length}
        paginate={paginate}
      />
    </div>
  );
}
