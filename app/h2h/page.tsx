"use client";

import Banner from "@/components/Banner";
import BarChart from "@/components/Charts/Bar";
import Graph from "@/components/Charts/Graph";
import Player from "@/components/Player";
import MatchHistoryTable from "@/components/Tables/MatchHistory";
import React from "react";
import { Bar } from "react-chartjs-2";

export default function H2H() {
  return (
    <div className="w-full flex flex-col gap-6">
      <p className="font-semibold text-xl text-darkerGray select-none text-center">
        Head 2 Head
      </p>
      <div className="w-full flex justify-between">
        <Player head={1} />
        <BarChart/>
        <Player head={2} />
      </div>
      <hr className="w-full border-gray" />
      <Graph />
      <hr className="w-full border-gray" />
      <MatchHistoryTable />
    </div>
  );
}
