"use client";

import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function Last10HPTable() {
  const [toggleRecords, seToggleRecords] = useState(1);

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
  ];

  const tableHead = ["Rank", "Name", "Last 10"];

  const tableRows = [
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      last10: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      last10: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      last10: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      last10: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      last10: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      last10: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      last10: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      last10: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      last10: "3093",
    },
    {
      rank: "1",
      countryCode: "RS",
      name: "Djokovic Novac",
      last10: "3093",
    },
  ];

  return (
    <div className="flex flex-col border border-gray rounded-lg">
      <div className="flex flex-col px-4 pt-5 gap-2.5">
        <p className="font-semibold text-lg text-darkerGray select-none">
          Last 10 Hot Performances
        </p>
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
      </div>
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
          {tableRows?.map(({ rank, countryCode, name, last10 }, index) => {
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
                    {last10}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
