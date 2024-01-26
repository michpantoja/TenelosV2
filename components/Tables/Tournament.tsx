"use client"

import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useRouter } from "next/navigation";

export default function TournamentTable() {
  const router = useRouter();
  const tableHead = [
    "Round",
    "Winner Name",
    "Winner ELO",
    "Surf. ELO",
    "Loser Name",
    "Loser ELO",
    "Surf. ELO",
    "Score",
    "",
  ];
  const tableRows = [
    {
      round: "QF",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "F",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "F",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "QF",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "QF",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "QF",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R16",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R16",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R16",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R16",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R32",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R32",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "QF",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
  ];

  // Sort table rows by round
  tableRows.sort((a, b) => a.round.localeCompare(b.round));

  return (
    <div className="overflow-auto max-lg:max-h-[500px]">
      <table className="mt-2.5 w-full min-w-max table-auto text-left bg-[#FFFFFF]">
        <thead>
          <tr className="sticky top-0 z-10 border-b-2 border-b-gray">
            {tableHead.map((head, index) => (
              <th
                key={index}
                className="bg-[#FFFFFF] px-0.5 py-2 xs:p-2 select-none"
              >
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
          {tableRows?.map(
            (
              {
                round,
                winnerCountry,
                winnerName,
                winnerElo,
                winnerSurfElo,
                loserCountry,
                loserName,
                loserElo,
                loserSurfElo,
                score,
                h2h,
              },
              index
            ) => {
              return (
                <tr
                  key={`${round}-${index}`}
                  className={
                    index < tableRows.length - 1 &&
                    round !== tableRows[index + 1].round
                      ? "border-b-2 border-lightGray"
                      : ""
                  }
                >
                  <td className="px-0.5 xs:px-2 py-2 xs:py-4">
                    <p className="font-bold text-sm select-none text-darkerGray">
                      {round}
                    </p>
                  </td>
                  <td className="px-0.5 xs:px-2 py-2 xs:py-4">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <ReactCountryFlag
                        countryCode={winnerCountry}
                        style={{
                          // filter: "drop-shadow(0 0 0.12rem black)",
                          userSelect: "none",
                        }}
                        svg
                      />
                      <p className="font-semibold text-sm select-none text-darkerGray hover:text-green cursor-pointer">
                        {winnerName}
                      </p>
                    </div>
                  </td>
                  <td className="px-0.5 xs:px-2 py-2 xs:py-4">
                    <p className="font-semibold text-sm select-none text-darkerGray ">
                      {winnerElo}
                    </p>
                  </td>
                  <td className="px-0.5 xs:px-2 py-2 xs:py-4">
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {winnerSurfElo}
                    </p>
                  </td>
                  <td className="px-0.5 xs:px-2 py-2 xs:py-4">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <ReactCountryFlag
                        countryCode={loserCountry}
                        style={{
                          // filter: "drop-shadow(0 0 0.12rem black)",
                          userSelect: "none",
                        }}
                        svg
                      />
                      <p className="font-semibold text-sm select-none text-darkerGray hover:text-green cursor-pointer">
                        {loserName}
                      </p>
                    </div>
                  </td>
                  <td className="px-0.5 xs:px-2 py-2 xs:py-4">
                    <p className="font-semibold text-sm select-none text-darkerGray ">
                      {loserElo}
                    </p>
                  </td>
                  <td className="px-0.5 xs:px-2 py-2 xs:py-4">
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {loserSurfElo}
                    </p>
                  </td>
                  <td className="px-0.5 xs:px-2 py-2 xs:py-4">
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {score}
                    </p>
                  </td>
                  <td className="px-0.5 xs:px-2 py-2 xs:py-4">
                    <div
                      className="w-fit border-2 border-green hover:bg-green hover:text-[#FFFFFF] px-2 text-center rounded-lg font-semibold text-sm select-none text-green uppercase cursor-pointer"
                      onClick={() =>
                        router.push(`/h2h`)
                      }
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
  );
}
