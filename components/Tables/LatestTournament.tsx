"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LatestTournament() {
  const router = useRouter();
  const tableHead = ["Round", "Winner", "Loser", "Score", "H2H"];

  const tournamentData = [
    {
      tournamentName: "Dubai",
      tournamentDate: "2021-06",
      matches: [
        {
          id: "1",
          round: "F",
          winner: "Djokovic Novac",
          loser: "Nadal Rafael",
          score: "3-6 6-3 6-3",
          h2h: "/h2h",
        },
        {
          id: "2",
          round: "F",
          winner: "Djokovic Novac",
          loser: "Nadal Rafael",
          score: "3-6 6-3 6-3",
          h2h: "/h2h",
        },
        {
          id: "3",
          round: "F",
          winner: "Djokovic Novac",
          loser: "Nadal Rafael",
          score: "3-6 6-3 6-3",
          h2h: "/h2h",
        },
      ],
    },
    {
      tournamentName: "Acapulco",
      tournamentDate: "2021-06",
      matches: [
        {
          id: "1",
          round: "QF",
          winner: "Djokovic Novac",
          loser: "Nadal Rafael",
          score: "3-6 6-3 6-3",
          h2h: "/h2h",
        },
        {
          id: "2",
          round: "QF",
          winner: "Djokovic Novac",
          loser: "Nadal Rafael",
          score: "3-6 6-3 6-3",
          h2h: "/h2h",
        },
        {
          id: "3",
          round: "QF",
          winner: "Djokovic Novac",
          loser: "Nadal Rafael",
          score: "3-6 6-3 6-3",
          h2h: "/h2h",
        },
      ],
    },
  ];

  function SampleNextArrow(props: any) {
    const { onClick, style, className } = props;
    return (
      <FaChevronRight
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#444444",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { onClick, style, className } = props;
    return (
      <FaChevronLeft
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#444444",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="px-0 md:px-6">
      {/* Tablet - Desktop */}
      <div className="hidden md:block">
        <Slider {...settings}>
          {tournamentData.map(
            ({ tournamentName, tournamentDate, matches }, index) => (
              <div
                key={index}
                className=" bg-lightGray flex-col gap-4 p-4 rounded-lg"
              >
                <div className="flex justify-between">
                  <p className="font-semibold text-lg text-darkerGray select-none">
                    {tournamentName}
                  </p>
                  <p className="font-semibold text-lg text-darkerGray select-none">
                    {tournamentDate}
                  </p>
                </div>
                <table className="mt-2.5 w-full min-w-min table-auto text-left">
                  <thead>
                    <tr className="sticky top-0 z-10 border-b-2 border-b-gray">
                      {tableHead.map((head, index) => (
                        <th
                          key={index}
                          className="cursor-pointer px-2 py-2 text-xs text-darkGray"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {matches.map(({ id, round, winner, loser, score, h2h }) => {
                      const classes = "px-2 py-2 border-b-2 border-lightGray";
                      return (
                        <tr key={id}>
                          <td className={classes}>
                            <p className="font-semibold text-sm text-darkerGray">
                              {round}
                            </p>
                          </td>
                          <td className={classes}>
                            <p className="font-semibold text-sm text-green hover:underline cursor-pointer">
                              {winner}
                            </p>
                          </td>
                          <td className={classes}>
                            <p className="font-semibold text-sm text-green hover:underline cursor-pointer">
                              {loser}
                            </p>
                          </td>
                          <td className={classes}>
                            <p className="font-semibold text-sm text-darkerGray">
                              {score}
                            </p>
                          </td>
                          <td className={classes}>
                            <div
                              className="w-fit border-2 border-gray hover:bg-green/10 hover:border-green hover:text-green px-4 py-1 text-center rounded-lg font-semibold text-sm text-gray uppercase cursor-pointer"
                              onClick={() => router.push(`${h2h}`)}
                            >
                              H2H
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )
          )}
        </Slider>
      </div>
      <div className="flex md:hidden flex-col gap-4">
        
        {tournamentData.map(
          ({ tournamentName, tournamentDate, matches }, index) => (
            <div
              key={index}
              className="bg-lightGray flex flex-col gap-4 p-4 rounded-lg"
            >
              <div className="flex justify-between">
                <p className="font-semibold text-lg text-darkerGray select-none">
                  {tournamentName}
                </p>
                <p className="font-semibold text-lg text-darkerGray select-none">
                  {tournamentDate}
                </p>
              </div>
              <div className="overflow-x-auto max-lg:max-h-[500px]">
              <table className="mt-2.5 w-full min-w-max table-auto text-left">
                <thead>
                  <tr className="sticky top-0 z-10 border-b-2 border-b-gray">
                    {tableHead.map((head, index) => (
                      <th
                        key={index}
                        className="cursor-pointer px-2 py-2 text-xs text-darkGray"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {matches.map(({ id, round, winner, loser, score, h2h }) => {
                    const classes = "px-2 py-2 border-b-2 border-lightGray";
                    return (
                      <tr key={id}>
                        <td className={classes}>
                          <p className="font-semibold text-sm text-darkerGray">
                            {round}
                          </p>
                        </td>
                        <td className={classes}>
                          <p className="font-semibold text-sm text-green hover:underline cursor-pointer">
                            {winner}
                          </p>
                        </td>
                        <td className={classes}>
                          <p className="font-semibold text-sm text-green hover:underline cursor-pointer">
                            {loser}
                          </p>
                        </td>
                        <td className={classes}>
                          <p className="font-semibold text-sm text-darkerGray">
                            {score}
                          </p>
                        </td>
                        <td className={classes}>
                          <div
                            className="w-fit border-2 border-gray hover:bg-green/10 hover:border-green hover:text-green px-4 py-1 text-center rounded-lg font-semibold text-sm text-gray uppercase cursor-pointer"
                            onClick={() => router.push(`${h2h}`)}
                          >
                            H2H
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
