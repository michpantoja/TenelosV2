"use client";

import React, { useState } from "react";
import DropdownButton from "../DropdownButton";
import { IoChevronDownOutline } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";
import ReactCountryFlag from "react-country-flag";
import Pagination from "../Pagination";

export default function LiveRatingsTable() {
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

  const tableHead = [
    "Rank",
    <LuArrowUpDown key={""} color="#5F5F5F" size={13} />,
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
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
      peak: "3092",
      age: "36",
    },
    {
      rank: "1",
      rankChanges: "",
      bestRank: "1",
      countryCode: "US",
      name: "Djokovic Novac",
      rating: "3093",
      ratingChanges: "",
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
      <div className="flex flex-col sticky top-0 z-20 pb-2.5 bg-[#FFFFFF] gap-2.5">
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
        <div className="flex gap-2.5">
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
      <table className="mt-2.5 w-full min-w-max table-auto text-left bg-[#FFFFFF]">
        <thead>
          <tr className="sticky top-24 z-10 border-b-2 border-b-gray" >
            {tableHead.map((head, index) => (
              <th
                key={index}
                className="cursor-pointer bg-[#FFFFFF] p-2 select-none"
                onClick={() => setIsFiltered(!isFiltered)}
              >
                <div className="w-full flex justify-between items-center gap-1 text-xs text-darkGray cursor-pointer select-none">
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
          {/* <tr>
            <hr className="max-w-full border-b-2 border-b-gray"></hr>
          </tr> */}
        </thead>
        <tbody>
          {currentData?.map(
            (
              {
                rank,
                rankChanges,
                bestRank,
                countryCode,
                name,
                rating,
                ratingChanges,
                peak,
                age,
              },
              index
            ) => {
              const isLast = index === tableRows.length - 1;
              const classes = isLast
                ? "px-2 py-4"
                : "px-2 py-4 border-b-2 border-lightGray";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {rank}
                    </p>
                  </td>
                  <td className={classes}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {rankChanges}
                    </p>
                  </td>
                  <td className={classes}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {bestRank}
                    </p>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-2">
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
                  <td className={classes}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {rating}
                    </p>
                  </td>
                  <td className={classes}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {ratingChanges}
                    </p>
                  </td>
                  <td className={classes}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {peak}
                    </p>
                  </td>
                  <td className={classes}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {age}
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
