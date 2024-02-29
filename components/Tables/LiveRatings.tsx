"use client";

import React, { useState } from "react";
import DropdownButton from "../DropdownButton";
import { IoChevronDownOutline } from "react-icons/io5";
import ReactCountryFlag from "react-country-flag";
import Pagination from "../Pagination";
import { NegativeELO, PositiveELO } from "../ELOLabels";

function Table({
  tableHead,
  currentData,
  playBgColor,
}: {
  tableHead: string[];
  currentData: any[];
  playBgColor: string;
}) {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <table className="mt-2.5 w-full min-w-min table-auto text-left bg-[#FFFFFF]">
      <thead>
        <tr className="border-b-2 border-b-gray">
          {tableHead.map((head, index) => (
            <th
              key={index}
              className="cursor-pointer bg-[#FFFFFF] px-0.5 py-2 xs:p-2 select-none"
              onClick={() => setIsFiltered(!isFiltered)}
            >
              <div className="w-full flex justify-between items-center gap-0.5 xs:gap-1 text-xs text-darkGray cursor-pointer select-none">
                {head}
                <IoChevronDownOutline
                  color="green"
                  className={`transition-transform duration-300 ease-in-out ${
                    isFiltered ? "rotate-180" : ""
                  }`}
                />
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentData?.map(
          (
            {
              rank,
              rankDiff,
              bestRank,
              countryCode,
              name,
              rating,
              ratingDiff,
              peak,
              age,
            },
            index
          ) => {
            const isLast = index === currentData.length - 0;
            const classes = isLast
              ? "px-0.5 xs:px-2 py-2 xs:py-4"
              : "px-0.5 xs:px-2 py-2 xs:py-4 border-b-2 border-lightGray";

            return (
              <tr key={name}>
                <td className={classes}>
                  <p className="font-semibold text-sm select-none text-darkerGray">
                    {rank}
                  </p>
                </td>
                <td className={classes}>
                  {rankDiff > 0 ? (
                    <PositiveELO elo={rankDiff} />
                  ) : rankDiff < 0 ? (
                    <NegativeELO elo={rankDiff} />
                  ) : (
                    <>{""}</>
                  )}
                </td>
                <td className={classes}>
                  <p className="font-semibold text-sm select-none text-darkerGray">
                    {bestRank}
                  </p>
                </td>
                <td className={classes}>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                    <ReactCountryFlag
                      countryCode={countryCode}
                      style={{
                        // filter: "drop-shadow(0 0 0.12rem black)",
                        userSelect: "none",
                      }}
                      svg
                    />
                    <p className="font-semibold text-sm select-none text-green hover:underline cursor-pointer">
                      {name}
                    </p>
                  </div>
                </td>
                <td className={classes}>
                  <p
                    className={`w-fit px-4 py-1 bg-${playBgColor} rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center`}
                  >
                    {rating}
                  </p>
                </td>
                <td className={classes}>
                  {ratingDiff > 0 ? (
                    <PositiveELO elo={ratingDiff} />
                  ) : ratingDiff < 0 ? (
                    <NegativeELO elo={ratingDiff} />
                  ) : (
                    <>{""}</>
                  )}
                </td>
                <td className={classes}>
                  <p className="font-semibold text-sm select-none text-darkerGray">
                    {peak}
                  </p>
                </td>
                <td className={classes}>
                  <p className="font-semibold text-sm select-none text-darkerGray max-sm:text-right">
                    {age}
                  </p>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}

export default function LiveRatingsTable() {
  const [toggleRecords, seToggleRecords] = useState(1);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [DataPerPage, setDataPerPage] = useState(20);
  const recordType = [
    {
      id: 1,
      name: "Overall",
      playBgColor: "overall",
    },
    {
      id: 2,
      name: "Hard",
      playBgColor: "hard",
    },
    {
      id: 3,
      name: "Clay",
      playBgColor: "clay",
    },
    {
      id: 4,
      name: "Grass",
      playBgColor: "grass",
    },
  ];

  const tableHead = [
    "Rank",
    "↑↓",
    "Best Rank",
    "Name",
    "Rating",
    "+/-",
    "Peak",
    "Age",
  ];

  const tableRows = [
    {
      rank: "1",
      rankDiff: 2,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 1,
      peak: "3092",
      age: "36",
    },
    {
      rank: "2",
      rankDiff: -3,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 3,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankDiff: 0,
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingDiff: 0,
      peak: "3092",
      age: "36",
    },
  ];

  const handleYearChange = (newYearChange: number) => {
    // setDataPerPage(newYearChange);
    setCurrentPage(1);
  };

  const handleDateChange = (newDateChange: number) => {
    // setDataPerPage(newDateChange);
    setCurrentPage(1);
  };

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
      <div className="flex flex-col pb-2.5 bg-[#FFFFFF] gap-2.5">
        <div className="flex gap-2.5">
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
            options={[
              { value: "2024", label: "2024" },
              { value: "2023", label: "2023" },
              { value: "2022", label: "2022" },
              { value: "2021", label: "2021" },
              { value: "2020", label: "2020" },
            ]}
            onChange={handleYearChange}
          />
          <DropdownButton
            options={[
              { value: "2014/01/14", label: "2014/01/14" },
              { value: "2014/01/07", label: "2014/01/07" },
            ]}
            onChange={handleDateChange}
          />
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
      <div className="overflow-x-auto max-lg:max-h-[500px]">
        <Table
          tableHead={tableHead}
          currentData={currentData}
          playBgColor={recordType[toggleRecords - 1].playBgColor}
        />
      </div>
      <Pagination
        dataPerPage={DataPerPage}
        totalData={tableRows.length}
        paginate={paginate}
      />
    </div>
  );
}
