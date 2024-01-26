"use client";

import React, { useState } from "react";
import DropdownButton from "../DropdownButton";
import { IoChevronDownOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Pagination from "../Pagination";

export default function TournamentsTable() {
  const [isFiltered, setIsFiltered] = useState(false);
  const router = useRouter();
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [DataPerPage, setDataPerPage] = useState(20);

  const tableHead = ["Date", "Tournament", "Surface", ""];

  const tableRows = [
    {
      date: "2022-05",
      tournament: "Australian Open",
      surface: "Hard",
      tournamentId: "/tournament1",
    },
    {
      date: "2022-05",
      tournament: "Australian Open",
      surface: "Hard",
      tournamentId: "/tournament2",
    },
    {
      date: "2022-05",
      tournament: "Australian Open",
      surface: "Hard",
      tournamentId: "/tournament3",
    },
    {
      date: "2022-05",
      tournament: "Australian Open",
      surface: "Hard",
      tournamentId: "/tournament4",
    },
    {
      date: "2022-05",
      tournament: "Australian Open",
      surface: "Hard",
      tournamentId: "/tournament5",
    },
    {
      date: "2022-05",
      tournament: "Australian Open",
      surface: "Hard",
      tournamentId: "/tournament6",
    },
  ];

  const handleYearChange = (newYearChange: number) => {
    // setDataPerPage(newYearChange);
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
        <div className="w-full flex flex-wrap gap-1 sm:gap-2.5 pt-3">
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
        </div>
      </div>
      <table className="mt-2.5 w-full min-w-min table-auto text-left bg-[#FFFFFF]">
        <thead>
          <tr className="sticky top-[125px] z-10 border-b-2 border-b-gray">
            {tableHead.map((head, index) => (
              <th key={index} className="bg-[#FFFFFF] px-0.5 py-2 xs:p-2">
                <div
                  className="w-full flex justify-between items-center gap-0.5 xs:gap-1 text-xs text-darkGray cursor-pointer select-none "
                  onClick={() => setIsFiltered(!isFiltered)}
                >
                  {head}
                  {index !== tableHead.length - 1 && (
                    <IoChevronDownOutline
                      color="green"
                      className={`transition-transform duration-300 ease-in-out ${
                        isFiltered ? "rotate-180" : ""
                      }`}
                    />
                  )}
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
            ({ date, tournament, surface, tournamentId }, index) => {
              const isLast = index === tableRows.length - 0;
              const classes = isLast
                ? "px-0.5 xs:px-2 py-2 xs:py-4"
                : "px-0.5 xs:px-2 py-2 xs:py-4 border-b-2 border-lightGray";

              return (
                <tr key={date}>
                  <td className={`w-[100px] ${classes}`}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {date}
                    </p>
                  </td>
                  <td className={`w-[500px] ${classes}`}>
                    <p className="font-semibold text-sm select-none text-darkerGray ">
                      {tournament}
                    </p>
                  </td>
                  <td className={`w-[120px] ${classes}`}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {surface}
                    </p>
                  </td>
                  <td className={`w-[90px] ${classes}`}>
                    <div
                      className="w-fit border-2 border-green hover:bg-green hover:text-[#FFFFFF] px-2 text-center rounded-lg font-semibold text-sm select-none text-green uppercase cursor-pointer"
                      onClick={() => router.push(`/tournaments/${tournamentId}`)}
                    >
                      Results
                    </div>
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
