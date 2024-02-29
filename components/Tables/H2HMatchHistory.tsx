"use client";

import React, { useState } from "react";
import DropdownButton from "../DropdownButton";
import { IoVideocamOutline, IoVideocam } from "react-icons/io5";
import Pagination from "../Pagination";
import PlayHighlight from "../PlayHighlight";

export default function H2HMatchHistoryTable() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [DataPerPage, setDataPerPage] = useState(6);

  const tableHead = [
    "Date",
    "",
    "Winner",
    "Winner Overall Rating",
    "Winner Surface ELO",
    "Score",
    "Loser",
    "Loser Overall Rating",
    "Loser Surface ELO",
    "Tournament",
    "Round",
  ];

  const tableRows = [
    {
      date: "2022-05",
      embedId: "NwcjE6hhc-c?si=yxLwYlDZbKtjb64X",
      winner: "Djokovic Novac",
      winnerOR: "3093",
      winnerSE: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      loser: "Nadal Rafael",
      loserOR: "3093",
      loserSE: "3092",
      tournament: "Australian Open",
      round: " QF",
    },
    {
      date: "2022-05",
      embedId: "https://www.youtube.com/watch?v=NwcjE6hhc-c",
      winner: "Djokovic Novac",
      winnerOR: "3093",
      winnerSE: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      loser: "Nadal Rafael",
      loserOR: "3093",
      loserSE: "3092",
      tournament: "Australian Open",
      round: " QF",
    },
    {
      date: "2022-05",
      embedId: "https://www.youtube.com/watch?v=NwcjE6hhc-c",
      winner: "Djokovic Novac",
      winnerOR: "3093",
      winnerSE: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      loser: "Nadal Rafael",
      loserOR: "3093",
      loserSE: "3092",
      tournament: "Australian Open",
      round: " QF",
    },
    {
      date: "2022-05",
      embedId: "https://www.youtube.com/watch?v=NwcjE6hhc-c",
      winner: "Djokovic Novac",
      winnerOR: "3093",
      winnerSE: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      loser: "Nadal Rafael",
      loserOR: "3093",
      loserSE: "3092",
      tournament: "Australian Open",
      round: " QF",
    },
    {
      date: "2022-05",
      embedId: "https://www.youtube.com/watch?v=NwcjE6hhc-c",
      winner: "Djokovic Novac",
      winnerOR: "3093",
      winnerSE: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      loser: "Nadal Rafael",
      loserOR: "3093",
      loserSE: "3092",
      tournament: "Australian Open",
      round: " QF",
    },
  ];
  const handleSurfaceChange = () => {};

  //Get index of the last Data
  const indexOfLastData = currentPage * DataPerPage;
  const indexOfFirstData = indexOfLastData - DataPerPage;
  const currentData = tableRows.slice(indexOfFirstData, indexOfLastData);

  //Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-xl text-darkerGray select-none">
          Match History
        </p>
        <div className="flex justify-between items-center">
          <DropdownButton
            options={[
              { value: "All Surface", label: "All Surface" },
              { value: "Hard", label: "Hard" },
              { value: "Clay", label: "Clay" },
              { value: "Grass", label: "Grass" },
            ]}
            onChange={() => {
              handleSurfaceChange;
            }}
          />
          <div className="flex gap-4">
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
      </div>
      <div className="overflow-x-auto max-lg:max-h-[500px]">
        <table className="mt-2.5 w-full min-w-max table-auto text-left bg-[#FFFFFF]">
          <thead>
            <tr className="border-b-2 border-b-gray">
              {tableHead.map((head, index) => (
                <th
                  key={index}
                  className="bg-[#FFFFFF] px-2 py-2 xs:p-2 select-none"
                  onClick={() => setIsFiltered(!isFiltered)}
                >
                  <div className="w-full text-xs text-darkGray select-none">
                    {head}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData?.map(
              (
                {
                  date,
                  embedId,
                  winner,
                  winnerOR,
                  winnerSE,
                  score,
                  loser,
                  loserOR,
                  loserSE,
                  tournament,
                  round,
                },
                index
              ) => {
                const isLast = index === tableRows.length - 0;
                const classes = isLast
                  ? "px-2 py-6"
                  : "px-2 py-6 border-b-2 border-lightGray";

                return (
                  <tr key={date}>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {date}
                      </p>
                    </td>
                    <td className={classes}>
                      <div className="font-semibold text-sm select-none cursor-pointer">
                        <a onClick={() => setShowHighlight(true)}>
                          <IoVideocamOutline color="green" size={18} />
                        </a>
                        <PlayHighlight
                          isOpen={showHighlight}
                          setter={() => setShowHighlight(false)}
                          embedId={embedId}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-green hover:underline cursor-pointer">
                        {winner}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {winnerOR}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {winnerSE}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {score}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-green hover:underline cursor-pointer">
                        {loser}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {loserSE}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {loserOR}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {tournament}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {round}
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
