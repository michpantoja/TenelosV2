"use client";

import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

function Table({
  tableHead,
  tableRows,
  playBgColor,
}: {
  tableHead: string[];
  tableRows: any[];
  playBgColor: string;
}) {
  return (
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
        {tableRows?.map(
          ({ rank, countryCode, name, last10 }: any, index: number) => {
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
                        userSelect: "none",
                      }}
                      svg
                    />
                    <p className="font-medium text-sm select-none text-green hover:underline cursor-pointer">
                      {name}
                    </p>
                  </div>
                </td>
                <td className={classes}>
                  <p
                    className={`w-fit px-4 lg:px-2 py-1 bg-${playBgColor} rounded-full font-semibold text-sm select-none text-[#FFFFFF] text-center`}
                  >
                    {last10}
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

export default function Last10HPTable() {
  const [toggleRecords, setToggleRecords] = useState(1);

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
              onClick={() => setToggleRecords(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <Table
        tableHead={tableHead}
        tableRows={tableRows}
        playBgColor={recordType[toggleRecords - 1].playBgColor}
      />
    </div>
  );
}
