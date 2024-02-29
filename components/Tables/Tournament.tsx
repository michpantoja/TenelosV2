"use client";

import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useRouter } from "next/navigation";
import { NegativeELO, PositiveELO } from "../ELOLabels";

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
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "F",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "F",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "QF",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "QF",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "QF",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R16",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R16",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R16",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R16",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R32",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "R32",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
      score: "6-2 4-6 6-2 7-6(4)",
      h2h: "/h2h",
    },
    {
      round: "QF",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerEloDiff: 1,
      winnerSurfElo: "3092",
      winnerSurfEloDiff: 1,
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserEloDiff: -1,
      loserSurfElo: "3092",
      loserSurfEloDiff: -1,
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
              <th key={index} className="bg-[#FFFFFF] p-2 select-none">
                <div
                  className={`w-full flex justify-between items-center gap-0.5 xs:gap-1 text-xs text-darkGray select-none`}
                >
                  {head}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows?.map(
            (
              {
                round,
                winnerCountry,
                winnerName,
                winnerElo,
                winnerEloDiff,
                winnerSurfElo,
                winnerSurfEloDiff,
                loserCountry,
                loserName,
                loserElo,
                loserEloDiff,
                loserSurfElo,
                loserSurfEloDiff,
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
                  <td className="p-2">
                    <p className="font-bold text-sm select-none text-darkerGray">
                      {round}
                    </p>
                  </td>
                  <td className="p-2">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <ReactCountryFlag
                        countryCode={winnerCountry}
                        style={{
                          // filter: "drop-shadow(0 0 0.12rem black)",
                          userSelect: "none",
                        }}
                        svg
                      />
                      <p className="font-semibold text-sm select-none text-green hover:underline cursor-pointer">
                        {winnerName}
                      </p>
                    </div>
                  </td>
                  <td className="p-2">
                    <p className="flex items-center gap-2 font-semibold text-sm select-none text-darkerGray ">
                      {winnerElo}
                      {winnerEloDiff > 0 ? (
                        <PositiveELO elo={winnerEloDiff} />
                      ) : winnerEloDiff < 0 ? (
                        <NegativeELO elo={winnerEloDiff} />
                      ) : (
                        <>{""}</>
                      )}
                    </p>
                  </td>
                  <td className="p-2">
                    <p className="flex items-center gap-2 font-semibold text-sm select-none text-darkerGray ">
                      {winnerSurfElo}
                      {winnerSurfEloDiff > 0 ? (
                        <PositiveELO elo={winnerSurfEloDiff} />
                      ) : winnerSurfEloDiff < 0 ? (
                        <NegativeELO elo={winnerSurfEloDiff} />
                      ) : (
                        <>{""}</>
                      )}
                    </p>
                  </td>
                  <td className="p-2">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <ReactCountryFlag
                        countryCode={loserCountry}
                        style={{
                          // filter: "drop-shadow(0 0 0.12rem black)",
                          userSelect: "none",
                        }}
                        svg
                      />
                      <p className="font-semibold text-sm select-none text-green hover:underline cursor-pointer">
                        {loserName}
                      </p>
                    </div>
                  </td>
                  <td className="p-2">
                    <p className="flex items-center gap-2 font-semibold text-sm select-none text-darkerGray ">
                      {loserElo}
                      {loserEloDiff > 0 ? (
                        <PositiveELO elo={loserEloDiff} />
                      ) : loserEloDiff < 0 ? (
                        <NegativeELO elo={loserEloDiff} />
                      ) : (
                        <>{""}</>
                      )}
                    </p>
                  </td>
                  <td className="p-2">
                    <p className="flex items-center gap-2 font-semibold text-sm select-none text-darkerGray ">
                      {loserSurfElo}
                      {loserSurfEloDiff > 0 ? (
                        <PositiveELO elo={loserSurfEloDiff} />
                      ) : loserSurfEloDiff < 0 ? (
                        <NegativeELO elo={loserSurfEloDiff} />
                      ) : (
                        <>{""}</>
                      )}
                    </p>
                  </td>
                  <td className="p-2">
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {score}
                    </p>
                  </td>
                  <td className="p-2">
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
  );
}
