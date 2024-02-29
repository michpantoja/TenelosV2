"use client";

import React, { useState } from "react";
import DropdownButton from "../DropdownButton";
import { IoVideocamOutline, IoVideocam } from "react-icons/io5";
import Pagination from "../Pagination";
import PlayHighlight from "../PlayHighlight";
import { useRouter } from "next/navigation";

export default function PlayerMatchHistoryTable() {
  const router = useRouter();
  const [isFiltered, setIsFiltered] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [DataPerPage, setDataPerPage] = useState(6);

  const tableHead = [
    "Date",
    "Result",
    "Player",
    "Player Overall Rating",
    "Player Surface ELO",
    "Opponent",
    "Opp. Overall Rating",
    "Opp. Surface ELO",
    "Score",
    "Tournament",
    "Round",
    "",
  ];

  const tableRows = [
    {
      date: "2022-05",
      embedId: "NwcjE6hhc-c?si=yxLwYlDZbKtjb64X",
      player: "Djokovic Novac",
      playerOR: "3093",
      playerSE: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      opponent: "Nadal Rafael",
      opponentOR: "3093",
      opponentSE: "3092",
      tournament: "Australian Open",
      round: " QF",
      h2h: "/h2h",
      match: "W",
    },
    {
      date: "2022-05",
      embedId: "https://www.youtube.com/watch?v=NwcjE6hhc-c",
      player: "Djokovic Novac",
      playerOR: "3093",
      playerSE: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      opponent: "Nadal Rafael",
      opponentOR: "3093",
      opponentSE: "3092",
      tournament: "Australian Open",
      round: " QF",
      h2h: "/h2h",
      match: "L",
    },
    {
      date: "2022-05",
      embedId: "https://www.youtube.com/watch?v=NwcjE6hhc-c",
      player: "Djokovic Novac",
      playerOR: "3093",
      playerSE: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      opponent: "Nadal Rafael",
      opponentOR: "3093",
      opponentSE: "3092",
      tournament: "Australian Open",
      round: " QF",
      h2h: "/h2h",
      match: "W",
    },
    {
      date: "2022-05",
      embedId: "",
      player: "Djokovic Novac",
      playerOR: "3093",
      playerSE: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      opponent: "Nadal Rafael",
      opponentOR: "3093",
      opponentSE: "3092",
      tournament: "Australian Open",
      round: " QF",
      h2h: "/h2h",
      match: "W",
    },
    {
      date: "2022-05",
      embedId: "https://www.youtube.com/watch?v=NwcjE6hhc-c",
      player: "Djokovic Novac",
      playerOR: "3093",
      playerSE: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      opponent: "Nadal Rafael",
      opponentOR: "3093",
      opponentSE: "3092",
      tournament: "Australian Open",
      round: " QF",
      h2h: "/h2h",
      match: "L",
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
            <tr className="sticky top-0 z-10 border-b-2 border-b-gray">
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
                  match,
                  player,
                  playerOR,
                  playerSE,
                  score,
                  opponent,
                  opponentOR,
                  opponentSE,
                  tournament,
                  round,
                  h2h,
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
                      <div className="flex justify-end items-center gap-2 select-none">
                        {embedId && (
                            <a onClick={() => setShowHighlight(true)}>
                                <IoVideocamOutline color="green" size={18} className="cursor-pointer"/>
                            </a>
                        )}
                        <PlayHighlight
                            isOpen={showHighlight}
                            setter={() => setShowHighlight(false)}
                            embedId={embedId}
                        />
                        {match === "W" ? (
                          <p className="w-8 h-8 flex items-center justify-center rounded-lg font-semibold text-sm select-none text-darkerGray bg-green/50">
                            W
                          </p>
                        ) : (
                          <p className="w-8 h-8 flex items-center justify-center rounded-lg font-semibold text-sm select-none text-darkerGray bg-[#F38689]">
                            L
                          </p>
                        )}
                      </div>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-green hover:underline cursor-pointer">
                        {player}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {playerOR}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {playerSE}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-green hover:underline cursor-pointer">
                        {opponent}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {opponentSE}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {opponentOR}
                      </p>
                    </td>
                    <td className={classes}>
                      <p className="font-semibold text-sm select-none text-darkerGray">
                        {score}
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
                    <td className={classes}>
                      <div
                        className="w-fit border-2 border-gray hover:bg-green/10 hover:border-green hover:text-green px-4 py-1 text-center rounded-lg font-semibold text-sm select-none text-gray uppercase cursor-pointer"
                        onClick={() => router.push(`${h2h}`)}
                      >
                        H2H
                      </div>
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
