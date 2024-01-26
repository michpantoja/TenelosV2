import Banner from "@/components/Banner";
import News from "@/components/News";
import TournamentsTable from "@/components/Tables/Tournaments";
import React from "react";

export default function Tournaments() {
  return (
    <div className="w-full flex gap-6">
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <p className="font-semibold text-xl text-darkerGray select-none">
          Tournaments
        </p>
        <TournamentsTable />
      </div>
      <div className="w-1/4 hidden lg:flex flex-col gap-4">
        <News />
      </div>
    </div>
  );
}
