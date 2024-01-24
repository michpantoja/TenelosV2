"use client";

import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function Top15AT() {
  const [toggleRecords, seToggleRecords] = useState(1);

  const recordType = [
    {
      id: 1,
      name: "Average",
    },
    {
      id: 2,
      name: "Overall",
    },
    {
      id: 3,
      name: "Hard",
    },
    {
      id: 4,
      name: "Clay",
    },
    {
      id: 5,
      name: "Grass",
    },
    {
      id: 5,
      name: "ATP",
    },
  ];

  const AvgTableHead = ["Rank", "Name", "ELO"];

  const AvgTableRows = [
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      elo: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      elo: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      elo: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      elo: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      elo: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      elo: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      elo: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      elo: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      elo: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      elo: "3093",
    },
  ];
  const tableHead = ["Rank", "Name", "Peak", "Date"];

  const tableRows = [
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      peak: "3092",
      date: "1985-09"
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      peak: "3092",
      date: "1985-09"
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      peak: "3092",
      date: "1985-09"
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      peak: "3092",
      date: "1985-09"
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      peak: "3092",
      date: "1985-09"
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      peak: "3092",
      date: "1985-09"
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      peak: "3092",
      date: "1985-09"
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      peak: "3092",
      date: "1985-09"
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      peak: "3092",
      date: "1985-09"
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      peak: "3092",
      date: "1985-09"
    },
  ];

  return (
    <div className="flex flex-col border border-gray rounded-lg">
      <div className="flex flex-col px-4 pt-5 gap-2.5">
        <p className="font-semibold text-lg text-darkerGray select-none">
          Top 15s All-time
        </p>
        <div className="flex gap-2.5 pt-3 overflow-auto">
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
      </div>
      {toggleRecords === 1 ? (
        <table className="w-full min-w-min table-auto text-left">
          <thead>
            <tr className="border-b border-b-gray">
              {AvgTableHead.map((head, index) => (
                <th key={index} className="bg-[#FFFFFF] px-4 py-2 select-none">
                  <div className="font-medium text-xs text-darkGray select-none">
                    {head}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AvgTableRows?.map(({ rank, countryCode, name, elo }, index) => {
              const isEven = index % 2 === 0;
              const classes = isEven ? "p-4 bg-lightGray" : "p-4";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <p className="font-medium text-sm select-none text-darkerGray">
                      {rank}
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
                      <p className="font-medium text-sm select-none text-darkerGray hover:text-green cursor-pointer">
                        {name}
                      </p>
                    </div>
                  </td>
                  <td className={classes}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {elo}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <table className="w-full min-w-min table-auto text-left">
          <thead>
            <tr className="border-b border-b-gray">
              {tableHead.map((head, index) => (
                <th key={index} className="bg-[#FFFFFF] px-4 py-2 select-none">
                  <div className="font-medium text-xs text-darkGray select-none">
                    {head}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows?.map(({ rank, countryCode, name, peak, date }, index) => {
              const isEven = index % 2 === 0;
              const classes = isEven ? "p-4 bg-lightGray" : "p-4";

              return (
                <tr key={name}>
                  <td className={`w-[50px] ${classes}`}>
                    <p className="font-medium text-sm select-none text-darkerGray">
                      {rank}
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
                      <p className="font-medium text-sm select-none text-darkerGray hover:text-green cursor-pointer">
                        {name}
                      </p>
                    </div>
                  </td>
                  <td className={classes}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {peak}
                    </p>
                  </td>
                  <td className={classes}>
                    <p className="font-semibold text-sm select-none text-darkerGray">
                      {date}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
