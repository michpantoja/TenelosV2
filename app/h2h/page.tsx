"use client";

import Banner from "@/components/Banner";
import Graph from "@/components/Charts/Graph";
import Player from "@/components/Player";
import MatchHistoryTable from "@/components/Tables/MatchHistory";
import React from "react";

export default function H2H() {
  return (
    <main className="w-full px-6 xl:px-32 pb-4 xl:pb-8 gap-6 flex flex-col items-center">
      <Banner />
      <div className="w-full flex flex-col gap-6">
        <p className="font-semibold text-xl text-darkerGray select-none text-center">
          Head 2 Head
        </p>
        <div className="w-full flex justify-between">
          <Player head={1} />
          <Player head={2} />
        </div>
        <hr className="w-full border-gray" />
        <Graph />
        <hr className="w-full border-gray" />
        <MatchHistoryTable />
      </div>
    </main>
  );
}
